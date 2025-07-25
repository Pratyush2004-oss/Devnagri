import { db } from "@/config";
import { Users } from "@/config/schema";
import { LoginInput, SignupInput, User } from "@/types";
import { eq } from "drizzle-orm";
import { toast } from "sonner";
import { create } from "zustand";

interface UserStore {
  user: User | null;
  isAdmin: boolean;
  isCheckingUser: boolean;
  signup: (input: SignupInput) => Promise<boolean>;
  login: (input: LoginInput) => Promise<boolean>;
  checkAuth: () => Promise<void>;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set, get) => ({
  user: null,
  isCheckingUser: true,
  isAdmin: false,
  signup: async (input) => {
    try {
      if (!(input.email && input.name && input.password)) {
        toast.error("All fields are required");
        return false;
      }
      const user = await db
        .select({ email: Users.email })
        .from(Users)
        .where(eq(Users.email, input.email));
      if (user.length > 0) {
        toast.error("User already exists");
        return false;
      }
      const uid = crypto.randomUUID();
      const response = await db
        .insert(Users)
        .values({
          id: uid,
          name: input.name,
          email: input.email,
          password: input.password,
        })
        .returning();
      if (response) {
        set({ user: response[0] });
        toast.success("User Rgistered Successfully");
        localStorage.setItem("user", JSON.stringify(response[0]));
        if (response[0].email === process.env.NEXT_PUBLIC_ADMIN_ID) {
          set({ isAdmin: true });
        } else {
          set({ isAdmin: false });
        }
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      return false;
    }
  },
  login: async (input) => {
    try {
      const response = await db
        .select()
        .from(Users)
        .where(eq(Users.email, input.email));

      if (response.length === 0) {
        toast.error("Invalid credentials");
        return false;
      }

      const isPasswordMatch = response[0].password === input.password;
      if (!isPasswordMatch) {
        toast.error("Invalid credentials");
        return false;
      }
      set({ user: response[0] });
      localStorage.setItem("user", JSON.stringify(response[0]));
      if (response[0].email === process.env.NEXT_PUBLIC_ADMIN_ID) {
        set({ isAdmin: true });
      }
      return true;
    } catch (error) {
      toast.error("Something went wrong");
      return false;
    }
  },
  checkAuth: async () => {
    try {
      const user = localStorage.getItem("user");
      if (user) {
        const isUserAuthenticated = await db
          .select()
          .from(Users)
          .where(eq(Users.id, JSON.parse(user).id));
        console.log(isUserAuthenticated);
        if (isUserAuthenticated.length !== 0) {
          set({ user: JSON.parse(user), isCheckingUser: false });
          if (JSON.parse(user).email === process.env.NEXT_PUBLIC_ADMIN_ID) {
            set({ isAdmin: true });
          } else {
            set({ isAdmin: false });
          }
        }
      }
    } catch (error) {
      set({ user: null });
    } finally {
      set({ isCheckingUser: false });
    }
  },
  logout: () => {
    try {
      localStorage.removeItem("user");
      set({ user: null, isAdmin: false });
    } catch (error) {
      toast.error("Error in Logging Out");
    }
  },
}));
