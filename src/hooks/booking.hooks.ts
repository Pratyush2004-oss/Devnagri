import { db } from "@/config";
import { Bookings, TaxiBooking } from "@/config/schema";
import { useUserStore } from "@/store/user.store";
import { BookingInput, BookingType, TaxiBookingInput } from "@/types";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const useBookingHook = () => {
  const { user } = useUserStore();
  const router = useRouter();
  const bookTour = async (input: BookingInput) => {
    try {
      // checking all things are not null
      if (
        !input.PackageName ||
        !input.PackageDays ||
        !input.PackagePrice ||
        !input.people ||
        !input.startDate
      ) {
        toast.error("All fields are required");
        return;
      }

      const response = await db
        .insert(Bookings)
        .values({
          user: user?.id,
          bookingDate: new Date(),
          startDate: input.startDate,
          name: input.PackageName,
          price: input.PackagePrice,
          people: input.people,
          days: input.PackageDays,
          placeList: input.PlaceList,
        } as any)
        .returning();

      if (response) {
        toast.success("Booking Successfull....");
        router.push("/bookings");
      }
    } catch (error) {
        console.log(error);
      toast.error("Something went wrong");
    }
  };
  const bookTaxi = async (input: TaxiBookingInput) => {
    try {
      if (
        !input.taxi ||
        !input.source ||
        !input.destination ||
        !input.date ||
        !input.price
      ) {
        toast.error("All fields are required");
        return;
      }
      const response = await db
        .insert(TaxiBooking)
        .values({
          bookingDate: input.date,
          date: Date.now(),
          source: input.source,
          destination: input.destination,
          taxi: input.taxi,
          price: input.price,
          user: user?.id,
        } as any)
        .returning();

      if (response) {
        toast.success("Taxi Booked Successfull....");
        router.push("/bookings");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return { bookTour, bookTaxi };
};

export default useBookingHook;
