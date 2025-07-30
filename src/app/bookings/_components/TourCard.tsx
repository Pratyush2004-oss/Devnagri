import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IMAGES } from "@/constants/packages";
import { BookingType } from "@/types";

function BookedTourCard({ pack }: { pack: BookingType; lineclamp?: boolean }) {
  return (
    <Card className="border rounded-3xl shadow-md gradient-border">
      <CardHeader>
        <img
          src={IMAGES[Math.floor(Math.random() * IMAGES.length)]}
          alt={pack.name ?? ""}
          width={500}
          height={500}
          className="w-full h-56 md:h-72 object-cover rounded-br-xl rounded-tr-2xl shadow-lg"
        />
      </CardHeader>
      <CardContent className="mt-auto flex flex-col">
        <CardTitle>
          <h2 className="text-xl md:text-2xl font-bold my-4 text-center border-b-2">
            {pack.name}
          </h2>
        </CardTitle>
        <CardDescription className="grid grid-cols-2 gap-5 p-2 text-sm font-medium sm:text-base sm:font-semibold mt-auto">
          <p className="text-center">
            Start Date: <br />{" "}
            <span className="font-bold">
              {(pack.startDate as string) ?? ""}
            </span>
          </p>
          <p className="text-center">Days: {pack.days}</p>
          <p className=" font-semibold text-center">Price: ₹ {pack.price}</p>
          <p className=" font-semibold text-center">People: {pack.people}</p>
          {(pack.placeList ?? []).length > 0 && (
            <p className=" font-semibold col-span-2 text-center">
              Places: {pack.placeList ?? ""}
            </p>
          )}
          <span className="">{pack.status}</span>
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default BookedTourCard;
