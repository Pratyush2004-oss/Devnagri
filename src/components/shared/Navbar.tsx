"use client";
import { NavData } from "@/constants/navdata";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useUserStore } from "@/store/user.store";
const Navbar = () => {
  const [hidden, sethidden] = useState(true);
  const { isAdmin } = useUserStore();
  return (
    <div className="px-4 pb-2 max-w-[1800px] mx-auto border-b-2">
      <div className="flex justify-between items-center ">
        <Image
          src={"/devnagri.png"}
          height={1000}
          width={1000}
          alt=""
          className="cursor-pointer w-28 "
        />
        {isAdmin ? "admin " : ""}
        {/* Desktop view */}
        <div className="md:flex items-center justify-center gap-4 hidden">
          {NavData.map((item, index) => (
            <Link key={index} href={item.url} className="dark:text-white">
              <h3 className="hover:text-gray-400 text-white">{item.title}</h3>
            </Link>
          ))}
          <Link href={"/login"}>
            <Button className="primary-button w-fit">Login</Button>
          </Link>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col">
          <Button
            onClick={() => sethidden(!hidden)}
            variant={"ghost"}
            size={"icon"}
            className="hover:bg-gradient-to-b from-green-300/20 to-lime-500/20"
          >
            {!hidden ? (
              <X className="dark:text-white size-6" />
            ) : (
              <Menu className="dark:text-white size-6" />
            )}
          </Button>
        </div>
      </div>
      <motion.div
        className={`${hidden ? "hidden" : "flex"} flex-col gap-1 mt-2`}
        initial={{ y: "-100%" }}
        animate={{ y: hidden ? "-100%" : "0%" }}
        exit={{ y: "-100%", transition: { duration: 0.5 } }}
        transition={{ duration: 0.5 }}
      >
        {NavData.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="dark:text-white hover:bg-gray-100 px-4 py-2 rounded-lg hover:text-red-300 w-full"
          >
            <h3 className="text-white">{item.title}</h3>
          </Link>
        ))}
        <Link href={"/login"}>
          <Button className="text-white w-full primary-button mt-1">
            Login
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Navbar;
