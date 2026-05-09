import { Percent, ThumbsUp } from "lucide-react"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa6"

export default function PrimaryHero() {
  return (
    <section
      data-theme="quartz"
      className="xv-min-h relative isolate overflow-hidden border-b-2 border-border bg-background"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/gallery/pic-8.jpeg"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      >
        <source src="/gallery/construction-site.mp4" type="video/mp4" />
      </video>

      {/* <div className="absolute inset-0 -z-10 bg-black/10" /> */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/40 via-black/70 to-black/75" />

      <div className="mx-auto flex min-h-[78svh] max-w-6xl items-center px-6 py-24 md:py-32 lg:min-h-[84svh] lg:px-12">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-medium tracking-wide text-white/90 backdrop-blur-sm">
            100% Quality Guaranteed{" "}
            <ThumbsUp className="ml-1 size-4 stroke-3 text-green-500" />
          </p>
          <h1 className="mt-6 text-3xl font-semibold text-balance text-white sm:text-5xl md:text-4xl md:text-6xl">
            Building materials{" "}
            <span className="text-green-500">engineered</span> for strength,
            speed, and reliability
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/85 md:text-lg">
            We produce{" "}
            <span className="leading-loose font-medium text-green-500 underline underline-offset-2">
              premium
            </span>{" "}
            cement and precision concrete blocks with consistent quality
            control, trusted logistics, and scalable supply for projects of
            every size.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90"
            >
              Contact Us
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
