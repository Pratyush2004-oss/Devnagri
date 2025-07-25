"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

const Login = () => {
  const [input, setinput] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)]">
      <div className="p-4 border-2 rounded-lg flex flex-col min-w-1/2 items-center">
        <div className="flex border-b-4 w-full justify-center">
          <h1>Login</h1>
        </div>
        <form className="my-4">
          <div className="relative w-full flex flex-col gap-1">
            <Label>Email</Label>
            <Input className="" />
          </div>
          <div className="relative w-full flex flex-col gap-1">
            <Label>Password</Label>
            <Input className="" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
