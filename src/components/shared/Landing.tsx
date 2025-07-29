"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import SearchTaxi from "./SearchTaxi";

export function Landing() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-full h-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="w-full">
            <div className="w-full relative">
              {/* image data or landing data */}
              <div className="absolute inset-6 left-0 top-0 grid md:grid-cols-3 px-20 h-full w-full items-center justify-center z-10 gap-10 flex-wrap gradient-border">
                <div></div>
                <div className="col-span-2">
                  <SearchTaxi />
                </div>
              </div>
              <Card className="w-full p-0">
                <CardContent className="flex aspect-video h-full items-center justify-center mx-auto w-full">
                  <Image
                    src={"/devnagri.png"}
                    height={1000}
                    width={1000}
                    priority
                    alt="devnagri"
                    className="w-full object-contain object-center"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
