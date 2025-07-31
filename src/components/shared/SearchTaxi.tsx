import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { routesByCity } from "@/constants/taxi-tours";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
const SearchTaxi = ({
  setTaxiList,
}: {
  setTaxiList?: React.Dispatch<React.SetStateAction<typeof routesByCity>>;
}) => {
  const [input, setinput] = useState({
    from: "",
    to: "",
    date: new Date(),
  });

  // Search Taxi
  const searchTaxi = () => {
    if (!input.from || !input.to || !input.date) return;
    const filteredCity = routesByCity.filter((city) => {
      return city.cityName === input.from;
    });
    const filteredRoutes = filteredCity[0].routes.filter((route) => {
      return route.to === input.to;
    });
    const filteredData = [
      {
        cityName: filteredCity[0].cityName,
        routes: filteredRoutes,
      },
    ];
    setTaxiList?.(filteredData);
  };
  return (
    <div className="gradient-div">
      <h5 className="text-center my-4">Search for a Taxi</h5>
      <div className="grid sm:grid-cols-2 gap-4 ">
        <div className="flex flex-col gap-2">
          <Label>From</Label>
          <Select
            onValueChange={(value) => setinput({ ...input, from: value })}
          >
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Select Pickup Location" />
            </SelectTrigger>
            <SelectContent className="gradient-border">
              {routesByCity.map((city, index) => (
                <SelectItem key={index} value={city.cityName}>
                  {city.cityName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>{" "}
        </div>
        <div className="flex flex-col gap-2">
          <Label>To</Label>
          <Select
            defaultValue=""
            onValueChange={(value) => setinput({ ...input, to: value })}
          >
            <SelectTrigger className="w-full bg-white">
              <SelectValue
                placeholder="Select Dropoff Location"
                className="placeholder:text-white text-white"
              />
            </SelectTrigger>
            <SelectContent className="gradient-border">
              {input.from &&
                routesByCity
                  .filter((city) => city.cityName === input.from)[0]
                  .routes.map((route, index) => (
                    <SelectItem key={index} value={route.to}>
                      {route.to}
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
          <Button
            className="w-full primary-button mt-auto"
            onClick={searchTaxi}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchTaxi;
