import { CoreValuesSection } from "@/app/(marketing)/about/sections/core-values-section"
import { MissionSection } from "@/app/(marketing)/about/sections/mission-section"
import { Separator } from "@/components/container"
import FooterSection from "@/components/footer"
import Header from "@/components/header"
import { ContactGridTwoContactFiveSection } from "@/components/sections/contact-grid-two-contact-five"
import { CtaSection } from "@/components/sections/cta-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { StatsSection } from "@/components/sections/stats-section"
import HeroSection from "@/components/secondary-hero-4"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Separator />
        <section id="about" className="scroll-mt-24">
          <MissionSection />
        </section>
        <Separator />
        <section id="gallery" className="scroll-mt-24">
          <GallerySection />
        </section>
        <Separator />

        <Separator />
        <CoreValuesSection />
        <Separator />
        <StatsSection />
        <Separator />
        <ContactGridTwoContactFiveSection />
        <Separator />
        <section id="contact" className="scroll-mt-24">
          <CtaSection />
        </section>
      </main>

      <FooterSection />
    </>
  )
}
