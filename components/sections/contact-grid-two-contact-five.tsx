import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Container } from "@/components/container"
import { EnterpriseForm } from "@/components/enterprise-form"
import { SectionDoodleOverlay } from "@/components/ui/section-doodle-overlay"
import MapIllustration from "../illustrations/map-2"

const benefits = [
  "Bulk order pricing support",
  "Dedicated account manager",
  "Flexible delivery schedules",
  "Fast quotation turnaround",
]

export function ContactGridTwoContactFiveSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-b-2 bg-card/90"
    >
      <MapIllustration />
    </section>
  )
}
