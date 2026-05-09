import { Factory, HardHat, Leaf, ShieldCheck } from "lucide-react"
import { Container } from "@/components/container"
import { cn } from "@/lib/utils"

const values = [
  {
    icon: HardHat,
    title: "Quality First",
    iconClassName: "text-green-700",
    description:
      "Every batch is tested for strength, consistency, and durability before leaving our plant.",
  },
  {
    icon: ShieldCheck,
    title: "Worker Safety",
    iconClassName: "text-yellow-700",
    description:
      "We enforce strict safety standards across production lines, loading zones, and delivery operations.",
  },
  {
    icon: Leaf,
    title: "Sustainable Production",
    iconClassName: "text-blue-700",
    description:
      "Our process reduces waste and optimizes resource use to lower environmental impact over time.",
  },
  {
    icon: Factory,
    title: "Industrial Scale",
    iconClassName: "text-red-700",
    description:
      "From neighborhood projects to major infrastructure, we deliver dependable volume without sacrificing quality.",
  },
]

export function CoreValuesSection() {
  return (
    <section
      id="core-values"
      className="scroll-mt-24 bg-card/90 py-24 md:py-32"
    >
      <Container asGrid>
        <div className="grid grid-cols-10 gap-px px-6">
          <div aria-hidden className="max-sm:hidden">
            <div data-grid-content />
          </div>

          <div className="col-span-full grid gap-px sm:col-span-8 @4xl:grid-cols-2">
            <div data-grid-content className="col-span-full p-6 @4xl:p-12">
              <h2 className="text-balance text-muted-foreground">
                Core Values
              </h2>
              <p className="mt-6 max-w-2xl text-4xl font-medium text-balance text-foreground">
                The principles that guide every production run, quality check,
                and delivery from our factory.
              </p>
            </div>

            {values.map((value) => (
              <div
                key={value.title}
                data-grid-content
                className="flex flex-col gap-3 p-6 @4xl:p-12"
              >
                <value.icon className={cn("size-8", value.iconClassName)} />
                <h3 className="font-medium text-foreground">{value.title}</h3>
                <p className="leading-relaxed text-foreground/85">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div aria-hidden className="max-sm:hidden">
            <div data-grid-content />
          </div>
        </div>
      </Container>
    </section>
  )
}
