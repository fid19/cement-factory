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
            <div data-grid-content className="p-6">
              <h2 className="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                Factory Gallery
              </h2>
              <p className="mt-6 max-w-3xl text-3xl font-semibold text-balance text-foreground sm:text-4xl md:text-5xl">
                Explore our plant operations, equipment, and finished products
                in photos and videos.
              </p>
              {/* <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Quality Controlled",
                  "Live Plant Operations",
                  "Fleet Ready",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div> */}
            </div>

            <div data-grid-content className="relative overflow-hidden p-6">
              <video
                preload="metadata"
                autoPlay
                muted
                loop
                playsInline
                poster="/gallery/pic-8.jpeg"
                className="aspect-video w-full rounded-xl object-cover ring-1 ring-white/10"
              >
                <source src="/gallery/vid-1.mp4" type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-3 rounded-xl bg-linear-to-t from-black/65 via-black/10 to-transparent sm:inset-4 @4xl:inset-6" />
              <div className="pointer-events-none absolute right-6 bottom-6 left-6 text-white sm:right-8 sm:bottom-8 sm:left-8 @4xl:right-10 @4xl:bottom-10 @4xl:left-10">
                <p className="text-xs font-semibold tracking-[0.16em] text-white/80 uppercase">
                  Featured Media
                </p>
                <p className="mt-2 text-lg font-semibold text-balance sm:text-2xl">
                  Construction site operations in real time
                </p>
              </div>
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
