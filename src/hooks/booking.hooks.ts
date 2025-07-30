import { db } from "@/config";
import { Bookings, TaxiBooking, Taxis, Users } from "@/config/schema";
import { useUserStore } from "@/store/user.store";
import { BookingInput, TaxiBookingInput } from "@/types";
import { desc, eq } from "drizzle-orm";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const useBookingHook = () => {
  const { user } = useUserStore();
  const router = useRouter();
  const bookTour = async (input: BookingInput) => {
    try {
      // checking all things are not null
      if (
        !input.PackageName ||
        !input.PackageDays ||
        !input.PackagePrice ||
        !input.people ||
        !input.startDate
      ) {
        toast.error("All fields are required");
        return;
      }
      if (!user) return toast.error("User not found");

      const response = await db
        .insert(Bookings)
        .values({
          user: user?.id,
          bookingDate: new Date(),
          startDate: input.startDate,
          name: input.PackageName,
          price: input.PackagePrice,
          people: input.people,
          days: input.PackageDays,
          placeList: input.PlaceList,
        } as any)
        .returning();

      if (response) {
        toast.success("Booking Successfull....");
        router.push("/bookings");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const bookTaxi = async (input: TaxiBookingInput) => {
    try {
      if (
        !input.taxi ||
        !input.source ||
        !input.destination ||
        !input.date ||
        !input.price
      ) {
        toast.error("All fields are required");
        return;
      }
      if (!user) return toast.error("User not found");
      const response = await db
        .insert(TaxiBooking)
        .values({
          bookingDate: input.date,
          date: Date.now(),
          source: input.source,
          destination: input.destination,
          taxi: input.taxi,
          price: input.price,
          user: user?.id,
        } as any)
        .returning();

      if (response) {
        toast.success("Taxi Booked Successfull....");
        router.push("/bookings");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const getAllTourBookings = async () => {
    try {
      if (!user) return { error: "User not found" };
      const fetchedBookings = await db
        .select({
          id: Bookings.id,
          date: Bookings.bookingDate,
          startDate: Bookings.startDate,
          people: Bookings.people,
          days: Bookings.days,
          price: Bookings.price,
          placeList: Bookings.placeList,
          name: Bookings.name,
          status: Bookings.status,
          user: {
            name: Users.name,
            id: Users.id,
            email: Users.email,
          },
        })
        .from(Bookings)
        .fullJoin(Users, eq(Users.id, Bookings.user))
        .where(eq(Bookings.user, user.id))
        .orderBy(desc(Bookings.id));
      return fetchedBookings;
    } catch (error) {
      return { error: "Something went wrong" };
    }
  };
  const getAllTaxiBookings = async () => {
    try {
      if (!user) return { error: "User not found" };
      const response = await db
        .select({
          id: TaxiBooking.id,
          date: TaxiBooking.date,
          source: TaxiBooking.source,
          destination: TaxiBooking.destination,
          price: TaxiBooking.price,
          bookingDate: TaxiBooking.bookingDate,
          status: TaxiBooking.status,
          user: {
            name: Users.name,
            id: Users.id,
            email: Users.email,
          },
          taxi: {
            id: Taxis.id,
            seats: Taxis.seats,
            model: Taxis.model,
            vehicleNumber: Taxis.vehicleNumber,
            driver: Taxis.driver,
            driverPhoneNumber: Taxis.driverPhoneNumber,
          },
        })
        .from(TaxiBooking)
        .rightJoin(Users, eq(Users.id, TaxiBooking.user))
        .rightJoin(Taxis, eq(Taxis.id, TaxiBooking.taxi))
        .where(eq(TaxiBooking.user, user.id))
        .orderBy(desc(TaxiBooking.id));
      return response;
    } catch (error) {
      return { error: "Something went wrong" };
    }
  };

  return { bookTour, bookTaxi, getAllTourBookings, getAllTaxiBookings };
};

export default useBookingHook;
