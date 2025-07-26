"use client";
import React from "react";
import Details from "./_components/Details";
import { useUserStore } from "@/store/user.store";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookImage,
  CarTaxiFront,
  MessageCircleQuestionIcon,
} from "lucide-react";
import BookingTable from "./_components/BookingTable";
import QueriesTable from "./_components/QueriesTable";
import TaxiBookingTable from "./_components/TaxiBookingTable";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const AdminPanel = () => {
  const { isAdmin } = useUserStore();
  if (!isAdmin)
    return (
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
        <Image
          src={"/devnagri.png"}
          width={200}
          height={200}
          alt={"logo"}
          className="mb-5 animate-bounce"
        />
        <h1 className="text-xl md:text-2xl mb-5 font-bold text-center text-red-400 font-mono">
          Unauthorized
        </h1>
      </div>
    );
  return (
    <div className="px-3 mx-auto flex flex-col items-center min-h-[calc(100vh-4rem)]">
      <Details />
      <Tabs defaultValue="Bookings" className="w-full mt-5">
        <TabsList className="mx-auto">
          <TabsTrigger value={"Bookings"}>
            <BookImage />
            Bookings
          </TabsTrigger>
          <TabsTrigger value={"Queries"}>
            <MessageCircleQuestionIcon />
            Queries
          </TabsTrigger>
          <TabsTrigger value={"Taxi Bookings"}>
            <CarTaxiFront />
            Taxi Bookings
          </TabsTrigger>
        </TabsList>
        {/* Sorting Dropdown */}
        <div className="flex items-center gap-3">
          <Select>
            <SelectTrigger className="my-2 w-full">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="my-2 w-full">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="my-2 w-full">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <TabsContent value="Bookings" className="h-[calc(100vh-10rem)] w-full">
          <BookingTable />
        </TabsContent>
        <TabsContent value="Queries" className="h-[calc(100vh-10rem)] w-full">
          <QueriesTable />
        </TabsContent>
        <TabsContent
          value="Taxi Bookings"
          className="h-[calc(100vh-10rem)] w-full"
        >
          <TaxiBookingTable />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPanel;
