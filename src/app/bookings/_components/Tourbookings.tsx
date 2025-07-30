"use client";
import useBookingHook from "@/hooks/booking.hooks";
import { BookingType } from "@/types";
import React, { useEffect, useState } from "react";

const Tourbookings = () => {
  const { getAllTourBookings } = useBookingHook();
  const [bookings, setBookings] = useState<BookingType[]>([]);
  useEffect(() => {
    const fetchBookingsAsync = async () => {
      const fetchedBookings = await getAllTourBookings();
      if (fetchedBookings === undefined || "error" in fetchedBookings) return;
      setBookings(bookings);
    };
    fetchBookingsAsync();
  }, []);
  return <div>Tourbookings</div>;
};

export default Tourbookings;
