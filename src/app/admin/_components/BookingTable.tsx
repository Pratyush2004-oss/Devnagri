"use client";

import React, { useEffect, useState } from "react";
import useAdminHook from "../_hook/admin.hooks";
import { BookingType } from "@/types";

const BookingTable = () => {
  const [bookings, setBookings] = useState<BookingType[]>([]);
  const { fetchBookings } = useAdminHook();
  useEffect(() => {
    const fetchBookingsAsync = async () => {
      const bookings = await fetchBookings();
      setBookings(bookings);
    };
    fetchBookingsAsync();
  }, []);
  return <div>BookingTable</div>;
};

export default BookingTable;
