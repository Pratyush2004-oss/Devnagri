import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import useBookingHook from "@/hooks/booking.hooks";
import { TaxiBookingInput, TaxiTypes } from "@/types";
const TaxiBookingModal = ({
  children,
  destination,
  source,
  price,
}: {
  children: React.ReactNode;
  source: string;
  destination: string;
  price: number;
}) => {
  const [input, setinput] = useState<TaxiBookingInput>({
    date: new Date(),
    source: source,
    destination: destination,
    price: price,
    taxi: "",
  });
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [showList, setShowList] = useState(false);
  const { getAllTaxis, bookTaxi } = useBookingHook();

  const [TaxiList, setTaxiList] = useState<TaxiTypes[]>([]);
  //   search taxi
  const handleSearchTaxi = async () => {
    setShowList(true);
    const response = await getAllTaxis(input.date.toDateString());
    if (!("error" in response)) {
      setTaxiList(response);
    }
  };
  //   handle booking
  const handleBooking = async (taxi: string) => {
    await bookTaxi({ ...input, taxi: taxi });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="gradient-border">
        <DialogHeader>
          <DialogTitle className="text-gradient">
            {source} - {destination}
          </DialogTitle>
          <DialogDescription>
            Fill basic details to book a taxi
          </DialogDescription>
          <div className="flex flex-col gap-2">
            <Label>Date</Label>
            <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "justify-start font-medium p-4 md:p-5 gradient-div",
                    !input.date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {input.date ? (
                    <span>{new Date(input.date).toLocaleDateString()}</span>
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={input.date ? new Date(input.date) : undefined}
                  onSelect={(date) => {
                    if (date) {
                      setinput({
                        ...input,
                        date: date, // The 'date' from onSelect is already a Date object
                      });
                      // 2. Explicitly close the popover after a date is selected
                      setIsCalendarOpen(false);
                    }
                  }}
                  disabled={(date) =>
                    date < new Date(new Date().setHours(0, 0, 0, 0))
                  } // Disable past dates correctly
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <DialogFooter>
              <Button
                className="mt-4 primary-button"
                onClick={handleSearchTaxi}
              >
                Search
              </Button>
            </DialogFooter>
          </div>
          {showList ? (
            TaxiList.length > 0 ? (
              <div className="flex flex-col gap-2 max-h-[50%] my-5">
                <div className="flex items-center justify-center relative">
                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    className="absolute right-0 top-0"
                    onClick={() => {
                      setShowList(false);
                      setTaxiList([]);
                    }}
                  >
                    <X />
                  </Button>
                  <h2 className="text-xl font-bold">Taxi List</h2>
                </div>
                <div className="flex flex-col gap-4  overflow-auto details-container">
                  {TaxiList.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border-2 border-gray-300 rounded-lg shadow-xl"
                    >
                      <div className="flex items-center flex-col sm:flex-row justify-between">
                        <div className="flex flex-col gap-1">
                          <span className="flex items-center gap-1 text-sm font-medium">
                            {item.vehicleNumber}
                          </span>
                          <span className="flex items-center gap-1 text-sm font-medium">
                            {item.driverPhoneNumber}
                          </span>
                          <span className="flex items-center gap-1 text-sm font-medium">
                            {item.seats}
                          </span>
                          <span className="flex items-center gap-1 text-sm font-medium">
                            {item.model}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-center max-sm:mt-4">
                        <div className="flex flex-col mx-auto">
                          <h4 className="font-bold text-xl text-gradient">
                            ₹{price}
                          </h4>
                        </div>
                        <Button
                          size="sm"
                          className="primary-button sm:w-fit"
                          onClick={() => handleBooking(item.id as string)}
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2 max-h-[50%] my-5">
                <div className="flex items-center justify-center relative">
                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    className="absolute right-0 top-0"
                    onClick={() => {
                      setShowList(false);
                    }}
                  >
                    <X />
                  </Button>
                  <h2 className="text-xl font-bold">No Taxi Available</h2>
                </div>
              </div>
            )
          ) : null}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TaxiBookingModal;
