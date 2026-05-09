import Image from "next/image"
import { Container } from "@/components/container"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const featuredImages = [
  "/gallery/pic-8.jpeg",
  "/gallery/pic-9.jpeg",
  "/gallery/pic-11.jpeg",
  "/gallery/pic-12.jpeg",
  "/gallery/pic-5.jpeg",
]

const gridImages = [
  "/gallery/pic-1.jpeg",
  "/gallery/pic-2.jpeg",
  "/gallery/pic-3.jpeg",
  "/gallery/pic-4.jpeg",
  "/gallery/pic-5.jpeg",
  "/gallery/pic-6.jpeg",
  "/gallery/pic-7.jpeg",
  "/gallery/pic-8.jpeg",
  "/gallery/pic-9.jpeg",
  "/gallery/pic-10.jpeg",
  "/gallery/pic-11.jpeg",
  "/gallery/pic-12.jpeg",
]

const videos = [
  "/gallery/video-1.mp4",
  "/gallery/video-2.mp4",
  "/gallery/video-3.mp4",
]

export function GallerySection() {
  return (
    <section>
      <Container asGrid>
        <div className="grid grid-cols-10 gap-px">
          {/* <div
                        aria-hidden
                        className="max-sm:hidden">
                        <div data-grid-content />
                    </div> */}

          <div className="col-span-full grid gap-px">
            <div data-grid-content className="p-6 @4xl:p-12">
              <h2 className="text-balance text-muted-foreground">
                Factory Gallery
              </h2>
              <p className="mt-6 max-w-2xl text-4xl font-medium text-balance text-foreground">
                Explore our plant operations, equipment, and finished products
                in photos and videos.
              </p>
            </div>

            <div data-grid-content className="p-6 @4xl:p-12">
              <Carousel className="w-full">
                <CarouselContent>
                  {featuredImages.map((src) => (
                    <CarouselItem key={src}>
                      <div className="relative aspect-video overflow-hidden rounded-xl">
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
            </div>
            <div data-grid-content className="p-6 @4xl:p-12">
              <div className="grid gap-px sm:grid-cols-2 @4xl:grid-cols-4">
                {gridImages.map((src) => (
                  <div key={src} data-grid-content className="p-3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={src}
                        alt="Cement manufacturing gallery image"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid gap-px @4xl:grid-cols-3">
                {videos.map((src, index) => (
                  <div key={src} data-grid-content className="p-3">
                    <video
                      controls
                      preload="metadata"
                      // poster={featuredImages[index]}
                      className="aspect-video w-full rounded-lg object-cover"
                    >
                      <source src={src} type="video/mp4" />
                    </video>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div
                        aria-hidden
                        className="max-sm:hidden">
                        <div data-grid-content />
                    </div> */}
        </div>
      </Container>
    </section>
  )
}
