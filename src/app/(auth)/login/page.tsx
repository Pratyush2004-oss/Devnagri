"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUserStore } from "@/store/user.store";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Login = () => {
  const [input, setinput] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();
  const { login } = useUserStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(input);
      if (res) {
        router.replace("/");
      }
    } catch (error) {
    } finally {
      setisLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)]">
      <div className="p-4 border-2 gradient-border rounded-lg flex flex-col min-w-1/2 items-center">
        <div className="flex border-b-4 w-full justify-center">
          <h1>Login</h1>
        </div>
        <form className="my-4" onSubmit={handleSubmit}>
          <div className="relative w-full flex flex-col gap-1">
            <Label>Email</Label>
            <Input className="" name="email" onChange={handleChange} />
          </div>
          <div className="relative w-full flex flex-col gap-1">
            <Label>Password</Label>
            <Input
              className=""
              name="password"
              type="password"
              onChange={handleChange}
            />
          </div>
          <Button className="primary-button" type="submit">
            {isLoading ? (
              <Loader className="animate-spin text-white" />
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
