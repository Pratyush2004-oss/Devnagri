import { TaxiBookingsTypes } from '@/types';
import React, { useEffect, useState } from 'react'
import useAdminHook from '../_hook/admin.hooks';

const TaxiBookingTable = () => {
  const [taxiBookings, settaxiBookings] = useState<TaxiBookingsTypes[]>([]);
  const { fetchTaxiBookings } = useAdminHook();

  useEffect(() =>{
    const fetchTaxiBookingsAsync = async () => {
      const taxiBookings = await fetchTaxiBookings();
      settaxiBookings(taxiBookings);
    };
    fetchTaxiBookingsAsync();
  },[])
  return (
    <div>TaxiBookingTable</div>
  )
}

export default TaxiBookingTable