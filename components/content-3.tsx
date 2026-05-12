import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { SectionDoodleOverlay } from "./ui/section-doodle-overlay"

export default function ContentSection() {
  return (
    <section className="relative bg-foreground/5 py-16 md:py-32 dark:bg-white">
      <SectionDoodleOverlay
        variant="zigzag"
        placement="bottom-left"
        className="opacity-30"
      />
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase dark:text-background">
          Our Products
        </h2>
        <h1 className="mt-6 max-w-2xl text-3xl font-semibold text-balance text-foreground sm:text-4xl md:text-5xl dark:text-background">
          We have concrete blocks, parking tiles, pavers, and wall solutions to
          fit any project.
        </h1>

        <div className="grid-template mt-12 grid gap-12 md:grid-cols-2">
          <div className="row-span-2 grid grid-rows-subgrid gap-2">
            <AspectRatio
              ratio={4 / 3}
              className="rounded-xl border border-transparent bg-white p-6 shadow ring-1 ring-border dark:bg-background/5 dark:ring-background/15"
            >
              <Image
                src="/gallery/cement-block.jpg"
                alt="Concrete Blocks"
                width={1278}
                height={900}
                className="aspect-square size-full rounded-xl object-cover"
              />
            </AspectRatio>
            <div className="mt-2 space-y-1">
              <h3 className="self-start text-base font-semibold text-balance text-foreground dark:text-background">
                Concrete Blocks
              </h3>
              <p className="text-base text-muted-foreground dark:text-background/80">
                Durable and high-strength blocks for reliable construction
                projects.
              </p>
            </div>
          </div>
          <div className="row-span-2 grid grid-rows-subgrid gap-2">
            <AspectRatio
              ratio={4 / 3}
              className="rounded-xl border border-transparent bg-white p-6 shadow ring-1 ring-border dark:bg-background/5 dark:ring-background/15"
            >
              <Image
                src="/gallery/parking-tiles.jpg"
                alt="Multimodal learning visualization"
                width="1388"
                height="1388"
                className="size-full rounded-xl object-cover"
              />
            </AspectRatio>
            <div className="mt-2 space-y-1">
              <h3 className="text-base font-semibold text-balance text-foreground dark:text-background">
                Parking Tiles
              </h3>
              <p className="text-base text-muted-foreground dark:text-background/80">
                Heavy-duty tiles designed for long-lasting and organized parking
                spaces.
              </p>
            </div>
          </div>
          <div className="row-span-2 grid grid-rows-subgrid gap-2">
            <AspectRatio
              ratio={4 / 3}
              className="rounded-xl border border-transparent bg-white p-6 shadow ring-1 ring-border dark:bg-background/5 dark:ring-background/15"
            >
              <Image
                src="/gallery/pavaar-blocks.jpg"
                alt="Paver Blocks"
                width={1278}
                height={900}
                className="aspect-square size-full rounded-xl object-cover"
              />
            </AspectRatio>
            <div className="mt-2 space-y-1">
              <h3 className="text-base font-semibold text-balance text-foreground dark:text-background">
                Paver Blocks
              </h3>
              <p className="mb-4 text-base text-muted-foreground dark:text-background/80">
                Stylish and durable paving solutions for walkways, driveways,
                and outdoor spaces.
              </p>
            </div>
          </div>
          <div className="row-span-2 grid grid-rows-subgrid gap-2">
            <AspectRatio
              ratio={4 / 3}
              className="rounded-xl border border-transparent bg-white p-6 shadow ring-1 ring-border dark:bg-background/5 dark:ring-background/15"
            >
              <Image
                src="/gallery/wall.png"
                alt="Readymade Walls"
                width={1278}
                height={900}
                className="aspect-square size-full rounded-xl object-cover"
              />
            </AspectRatio>
            <div className="mt-2 space-y-1">
              <h3 className="text-base font-semibold text-balance text-foreground dark:text-background">
                Readymade Walls
              </h3>
              <p className="mb-4 text-base text-muted-foreground dark:text-background/80">
                Fast and efficient precast wall solutions for secure and modern
                structures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
