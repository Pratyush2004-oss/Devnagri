import { TOURS } from "@/constants/packages";
import React from "react";
import { TourCard } from "./ToursCard";

const Tours = () => {
  return (
    <div className="gradient-border">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold">Tours</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {TOURS.map((tour, index) => (
          <TourCard key={index} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default Tours;
