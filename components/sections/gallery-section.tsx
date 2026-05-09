import Image from "next/image"
import { Container } from "@/components/container"
import { GalleryCarousel } from "../gallery-carousel"

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 border-b-2 bg-card/90 py-24 md:py-32"
    >
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

            <div className="relative w-full p-6 @4xl:p-12">
              <video
                preload="metadata"
                // poster={featuredImages[index]}
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline
                className="aspect-video w-full rounded-lg object-cover"
              >
                <source src={"/gallery/vid-1.mp4"} type="video/mp4" />
              </video>
            </div>

            <GalleryCarousel />
            {/* <div data-grid-content className="p-6 @4xl:p-12">
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
                      preload="metadata"
                      // poster={featuredImages[index]}
                      autoPlay={true}
                      muted={true}
                      loop={true}
                      playsInline
                      className="aspect-video w-full rounded-lg object-cover"
                    >
                      <source src={src} type="video/mp4" />
                    </video>
                  </div>
                ))}
              </div>
            </div> */}
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
