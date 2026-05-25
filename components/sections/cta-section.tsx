import Link from "next/link"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { SectionDoodleOverlay } from "@/components/ui/section-doodle-overlay"
import { FaWhatsapp } from "react-icons/fa"

export function CtaSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-b-2 bg-card/90 py-6"
    >
      <SectionDoodleOverlay
        variant="rings"
        placement="bottom-left"
        className="opacity-25"
      />
      <Container asGrid className="relative z-10">
        <div className="grid grid-cols-10 gap-px">
          <div aria-hidden className="max-sm:hidden">
            <div data-grid-content />
          </div>

          <div className="col-span-full sm:col-span-8">
            <div
              data-grid-content
              className="flex flex-col items-start gap-8 p-6 @4xl:p-24"
            >
              <h2 className="text-3xl font-semibold text-balance text-foreground sm:text-5xl">
                Need cement or blocks for your next project?
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-balance text-muted-foreground sm:text-lg">
                Talk to our team about bulk orders, custom delivery schedules,
                and product recommendations for residential, commercial, and
                infrastructure builds.
              </p>

              <div data-grid-content className="w-full">
                <div className="grid grid-cols-2 justify-between space-y-6 *:space-y-2">
                  <div>
                    <h3 className="text-sm text-muted-foreground">Email</h3>
                    <Link
                      href="mailto:yomnyakamdaktadur@gmail.com"
                      className="text-sm font-medium text-foreground hover:underline hover:decoration-primary"
                    >
                      yomnyakamdaktadur@gmail.com
                    </Link>
                  </div>

                  <div>
                    <h3 className="text-sm text-muted-foreground">Phone</h3>
                    <Link
                      target="_blank"
                      href="https://api.whatsapp.com/send?phone=918798516721"
                      className="text-sm font-medium text-foreground hover:underline hover:decoration-primary"
                    >
                      +91 879 851 (6721)
                    </Link>
                  </div>

                  <div>
                    <h3 className="text-sm text-muted-foreground">Office</h3>
                    <p className="text-sm font-medium text-foreground">
                      Likabali, Arunachal Pradesh 791111, India <br />
                      <span className="text-muted-foreground">
                        Landmark: Near Malinithan Temple
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <Button
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
              </Button>
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
