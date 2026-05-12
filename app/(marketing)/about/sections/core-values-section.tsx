import {
  CheckCheck,
  CheckCircle2,
  CheckCircle2Icon,
  Construction,
  Factory,
  Leaf,
  ShieldCheck,
} from "lucide-react"
import { Container } from "@/components/container"
import { cn } from "@/lib/utils"
import { SectionDoodleOverlay } from "@/components/ui/section-doodle-overlay"
import { GiSafetyPin } from "react-icons/gi"
import { MdOutlineHealthAndSafety } from "react-icons/md"

const values = [
  {
    icon: CheckCircle2,
    title: "Quality First",
    iconClassName: "text-green-700",
    description:
      "Every batch is tested for strength, consistency, and durability before leaving our plant.",
  },
  {
    icon: MdOutlineHealthAndSafety,
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
      className="relative scroll-mt-24 overflow-hidden bg-card/90 py-24 md:py-32"
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
              <p className="mt-6 max-w-2xl text-3xl leading-[1.2] font-medium text-balance text-foreground md:text-4xl">
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
