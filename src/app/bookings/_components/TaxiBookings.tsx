import useBookingHook from "@/hooks/booking.hooks";
import { TaxiBookingsTypes } from "@/types";
import React, { useEffect, useState } from "react";

const TaxiBookings = () => {
  const { getAllTaxiBookings } = useBookingHook();
  const [bookings, setBookings] = useState<TaxiBookingsTypes[]>([]);
  useEffect(() => {
    const fetchBookingsAsync = async () => {
      const fetchedTourBookings = await getAllTaxiBookings();
      if("error" in fetchedTourBookings) return
      setBookings(bookings);
    };
    fetchBookingsAsync();
  }, []);
  if (bookings.length === 0)
    return <h5 className="text-center mt-10">No Bookings found</h5>;
  return <div>TaxiBookings</div>;
};

export default TaxiBookings;
