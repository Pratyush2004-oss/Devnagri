import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/constants/packages";
import { BookingType } from "@/types";
import Image from "next/image";
import { Download } from "lucide-react";
import { jsPDF } from "jspdf";

function BookedTourCard({ pack }: { pack: BookingType; lineclamp?: boolean }) {
  const handleDownloadReciept = () => {
    const doc = new jsPDF();

    // Set document properties
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let yPosition = 20;

    // Add header
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("BOOKING RECEIPT", pageWidth / 2, yPosition, { align: "center" });

    yPosition += 15;
    doc.setLineWidth(0.5);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);

    yPosition += 15;

    // Add booking details
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Package Details", margin, yPosition);

    yPosition += 10;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    // Package Name
    doc.setFont("helvetica", "bold");
    doc.text("Package Name:", margin, yPosition);
    doc.setFont("helvetica", "normal");
    doc.text(pack.name ?? "N/A", margin + 50, yPosition);
    yPosition += 10;

    // Start Date
    doc.setFont("helvetica", "bold");
    doc.text("Start Date:", margin, yPosition);
    doc.setFont("helvetica", "normal");
    doc.text((pack.startDate as string) ?? "N/A", margin + 50, yPosition);
    yPosition += 10;

    // Duration
    doc.setFont("helvetica", "bold");
    doc.text("Duration:", margin, yPosition);
    doc.setFont("helvetica", "normal");
    doc.text(`${pack.days} days`, margin + 50, yPosition);
    yPosition += 10;

    // Number of People
    doc.setFont("helvetica", "bold");
    doc.text("Number of People:", margin, yPosition);
    doc.setFont("helvetica", "normal");
    doc.text(`${pack.people}`, margin + 50, yPosition);
    yPosition += 10;

    // Price
    doc.setFont("helvetica", "bold");
    doc.text("Total Price:", margin, yPosition);
    doc.setFont("helvetica", "normal");
    doc.text(`₹ ${pack.price}`, margin + 50, yPosition);
    yPosition += 10;

    // Places (if available)
    if ((pack.placeList ?? []).length > 0) {
      doc.setFont("helvetica", "bold");
      doc.text("Places to Visit:", margin, yPosition);
      yPosition += 8;
      doc.setFont("helvetica", "normal");
      const places = pack.placeList ?? "";
      const splitPlaces = doc.splitTextToSize(places, pageWidth - 2 * margin);
      doc.text(splitPlaces, margin + 5, yPosition);
      yPosition += splitPlaces.length * 7;
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
      "Thank you for choosing our travel services!",
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
    doc.save(`booking-receipt-${pack.name?.replace(/\s+/g, "-")}.pdf`);
  };
  return (
    <Card className="border rounded-3xl shadow-md gradient-border">
      <CardHeader>
        <Image
          src={IMAGES[Math.floor(Math.random() * IMAGES.length)]}
          alt={pack.name ?? ""}
          width={500}
          height={500}
          className="w-full h-56 md:h-72 object-cover rounded-br-xl rounded-tr-2xl shadow-lg rounded-bl-xl"
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
          <p className="text-center">
            Days: <span>{pack.days}</span>
          </p>
          <p className=" font-semibold text-center">
            Price: <span className="font-bold">₹ {pack.price}</span>
          </p>
          <p className=" font-semibold text-center">People: {pack.people}</p>
          {(pack.placeList ?? []).length > 0 && (
            <p className="font-semibold col-span-2 text-center">
              Places: <span className="font-bold">{pack.placeList ?? ""}</span>
            </p>
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
              onClick={handleDownloadReciept}
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
}

export default BookedTourCard;
