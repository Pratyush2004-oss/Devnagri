import { db } from "@/config";
import { Bookings, Queries, TaxiBooking, Taxis, Users } from "@/config/schema";
import { desc, eq } from "drizzle-orm";

const useAdminHook = () => {
  // fetch Tour Bookings
  const fetchBookings = async () => {
    const fetchedBookings = await db
      .select({
        id: Bookings.id,
        date: Bookings.bookingDate,
        startData: Bookings.startDate,
        people: Bookings.people,
        days: Bookings.days,
        price: Bookings.price,
        placeList: Bookings.placeList,
        name: Bookings.name,
        user: {
          name: Users.name,
          id: Users.id,
          email: Users.email,
        },
      })
      .from(Bookings)
      .fullJoin(Users, eq(Users.id, Bookings.user))
      .limit(10)
      .orderBy(desc(Bookings.id));
    return fetchedBookings;
  };
  //   fetch Taxi Bookings
  const fetchTaxiBookings = async () => {
    const fetchedTaxiBookings = await db
      .select({
        id: TaxiBooking.id,
        date: TaxiBooking.date,
        source: TaxiBooking.source,
        destination: TaxiBooking.destination,
        price: TaxiBooking.price,
        bookingDate: TaxiBooking.bookingDate,
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
      .limit(10)
      .orderBy(desc(TaxiBooking.id));

    return fetchedTaxiBookings;
  };
  //   fetch Queries
  const fetchQueries = async () => {
    const fetchedQueries = await db.select().from(Queries).limit(10);
    return fetchedQueries;
  };
  // get details for dashboard like number of users, taxi-bookings,
  const fetchDetails = async () => {
    const users = await db.$count(Users);
    const taxiBookings = await db.$count(TaxiBooking);
    const queries = await db.$count(Queries);
    const taxis = await db.$count(Taxis);
    const bookings = await db.$count(Bookings);
    return { users, taxiBookings, queries, taxis, bookings };
  }
  //   add taxi-information


  return { fetchBookings, fetchTaxiBookings, fetchQueries, fetchDetails };
};

export default useAdminHook;
