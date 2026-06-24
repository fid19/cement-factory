import { CoreValuesSection } from "@/app/(marketing)/about/sections/core-values-section"
import { MissionSection } from "@/app/(marketing)/about/sections/mission-section"

import { ContactGridTwoContactFiveSection } from "@/components/sections/contact-grid-two-contact-five"
import { CtaSection } from "@/components/sections/cta-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { StatsSection } from "@/components/sections/stats-section"
import PrimaryHero from "@/components/primary-hero"
import HeroSection from "@/components/secondary-hero-4"
import { FaWhatsapp } from "react-icons/fa6"
import Link from "next/link"
import ContentSection from "@/components/content-3"

import Header from "@/components/header"
import FooterSection from "@/components/footer"
import BlogSection from "@/components/sections/blog-section"
import { siteConfig } from "@/lib/site"

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  makesOffer: [
    "Concrete blocks",
    "Paver blocks",
    "Parking tiles",
    "Readymade walls",
  ].map((item) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Product", name: item },
  })),
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Header />
      <PrimaryHero />
      <HeroSection />
      <MissionSection />
      <ContentSection />
      <GallerySection />
      <CoreValuesSection />
      <StatsSection />
      <BlogSection />
      {/* <ContactGridTwoContactFiveSection /> */}
      <CtaSection />

      <div className="fixed right-4 bottom-4 z-50">
        <Link
          target="_blank"
          href="https://api.whatsapp.com/send?phone=918798516721"
        >
          <span className="before: relative mx-auto inline-block before:absolute before:inset-2 before:-z-10 before:m-auto before:animate-ping before:rounded-full before:bg-green-400/30 before:content-['']">
            <FaWhatsapp className="relative size-13 rounded-full p-1 text-green-600 hover:bg-green-500 hover:text-white md:size-14" />
          </span>
        </Link>
      </div>
    </>
  )
}
