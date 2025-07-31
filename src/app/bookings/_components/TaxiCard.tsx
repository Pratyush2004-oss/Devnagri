import { TaxiBookingsTypes } from "@/types";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IMAGES } from "@/constants/packages";
import TaxiInformation from "@/components/shared/TaxiInformation";
import { Badge } from "@/components/ui/badge";

const TaxiBookingCard = ({ pack }: { pack: TaxiBookingsTypes }) => {
  return (
    <Card className="border rounded-3xl shadow-md gradient-border">
      <CardHeader>
        <img
          src={IMAGES[Math.floor(Math.random() * IMAGES.length)]}
          alt={pack.taxi?.id ?? ""}
          width={500}
          height={500}
          className="w-full h-56 md:h-72 object-cover rounded-br-xl rounded-tr-2xl shadow-lg rounded-bl-xl"
        />
      </CardHeader>
      <CardContent className="mt-auto flex flex-col">
        <CardTitle>
          <h2 className="text-xl md:text-2xl font-bold my-4 text-center border-b-2">
            {pack.taxi?.vehicleNumber}
          </h2>
        </CardTitle>
        <CardDescription className="grid grid-cols-2 gap-5 p-2 text-sm font-medium sm:text-base sm:font-semibold mt-auto">
          <p className="text-center">
            Booking Date: <br />{" "}
            <span className="font-bold">
              {(pack.bookingDate as string) ?? ""}
            </span>
          </p>
          <p className="text-center">
            Source: <span>{pack.source}</span>
          </p>
          <p className=" font-semibold text-center">
            Price: <span className="font-bold">₹ {pack.price}</span>
          </p>
          <p className=" font-semibold text-center">
            Destination: {pack.destination}
          </p>
          {pack.taxi && (
            <div className="col-span-2">
              <TaxiInformation Taxi={pack.taxi} />
            </div>
          )}
          <div className="col-span-2 flex items-center justify-center gap-4">
            <span>Status: </span>
            <Badge
              className={`${
                pack.status && pack.status === "approved"
                  ? "bg-green-500"
                  : pack.status === "rejected"
                  ? "bg-red-500"
                  : "bg-yellow-500"
              } text-sm font-semibold text-white shadow-md`}
            >
              {pack.status?.toUpperCase()}
            </Badge>
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default TaxiBookingCard;
