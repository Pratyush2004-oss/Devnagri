"use client"; // This directive is necessary for client-side components in Next.js App Router

import { Card, CardContent } from "@/components/ui/card";
import { TourType } from "@/types"; // Make sure your TourType is correctly defined here
import { motion } from "framer-motion";
import { Clock, IndianRupee } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export function TourCard({ tour, shrink }: { tour: TourType; shrink?: boolean }) {
  const router = useRouter();
  return (
    <Card className={`${shrink ? "aspect-[1/1]" : "aspect-[4/5]  max-sm:aspect-[4/3]" } relative max-sm:w-[90%] w-full mx-autooverflow-hidden rounded-lg shadow-lg group`}>
      <CardContent>
        {/* Background Image Container */}
        <Image
          src={"/devnagri.png"}
          alt={tour.name}
          fill
          className="object-cover group-hover:scale-105 group"
        />

        {/* Overlay for Name and Days - Animated with Framer Motion */}
        <motion.div
          // Use 'hidden' and 'visible' variants for more control and clearer state management
          // You can define these variants outside or inline
          variants={{
            hidden: { opacity: 0, top: "100%" },
            visible: { opacity: 1, top: 0 },
          }}
          initial="hidden" // Start with the hidden state
          whileHover="visible" // Animate to the visible state on hover
          // Animation transition properties
          transition={{ duration: 0.5, ease: "easeOut" }} // Slightly longer and smoother transition
          className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-4 text-white"
        >
          <h4 className="text-lg font-medium mb-1 group-hover:text-red-500">
            {tour.name}
          </h4>
          <div className="flex flex-col gap-1">
            <div className="flex items-end gap-1">
              <Clock className="size-3.5 text-red-500" />
              <span className="text-xs text-gray-100 font-medium">
                {tour.days} days - {tour.days - 1} nights
              </span>
            </div>
            <div className="flex items-center gap-1">
              <IndianRupee className="size-3.5 text-red-500" />
              <span className="text-xs text-gray-100 font-medium">
                {tour.Price} per person per day
              </span>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <Button
                variant={"outline"}
                size={"sm"}
                className="bg-gradient-to-r from-red-300 to-red-600 hover:from-red-600 hover:to-red-300 hover:text-white"
              >
                Enquire Now
              </Button>
              <Button
                variant={"outline"}
                size={"sm"}
                className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-teal-500 hover:to-green-500 hover:text-white"
                onClick={() => {
                  router.push(`/package/${tour.__id}`);
                }}
              >
                View Details
              </Button>
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}
