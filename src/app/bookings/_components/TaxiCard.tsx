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
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Download } from "lucide-react";
import { jsPDF } from "jspdf";

const TaxiBookingCard = ({ pack }: { pack: TaxiBookingsTypes }) => {
  const handleDownloadReceipt = () => {
    const doc = new jsPDF();

    // Set document properties
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let yPosition = 20;

    // Add header
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("TAXI BOOKING RECEIPT", pageWidth / 2, yPosition, {
      align: "center",
    });

    yPosition += 15;
    doc.setLineWidth(0.5);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);

    yPosition += 15;

    // Add booking details
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Booking Details", margin, yPosition);

    yPosition += 10;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    // Vehicle Number
    doc.setFont("helvetica", "bold");
    doc.text("Vehicle Number:", margin, yPosition);
    doc.setFont("helvetica", "normal");
    doc.text(pack.taxi?.vehicleNumber ?? "N/A", margin + 50, yPosition);
    yPosition += 10;

    // Booking Date
    doc.setFont("helvetica", "bold");
    doc.text("Booking Date:", margin, yPosition);
    doc.setFont("helvetica", "normal");
    doc.text((pack.bookingDate as string) ?? "N/A", margin + 50, yPosition);
    yPosition += 10;

    // Source
    doc.setFont("helvetica", "bold");
    doc.text("Source:", margin, yPosition);
    doc.setFont("helvetica", "normal");
    doc.text(pack.source ?? "N/A", margin + 50, yPosition);
    yPosition += 10;

    // Destination
    doc.setFont("helvetica", "bold");
    doc.text("Destination:", margin, yPosition);
    doc.setFont("helvetica", "normal");
    doc.text(pack.destination ?? "N/A", margin + 50, yPosition);
    yPosition += 10;

    // Price
    doc.setFont("helvetica", "bold");
    doc.text("Total Price:", margin, yPosition);
    doc.setFont("helvetica", "normal");
    doc.text(`₹ ${pack.price}`, margin + 50, yPosition);
    yPosition += 15;

    // Taxi Information
    if (pack.taxi) {
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("Vehicle Information", margin, yPosition);
      yPosition += 10;
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");

      // Driver Name
      doc.setFont("helvetica", "bold");
      doc.text("Driver Name:", margin, yPosition);
      doc.setFont("helvetica", "normal");
      doc.text(pack.taxi.driver ?? "N/A", margin + 50, yPosition);
      yPosition += 10;

      // Driver Phone
      doc.setFont("helvetica", "bold");
      doc.text("Driver Contact:", margin, yPosition);
      doc.setFont("helvetica", "normal");
      doc.text(pack.taxi.driverPhoneNumber ?? "N/A", margin + 50, yPosition);
      yPosition += 10;

      // Car Type
      doc.setFont("helvetica", "bold");
      doc.text("Car Type:", margin, yPosition);
      doc.setFont("helvetica", "normal");
      doc.text(pack.taxi.model ?? "N/A", margin + 50, yPosition);
      yPosition += 10;

      // Seats
      doc.setFont("helvetica", "bold");
      doc.text("Available Seats:", margin, yPosition);
      doc.setFont("helvetica", "normal");
      doc.text(`${pack.taxi.seats ?? "N/A"}`, margin + 50, yPosition);
      yPosition += 10;
    }

    yPosition += 5;

    // Status
    doc.setFont("helvetica", "bold");
    doc.text("Booking Status:", margin, yPosition);
    doc.setFont("helvetica", "normal");
    const status = pack.status?.toUpperCase() ?? "PENDING";
    doc.text(status, margin + 50, yPosition);

    yPosition += 15;
    doc.line(margin, yPosition, pageWidth - margin, yPosition);

    // Add footer
    yPosition += 10;
    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text(
      "Thank you for choosing our taxi services!",
      pageWidth / 2,
      yPosition,
      { align: "center" }
    );
    yPosition += 7;
    doc.text(
      `Generated on: ${new Date().toLocaleDateString()}`,
      pageWidth / 2,
      yPosition,
      { align: "center" }
    );

    // Save the PDF
    doc.save(
      `taxi-booking-receipt-${pack.taxi?.vehicleNumber?.replace(
        /\s+/g,
        "-"
      )}.pdf`
    );
  };

  return (
    <Card className="border rounded-3xl shadow-md gradient-border">
      <CardHeader>
        <Image
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
          <div className="col-span-2 flex items-center justify-center mt-4">
            <Button
              onClick={handleDownloadReceipt}
              className="w-full max-w-xs flex items-center gap-2"
              variant="default"
            >
              <Download className="w-4 h-4" />
              Download Receipt
            </Button>
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default TaxiBookingCard;
