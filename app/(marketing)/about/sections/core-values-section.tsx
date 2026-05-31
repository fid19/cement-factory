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
import Image from "next/image"

const values = [
  {
    icon: CheckCircle2,
    title: "Quality First",
    iconClassName: "text-green-600",
    description:
      "Every batch is tested for strength, consistency, and durability before leaving our plant.",
  },
  {
    icon: MdOutlineHealthAndSafety,
    title: "Worker Safety",
    iconClassName: "text-yellow-600",
    description:
      "We enforce strict safety standards across production lines, loading zones, and delivery operations.",
  },
  {
    icon: Leaf,
    title: "Sustainable Production",
    iconClassName: "text-blue-600",
    description:
      "Our process reduces waste and optimizes resource use to lower environmental impact over time.",
  },
  {
    icon: Factory,
    title: "Industrial Scale",
    iconClassName: "text-red-600",
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

            <div className="col-span-full grid grid-cols-1 gap-2 p-6 @4xl:grid-cols-2 @4xl:pl-12">
              <div className="grid gap-4 divide-y divide-foreground/10 rounded-4xl bg-foreground/5 py-8 @4xl:col-span-1">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="flex flex-col gap-2 px-6 pb-3"
                  >
                    <span className="flex w-fit items-center gap-1 rounded-full px-2 ring ring-foreground/40">
                      <value.icon className={cn("size-4 text-foreground/70")} />
                      <h3 className="text-sm text-foreground/70">
                        {value.title}
                      </h3>
                    </span>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="relative translate-x-8 translate-y-8 overflow-hidden">
                <Image
                  src="/gallery/worker.webp"
                  alt="Core Values"
                  fill
                  className="rounded-4xl object-cover"
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
