import { CheckCircle2, Factory, Leaf } from "lucide-react"
import { MdOutlineHealthAndSafety } from "react-icons/md"
import Image from "next/image"
import { Container } from "@/components/container"
import { cn } from "@/lib/utils"
import { SectionDoodleOverlay } from "@/components/ui/section-doodle-overlay"

const values = [
  {
    icon: CheckCircle2,
    title: "Quality First",
    variableColor: "var(--color-green-600)",
    iconClassName: "group-hover:text-green-600 transition-colors duration-300",
    description:
      "Every batch is tested for strength, consistency, and durability before leaving our plant.",
  },
  {
    icon: MdOutlineHealthAndSafety,
    title: "Worker Safety",
    variableColor: "var(--color-yellow-600)",
    iconClassName: "group-hover:text-yellow-600 transition-colors duration-300",
    description:
      "We enforce strict safety standards across production lines, loading zones, and delivery operations.",
  },
  {
    icon: Leaf,
    title: "Sustainable Production",
    variableColor: "var(--color-blue-600)",
    iconClassName: "group-hover:text-blue-600 transition-colors duration-300",
    description:
      "Our process reduces waste and optimizes resource use to lower environmental impact over time.",
  },
  {
    icon: Factory,
    title: "Industrial Scale",
    variableColor: "var(--color-red-600)",
    iconClassName: "group-hover:text-red-600 transition-colors duration-300",
    description:
      "From neighborhood projects to major infrastructure, we deliver dependable volume without sacrificing quality.",
  },
]

export function CoreValuesSection() {
  return (
    <section
      id="core-values"
      className="relative overflow-hidden border-b border-foreground/10 bg-card/90 py-24 md:py-32"
    >
      <SectionDoodleOverlay
        variant="waves"
        placement="bottom-right"
        className="opacity-25"
      />
      <Container asGrid className="relative z-10">
        <div className="grid grid-cols-10 gap-px px-6">
          <div aria-hidden className="max-sm:hidden">
            <div data-grid-content />
          </div>

          <div className="col-span-full grid gap-px sm:col-span-8 @4xl:grid-cols-2">
            <div data-grid-content className="col-span-full p-6 @4xl:p-12">
              <h2 className="text-balance text-muted-foreground">
                Core Values
              </h2>
              <p className="mt-6 max-w-2xl text-3xl leading-[1.2] font-medium font-semibold text-balance text-foreground sm:text-4xl md:text-5xl">
                The{" "}
                <span className="font-semibold text-green-600">principles</span>{" "}
                that guide every production run, quality check, and delivery
                from our factory.
              </p>
            </div>

            <div className="col-span-full grid grid-cols-1 gap-2 p-6 max-sm:gap-6 @4xl:grid-cols-2 @4xl:pl-12">
              <div className="flex flex-col gap-2 overflow-hidden @4xl:col-span-1">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="group point flex flex-col gap-2.5 rounded-xl border border-foreground/10 bg-card px-3 py-6 transition-colors duration-300 select-none hover:border-(--color-value)/50"
                    style={
                      {
                        "--color-value": value.variableColor,
                      } as React.CSSProperties
                    }
                  >
                    <span className="flex w-fit flex-col gap-1">
                      <value.icon
                        className={cn("size-6", value.iconClassName)}
                      />
                      <h3
                        className={cn(
                          "text-sm font-medium text-foreground/80",
                          value.iconClassName
                        )}
                      >
                        {value.title}
                      </h3>
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="group relative aspect-4/5 min-h-80 overflow-hidden rounded-4xl shadow-lg ring-1 ring-foreground/10 max-sm:order-first sm:aspect-auto">
                <Image
                  src="/gallery/worker.webp"
                  alt="Core Values"
                  fill
                  sizes="(max-width: 896px) 100vw, 50vw"
                  className="rounded-4xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
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
