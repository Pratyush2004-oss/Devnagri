import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BookingType, TaxiBookingsTypes } from "@/types";
import { CheckCircle, ChevronDown, XCircle } from "lucide-react";
import useAdminHook from "../_hook/admin.hooks";
import { useState } from "react";

function StatusPopOver({
  booking,
  db,
}: {
  booking: BookingType | TaxiBookingsTypes;
  db: "bookings" | "taxi_bookings";
}) {
  const [status, setStatus] = useState(booking.status);
  const { verifyBooking } = useAdminHook();

  const handleStatusChange = (newStatus: "approved" | "rejected") => {
    verifyBooking(booking.id || 0, newStatus, db);
    setStatus(newStatus);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Badge
          className={`cursor-pointer ${
            status?.toLowerCase() === "pending"
              ? "bg-yellow-500 animate-bounce"
              : status?.toLowerCase() === "approved"
              ? "bg-green-500"
              : "bg-red-500"
          }`}
        >
          {status?.toUpperCase()}
          <ChevronDown />
        </Badge>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        <DropdownMenuItem
          className="flex cursor-pointer items-center gap-2 bg-green-500 text-white font-medium"
          onClick={() => handleStatusChange("approved")}
        >
          <CheckCircle className="text-white" />
          Approve
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex items-center gap-2 bg-red-500 text-white font-medium cursor-pointer"
          onClick={() => handleStatusChange("rejected")}
        >
          <XCircle className="text-white" />
          Reject
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default StatusPopOver;
