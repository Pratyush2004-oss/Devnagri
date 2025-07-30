import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cities } from "@/constants/Cities";
const SearchTaxi = () => {
  const [input, setinput] = useState({
    from: "",
    to: "",
    date: new Date(),
  });
  return (
    <div className="gradient-div">
      <h5 className="text-center my-4">Search for a Taxi</h5>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="flex flex-col gap-2">
          <Label>From</Label>
          <Select
            onValueChange={(value) => setinput({ ...input, from: value })}
          >
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Select Pickup Location" />
            </SelectTrigger>
            <SelectContent className="gradient-border">
              {cities.map((city, index) => (
                <SelectItem key={index} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>{" "}
        </div>
        <div className="flex flex-col gap-2">
          <Label>To</Label>
          <Select>
            <SelectTrigger className="w-full bg-white">
              <SelectValue
                placeholder="Select Dropoff Location"
                className="placeholder:text-white text-white"
              />
            </SelectTrigger>
            <SelectContent className="gradient-border">
              {cities
                .filter((city) => city !== input.from)
                .map((city, index) => (
                  <SelectItem key={index} value={city}>
                    {city}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>{" "}
        </div>
        <div className="flex flex-col gap-2">
          <Label>Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "justify-start font-medium p-4 md:p-5 gradient-border",
                  !input.date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="h-3 w-3" />
                {input.date ? (
                  <span className="text-xs md:text-sm lg:text-base">
                    {new Date(input.date).toDateString()}
                  </span>
                ) : (
                  <span className="text-muted-foreground text-sm md:text-base">
                    Pick a date
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={input.date}
                initialFocus
                disabled={(date) => date < new Date()}
                onSelect={(date) => {
                  date && setinput({ ...input, date: new Date(date) });
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Time</Label>
          <Input type="time" />
        </div>
      </div>
    </div>
  );
};

export default SearchTaxi;
