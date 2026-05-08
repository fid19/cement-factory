import { ImageIllustration } from "@/components/ui/illustrations/image-illustration"

export default function HeroSection() {
  return (
    <section
      data-theme="quartz"
      className="border-b-2 border-border bg-background py-24 md:pt-32 lg:pt-44"
    >
      <div className="relative mx-auto mb-12 max-w-5xl px-6">
        <h1 className="z-10 border-border bg-white/10 text-4xl font-semibold text-balance backdrop-blur-sm max-lg:mb-6 sm:text-5xl lg:absolute lg:max-w-10/12 lg:-translate-x-1 lg:-translate-y-1/2 lg:border-2 lg:py-4 lg:text-6xl">
          Engineering the foundation for every great build
        </h1>
        <ImageIllustration />
        <div className="relative mt-6 grid items-end gap-6 md:grid-cols-2">
          <p className="text-lg text-balance text-muted-foreground">
            From premium cement to precision concrete blocks, our factory
            delivers consistent quality, reliable supply, and on-time delivery
            for projects of every scale.
          </p>
        </div>
      </div>
    </section>
  )
}
