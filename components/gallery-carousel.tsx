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
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full p-6"
    >
      <CarouselContent>
        {gridImages.map((src) => (
          <CarouselItem key={src} className="basis-1/2 pl-1 lg:basis-1/3">
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
