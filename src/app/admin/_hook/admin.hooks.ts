import { db } from "@/config";
import { Bookings, Queries, TaxiBooking, Taxis, Users } from "@/config/schema";
import { desc, eq } from "drizzle-orm";
import { toast } from "sonner";

const useAdminHook = () => {
  // fetch Tour Bookings
  const fetchBookings = async (offset: number) => {
    const fetchedBookings = await db
      .select({
        id: Bookings.id,
        date: Bookings.bookingDate,
        startDate: Bookings.startDate,
        people: Bookings.people,
        days: Bookings.days,
        price: Bookings.price,
        placeList: Bookings.placeList,
        name: Bookings.name,
        status: Bookings.status,
        user: {
          name: Users.name,
          id: Users.id,
          email: Users.email,
        },
      })
      .from(Bookings)
      .fullJoin(Users, eq(Users.id, Bookings.user))
      .limit(10)
      .offset(offset - 1)
      .orderBy(desc(Bookings.id));
    return fetchedBookings;
  };
  //   fetch Taxi Bookings
  const fetchTaxiBookings = async (offset: number) => {
    const fetchedTaxiBookings = await db
      .select({
        id: TaxiBooking.id,
        date: TaxiBooking.date,
        source: TaxiBooking.source,
        destination: TaxiBooking.destination,
        price: TaxiBooking.price,
        bookingDate: TaxiBooking.bookingDate,
        status: TaxiBooking.status,
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
      .offset(offset - 1)
      .orderBy(desc(TaxiBooking.id));

    return fetchedTaxiBookings;
  };
  //   fetch Queries
  const fetchQueries = async (offset: number) => {
    const fetchedQueries = await db
      .select({
        id: Queries.id,
        name: Queries.name,
        email: Queries.email,
        message: Queries.message,
      })
      .from(Queries)
      .limit(10)
      .offset(offset - 1)
      .orderBy(desc(Queries.id));
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
  };
  //   add taxi-information

  // verify Booking
  const verifyBooking = async (
    id: number,
    status: "approved" | "rejected",
    database: "bookings" | "taxi_bookings"
  ) => {
    try {
      if (database === "bookings") {
        const response = await db
          .update(Bookings)
          .set({ status: status })
          .where(eq(Bookings.id, id))
          .returning();
        if (response) {
          toast.success(`Booking ${status} successfully`);
        }
      }
      if (database === "taxi_bookings") {
        const response = await db
          .update(TaxiBooking)
          .set({ status: status })
          .where(eq(TaxiBooking.id, id))
          .returning();
        if (response) {
          toast.success(`Booking ${status} successfully`);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return {
    fetchBookings,
    fetchTaxiBookings,
    fetchQueries,
    fetchDetails,
    verifyBooking,
  };
};

export default useAdminHook;
