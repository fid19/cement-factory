"use client"

import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { gridImages } from "@/lib/helper"

export function GalleryCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full p-6"
    >
      <CarouselContent className="-ml-4">
        {gridImages.map((src) => (
          <CarouselItem key={src} className="basis-full pl-4 lg:basis-1/2">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <Image
                src={src}
                alt="Featured cement factory scene"
                fill
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-2 flex justify-end gap-2">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  )
}
