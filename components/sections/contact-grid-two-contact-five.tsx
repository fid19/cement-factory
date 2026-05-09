import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Container, Separator } from "@/components/container"
import { EnterpriseForm } from "@/components/enterprise-form"

const benefits = [
  "Bulk order pricing support",
  "Dedicated account manager",
  "Flexible delivery schedules",
  "Fast quotation turnaround",
]

export function ContactGridTwoContactFiveSection() {
  return (
    <section
      id="contact-sales"
      className="scroll-mt-24 border-b-2 bg-card/90 py-24 md:py-32"
    >
      <Container asGrid>
        <span className="px-6! text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
          Sales
        </span>
        <div className="grid gap-px @4xl:grid-cols-2">
          <div data-grid-content className="p-6">
            <h2 className="text-5xl font-semibold tracking-tight text-balance text-foreground">
              Ready to scale your next construction project?
            </h2>
            <p className="mt-6 text-lg text-balance text-muted-foreground">
              Talk to our team about cement and concrete block supply plans
              tailored to your site timelines.
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="size-4 shrink-0 fill-emerald-400/25 text-emerald-600 dark:text-emerald-500" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-sm text-muted-foreground">
              Need quick support?{" "}
              <Link
                href="#contact"
                className="font-medium text-primary hover:underline"
              >
                Use our contact shortcut above
              </Link>
            </div>

            <div className="mt-12 space-y-6 *:space-y-2">
              <div>
                <h3 className="text-sm text-muted-foreground">Email</h3>
                <Link
                  href="mailto:sales@cementfactory.example"
                  className="text-sm font-medium text-foreground hover:underline hover:decoration-primary"
                >
                  sales@cementfactory.example
                </Link>
              </div>

              <div>
                <h3 className="text-sm text-muted-foreground">Phone</h3>
                <Link
                  href="tel:+243900000000"
                  className="text-sm font-medium text-foreground hover:underline hover:decoration-primary"
                >
                  +000 900 000 000
                </Link>
              </div>

              <div>
                <h3 className="text-sm text-muted-foreground">Office</h3>
                <p className="text-sm font-medium text-foreground">
                  Industrial Area
                  <br />
                  Kerala, India
                </p>
              </div>
            </div>
          </div>

          <div data-grid-content className="p-6">
            <h3 className="font-medium text-foreground">Talk to our team</h3>
            <p className="mt-2 mb-12 text-sm text-muted-foreground">
              Fill out the form and we will get back to you within 24 hours.
            </p>

            <EnterpriseForm />
          </div>
        </div>
      </Container>
    </section>
  )
}
