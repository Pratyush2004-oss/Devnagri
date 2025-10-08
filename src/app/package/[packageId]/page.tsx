"use client";

import { Star } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DOMPurify from "dompurify";
// carousel removed - using animated grid instead
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { motion, AnimatePresence } from "framer-motion";
import { TOURS } from "@/constants/packages";
import { TourPackage } from "@/types";
import BookingCard from "@/components/shared/BookingCard";
import { TourCard } from "@/components/shared/ToursCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function PackageDetail() {
  const { packageId } = useParams();
  const [Package, setPackage] = useState<TourPackage | null>(null);
  // Control open state for collapsible sections
  const [openOverview, setOpenOverview] = useState(true);
  const [openHighlights, setOpenHighlights] = useState(true);
  const [openItinerary, setOpenItinerary] = useState(true);
  const [openInclusion, setOpenInclusion] = useState(false);
  const [openExclusion, setOpenExclusion] = useState(false);
  const [openFaqs, setOpenFaqs] = useState(false);

  useEffect(() => {
    // use find for clarity
    const found = TOURS.find((p) => p.__id === packageId) ?? null;
    setPackage(found as unknown as TourPackage);
  }, [packageId]);

  return (
    Package && (
      <div className="p-6 md:p-10">
        <div className="flex flex-col gap-6 ">
          <div className="w-full relative max-h-[650px] overflow-hidden">
            <Image
              src={Package.images?.[0] ?? ""}
              alt={Package.name}
              layout="responsive"
              width={1500}
              height={1200}
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <h1 className="text-xl md:text-2xl font-bold absolute top-3/5 md:top-4/5 ml-3 text-white  p-2 rounded-lg">
              {Package.name}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full flex flex-col justify-center px-2 md:w-3/5">
              {/* Overview (short) */}
              {Package.overview && (
                <Collapsible open={openOverview} onOpenChange={setOpenOverview}>
                  <div className="mt-5">
                    <CollapsibleTrigger asChild>
                      <button className="w-full text-left flex items-center justify-between">
                        <h1 className="text-xl font-bold">Overview</h1>
                        <span className="text-sm text-muted-foreground">
                          {openOverview ? "Hide" : "Show"}
                        </span>
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <AnimatePresence>
                        {openOverview && (
                          <motion.div
                            key="overview"
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.25 }}
                            className="flex flex-col gap-3 mt-4"
                          >
                            <p className="text-justify camelCase font-medium text-sm text-gray-500">
                              {Package.overview}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              )}

              {/* Places covered */}
              {Package.places && Package.places.length > 0 && (
                <Collapsible
                  open={openHighlights}
                  onOpenChange={setOpenHighlights}
                >
                  <div className="mt-5">
                    <CollapsibleTrigger asChild>
                      <button className="w-full text-left flex items-center justify-between">
                        <h1 className="text-xl font-bold">Places Covered</h1>
                        <span className="text-sm text-muted-foreground">
                          {openHighlights ? "Hide" : "Show"}
                        </span>
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <AnimatePresence>
                        {openHighlights && (
                          <motion.div
                            key="places"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex flex-col gap-3 mt-4"
                          >
                            {Package.places.map((item, idx) => (
                              <div
                                className="flex items-center gap-2"
                                key={idx}
                              >
                                <Star className="ml-2 size-4 text-purple-700 fill-purple-600" />
                                <p className="text-justify list-decimal list-inside text-sm font-medium text-gray-500">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              )}

              {/* Itinerary Section */}
              {Package.itinerary && Package.itinerary.length > 0 && (
                <Collapsible
                  open={openItinerary}
                  onOpenChange={setOpenItinerary}
                >
                  <div className="mt-5">
                    <CollapsibleTrigger asChild>
                      <button className="w-full text-left flex items-center justify-between">
                        <h1 className="text-xl font-bold">Itinerary</h1>
                        <span className="text-sm text-muted-foreground">
                          {openItinerary ? "Hide" : "Show"}
                        </span>
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <AnimatePresence>
                        {openItinerary && (
                          <motion.div
                            key="itinerary"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex flex-col gap-3 mt-4"
                          >
                            {Package.itinerary.map((item, idx) => (
                              <div
                                key={idx}
                                className="mb-3 border rounded-md p-3"
                              >
                                <div className="flex items-center gap-2">
                                  <Star className="ml-2 size-4 text-purple-700 fill-purple-600" />
                                  <h2 className="text-lg font-bold">{`Day ${item.day}: ${item.title}`}</h2>
                                </div>
                                <ul className="list-disc ml-6 mt-2 text-sm text-gray-600">
                                  {item.details.map((d, i) => (
                                    <li key={i} className="mb-1">
                                      {d}
                                    </li>
                                  ))}
                                </ul>
                                {item.inclusions && (
                                  <p className="mt-2 text-sm text-gray-500">
                                    <strong>Includes:</strong> {item.inclusions}
                                  </p>
                                )}
                                {item.night_stay && (
                                  <p className="mt-1 text-sm text-gray-500">
                                    <strong>Night Stay:</strong>{" "}
                                    {item.night_stay}
                                  </p>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              )}

              {/* Inclusions Section */}
              {Package.inclusions && Package.inclusions.length > 0 && (
                <Collapsible
                  open={openInclusion}
                  onOpenChange={setOpenInclusion}
                >
                  <div className="mt-5">
                    <CollapsibleTrigger asChild>
                      <button className="w-full text-left flex items-center justify-between">
                        <h1 className="text-xl font-bold">Inclusions</h1>
                        <span className="text-sm text-muted-foreground">
                          {openInclusion ? "Hide" : "Show"}
                        </span>
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <AnimatePresence>
                        {openInclusion && (
                          <motion.div
                            key="inclusions"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col gap-3 mt-4 px-2"
                          >
                            {Package.inclusions.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2"
                              >
                                <Star className="size-4 fill-purple-600 text-purple-700" />
                                <p className="max-md:text-justify camelCase w-4/5 font-medium text-sm text-gray-500">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              )}

              {/* Packing list (if present) */}
              {Package.packing_list && Package.packing_list.length > 0 && (
                <Collapsible
                  open={openExclusion}
                  onOpenChange={setOpenExclusion}
                >
                  <div className="mt-5">
                    <CollapsibleTrigger asChild>
                      <button className="w-full text-left flex items-center justify-between">
                        <h1 className="text-xl font-bold">Packing List</h1>
                        <span className="text-sm text-muted-foreground">
                          {openExclusion ? "Hide" : "Show"}
                        </span>
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <AnimatePresence>
                        {openExclusion && (
                          <motion.div
                            key="packing"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col gap-3 mt-4 px-2"
                          >
                            {Package.packing_list.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2"
                              >
                                <Star className="size-4 fill-purple-600 text-purple-700" />
                                <p className="text-justify camelCase w-4/5 font-medium text-sm text-gray-500">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              )}

              {/* Terms and cancellation */}
              {(Package.terms_and_conditions ||
                Package.cancellation_policy) && (
                <Collapsible open={openFaqs} onOpenChange={setOpenFaqs}>
                  <div className="mt-5">
                    <CollapsibleTrigger asChild>
                      <button className="w-full text-left flex items-center justify-between">
                        <h1 className="text-xl font-bold">
                          Terms & Cancellation
                        </h1>
                        <span className="text-sm text-muted-foreground">
                          {openFaqs ? "Hide" : "Show"}
                        </span>
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <AnimatePresence>
                        {openFaqs && (
                          <motion.div
                            key="terms"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col gap-3 mt-4"
                          >
                            {Package.terms_and_conditions &&
                              Object.entries(Package.terms_and_conditions).map(
                                ([k, v]) =>
                                  v && (
                                    <div key={k} className="px-2">
                                      <h4 className="font-semibold text-sm capitalize">
                                        {k.replace(/_/g, " ")}
                                      </h4>
                                      <p className="text-sm text-gray-600">
                                        {v}
                                      </p>
                                    </div>
                                  )
                              )}
                            {Package.cancellation_policy && (
                              <div className="px-2">
                                <h4 className="font-semibold text-sm">
                                  Cancellation Policy
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {Package.cancellation_policy}
                                </p>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              )}

              {/* Booking Section */}
            </div>
            <div className="md:w-2/5 md:mt-10">
              {/* compute numeric values for booking */}
              {(() => {
                const days =
                  typeof Package.days === "number"
                    ? Package.days
                    : parseInt(String(Package.days).replace(/[^0-9]/g, "")) ||
                      0;
                const price =
                  typeof Package.price === "object"
                    ? Number(
                        String(
                          (Package.price as any).standard_plan || 0
                        ).replace(/[^0-9]/g, "")
                      ) || 0
                    : Number(String(Package.price).replace(/[^0-9]/g, "")) || 0;
                return (
                  <BookingCard
                    props={{
                      PackageName: Package.name,
                      PackageDays: days,
                      PackagePrice: price,
                    }}
                  />
                );
              })()}
            </div>
          </div>

          {/* Related packages - animated grid */}
          <div className="w-full">
            <h3 className="text-xl font-bold my-4">Related Packages</h3>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 1500,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="p-7">
                {TOURS.map((t, index) => (
                  <CarouselItem
                    key={t.__id ?? index}
                    className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <div className="hover:scale-[1.01] transition-transform duration-200">
                      <TourCard
                        tour={t as unknown as TourPackage}
                        shrink={true}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    )
  );
}

export default PackageDetail;
