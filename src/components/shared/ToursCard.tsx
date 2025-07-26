"use client"; // This directive is necessary for client-side components in Next.js App Router

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TourType } from "@/types"; // Make sure your TourType is correctly defined here

export function TourCard({ tour }: { tour: TourType }) {
  return (
    <Card className="relative w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] overflow-hidden rounded-lg shadow-lg cursor-pointer group">
      <CardContent>
        {/* Background Image Container */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
          // IMPORTANT: Use tour.image from props, not a hardcoded string
          style={{ backgroundImage: `url("devnagri.png")` }}
        />

        {/* Overlay for Name and Days - Animated with Framer Motion */}
        <motion.div
          // Use 'hidden' and 'visible' variants for more control and clearer state management
          // You can define these variants outside or inline
          variants={{
            hidden: { opacity: 0, y: "0" },
            visible: { opacity: 1, y: "0%" },
          }}
          initial="hidden" // Start with the hidden state
          whileHover="visible" // Animate to the visible state on hover
          // Animation transition properties
          transition={{ duration: 0.4, ease: "easeOut" }} // Slightly longer and smoother transition
          className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-4 text-white group"
        >
          <h4 className="text-lg font-medium mb-1 group-hover:text-red-500">
            {tour.name}
          </h4>
          <p className="text-sm">{tour.days} Days</p>
          <p className="text-sm">{tour.nights} Nights</p>
        </motion.div>
      </CardContent>
    </Card>
  );
}
