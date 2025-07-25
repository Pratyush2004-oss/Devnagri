"use client";
import { useUserStore } from "@/store/user.store";
import { redirect, usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Redirect = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const { user, isAdmin, checkAuth } = useUserStore();
  useEffect(() => {
    checkAuth();
  }, [user]);
  if (path.includes("/login") && user) return redirect("/");
  if (path.includes("/signup") && user) return redirect("/");
  if (path.includes("/admin") && !isAdmin) return redirect("/");
  return <div>{children}</div>;
};

export default Redirect;
