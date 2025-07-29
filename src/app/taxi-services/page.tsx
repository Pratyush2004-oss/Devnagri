"use client";
import { Landing } from "@/components/shared/Landing";
import React, { useState } from "react";
import SearchTaxi from "@/components/shared/SearchTaxi";


const TaxiServices = () => {
  
  return (
    <div>
      <Landing />
      <div className="flex justify-center">
        <h1 className="">Book a Taxi</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-8 gradient-border">
        {/* Left section Search Taxi Input */}
        <SearchTaxi />

        {/* Right Section - Image Section*/}
      </div>
    </div>
  );
};

export default TaxiServices;
