import { ImageIllustration } from "@/components/ui/illustrations/image-illustration"

export default function HeroSection() {
  return (
    <section
      data-theme="quartz"
      className="border-b-2 border-border bg-card/90 py-24 md:py-32"
    >
      <div className="relative mx-auto mb-12 max-w-6xl px-6 lg:px-12">
        <h1 className="mb-6 text-4xl font-semibold text-balance max-lg:mb-6 sm:text-5xl lg:max-w-10/12 lg:py-4 lg:text-6xl">
          <span className="text-green-500">Engineering</span> the foundation for
          every great build
        </h1>
        <ImageIllustration />
        <div className="relative mt-6 grid items-end gap-6 md:grid-cols-2">
          <p className="text-lg text-balance text-foreground/85">
            From premium cement to precision concrete blocks, our factory
            delivers consistent quality, reliable supply, and on-time delivery
            for projects of every scale.
          </p>
        </div>
      </div>
    </section>
  )
}
