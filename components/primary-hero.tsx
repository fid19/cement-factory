import { Check, ChevronDown, ThumbsUp } from "lucide-react"
import { SectionDoodleOverlay } from "@/components/ui/section-doodle-overlay"
import { FaWhatsapp } from "react-icons/fa"

export default function PrimaryHero() {
  return (
    <section
      data-theme="quartz"
      className="xv-min-h relative isolate flex items-center overflow-hidden border-b-2 border-border bg-background max-sm:flex"
    >
      <div className="absolute inset-x-0 bottom-0 mx-auto">
        <div className="mx-auto w-fit">
          <div className="flex flex-col items-center justify-center">
            <span className="text-sm font-medium text-white uppercase opacity-50">
              Scroll Down
            </span>
            <ChevronDown className="size-10 animate-bounce text-white/70" />
          </div>
        </div>
      </div>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/gallery/block-background.png"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      >
        <source src="/gallery/block-background.mp4" type="video/mp4" />
      </video>

      {/* <div className="absolute inset-0 -z-10 bg-black/10" /> */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/15 via-black/30 to-black/35 dark:from-black/30 dark:via-black/70 dark:to-black/75" />
      <SectionDoodleOverlay
        variant="waves"
        placement="bottom-right"
        className="z-0 opacity-25 mix-blend-screen"
      />

      <div className="relative z-10 m-auto flex min-h-[78svh] max-w-6xl items-center px-6 py-24 md:py-32 lg:min-h-[84svh] lg:px-12">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-green-500 bg-white/10 px-4 py-1 text-xs tracking-wide text-white/90 backdrop-blur-sm">
            100% Quality Guaranteed{" "}
            <Check className="ml-1 size-4 stroke-3 text-green-600" />
          </p>
          <h1 className="mt-6 text-4xl leading-[1.2] font-semibold text-balance text-white sm:text-5xl md:text-6xl">
            Building the foundation of every great structure
          </h1>
          <h3 className="mt-6 max-w-lg text-lg leading-snug font-normal text-white/85 md:text-xl lg:max-w-2xl">
            We produce{" "}
            <span className="font-medium text-green-500 underline underline-offset-2">
              premium
            </span>{" "}
            concrete blocks, parking tiles, paver blocks, and readymade walls
            with trusted quality and reliable supply.
          </h3>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600/80"
            >
              Contact Us <FaWhatsapp className="size-4 text-white" />
            </a>
            <a
              href="#gallery"
              className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Explore Factory Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
