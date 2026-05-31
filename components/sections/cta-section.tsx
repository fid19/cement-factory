import Link from "next/link"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { SectionDoodleOverlay } from "@/components/ui/section-doodle-overlay"
import { FaWhatsapp } from "react-icons/fa"
import { Mail, MapPin, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import MapIllustration from "../illustrations/map-2"
import DocumentAnalysisIllustration from "../illustrations/document-analysis"

const stats = [
  { value: "24h", label: "Quote turnaround" },
  { value: "500+", label: "Projects delivered" },
  { value: "100%", label: "Quality assured" },
]

export function CtaSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b-2 bg-card/90 py-20 sm:py-24 lg:py-28"
    >
      <SectionDoodleOverlay
        variant="rings"
        placement="bottom-left"
        className="opacity-25"
      />

      <Container asGrid className="relative z-10">
        <div className="absolute inset-0 -z-10">
          <MapIllustration />
        </div>
        <div className="grid grid-cols-10 gap-px bg-background/80 backdrop-blur-[1px] dark:bg-card/70 dark:shadow-[0_1px_1px_hsl(0_0%_0%/0.075),0_2px_2px_hsl(0_0%_0%/0.075),0_4px_4px_hsl(0_0%_0%/0.075),0_8px_8px_hsl(0_0%_0%/0.075),0_16px_16px_hsl(0_0%_0%/0.075)]">
          {/* <div aria-hidden className="max-sm:hidden">
            <div data-grid-content />
          </div> */}

          <div className="col-span-full sm:col-span-8">
            <div
              // data-grid-content
              className="flex flex-col items-start gap-12 p-6 @4xl:p-24"
            >
              <div>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/70 px-3 py-1.5 text-xs font-medium tracking-wider text-muted-foreground uppercase backdrop-blur-sm">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-green-500" />
                  </span>
                  Request a quotation
                </span>
                <h2 className="mb-4 text-3xl font-semibold text-balance text-foreground sm:text-5xl">
                  Let&apos;s{" "}
                  <span className="text-green-500 dark:text-green-400">
                    build
                  </span>{" "}
                  your next project together
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-balance text-muted-foreground sm:text-lg">
                  Tell us about your concrete and block requirements. Our team
                  gets back within 24 hours with pricing, availability, and
                  delivery options for your site.
                </p>
              </div>

              {/* <div className="flex w-full flex-wrap items-stretch gap-x-6 gap-y-4 border-y border-foreground/10 py-6">
                {stats.map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-6">
                    {i > 0 && (
                      <div aria-hidden className="h-10 w-px bg-foreground/10" />
                    )}
                    <div>
                      <div className="text-2xl font-semibold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}

              <div className="grid w-full gap-6 pt-6 sm:grid-cols-2">
                <ContactRow
                  icon={<Mail className="size-4" />}
                  label="Email us"
                  value="yomnyakamdaktadur@gmail.com"
                  href="mailto:yomnyakamdaktadur@gmail.com"
                />
                <ContactRow
                  icon={<Phone className="size-4" />}
                  label="Call or WhatsApp"
                  value="+91 87985 16721"
                  href="https://api.whatsapp.com/send?phone=918798516721"
                  external
                />
                <ContactRow
                  icon={<MapPin className="size-4" />}
                  label="Visit our factory"
                  value="Likabali, Arunachal Pradesh, India"
                  className="sm:col-span-2"
                />
              </div>

              {/* <Button
                asChild
                size="lg"
                variant="ghost"
                className="group px-6 py-3 text-foreground/70 ring ring-foreground/20 transition-all duration-200 ease-in-out hover:bg-green-600/80 hover:text-white hover:ring-green-600/60"
              >
                <Link
                  href="https://api.whatsapp.com/send?phone=918798516721"
                  target="_blank"
                >
                  Contact Us{" "}
                  <FaWhatsapp className="size-6 text-black duration-200 group-hover:text-white" />
                </Link>
              </Button> */}
            </div>
          </div>

          {/* <div aria-hidden className="max-sm:hidden">
            <div data-grid-content />
          </div> */}
        </div>
      </Container>
    </section>
  )
}

const ContactRow = ({
  icon,
  label,
  value,
  href,
  external,
  className,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
  external?: boolean
  className?: string
}) => {
  const content = (
    <div className="group flex items-center gap-3">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-foreground/10 bg-background/70 text-foreground/70 shadow-sm transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-green-500/40 group-hover:text-green-600 group-hover:shadow-md">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
          {label}
        </div>
        <div className="truncate text-sm font-medium text-foreground">
          {value}
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn("transition-opacity", className)}
      >
        {content}
      </Link>
    )
  }

  return <div className={cn(className, "select-none")}>{content}</div>
}
