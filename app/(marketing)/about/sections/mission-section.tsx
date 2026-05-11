import { Container } from "@/components/container"
import { SectionDoodleOverlay } from "@/components/ui/section-doodle-overlay"

export function MissionSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden border-b-2 bg-card/90 py-24 md:py-32"
    >
      <SectionDoodleOverlay
        variant="rings"
        placement="top-right"
        className="opacity-30"
      />
      <Container asGrid className="relative z-10">
        <div className="grid grid-cols-10 gap-px">
          <div aria-hidden className="max-sm:hidden">
            <div data-grid-content />
          </div>

          <div className="col-span-full sm:col-span-8">
            <div data-grid-content className="p-6 @4xl:p-12">
              <h2 className="text-balance text-muted-foreground">
                Our Mission
              </h2>
              <div className="mt-6 space-y-4 text-xl font-medium text-muted-foreground *:leading-relaxed *:text-balance">
                <p className="text-lg text-balance text-foreground/85 sm:text-xl">
                  <span className="text-xl text-balance text-green-600 sm:text-2xl">
                    We believe strong communities are built on strong materials
                  </span>{" "}
                  — from homes and schools to roads and industrial sites that
                  demand dependable cement solutions.
                </p>
                <p className="text-lg text-balance text-foreground/85 sm:text-xl">
                  <span className="text-xl text-balance text-green-600 sm:text-2xl">
                    Our mission is to produce high-grade cement and concrete
                    blocks with uncompromising quality.
                  </span>{" "}
                  We combine modern manufacturing, strict testing, and reliable
                  logistics so contractors can build with confidence.
                </p>
              </div>
            </div>
          </div>

          <div aria-hidden className="max-sm:hidden">
            <div data-grid-content />
          </div>
        </div>
      </Container>
    </section>
  )
}
