import Link from "next/link"
import { Container } from "@/components/container"
import { SectionDoodleOverlay } from "@/components/ui/section-doodle-overlay"

const links = [
  {
    group: "Company",
    items: [
      {
        title: "Gallery",
        href: "#gallery",
      },
      {
        title: "Products",
        href: "#products",
      },
      {
        title: "Our Mission",
        href: "#mission",
      },
    ],
  },
  // {
  //     group: 'Contact',
  //     items: [
  //         {
  //             title: '+243 900 000 000',
  //             href: 'tel:+243900000000',
  //         },
  //         {
  //             title: 'sales@cementfactory.example',
  //             href: 'mailto:sales@cementfactory.example',
  //         },
  //         {
  //             title: 'Industrial Zone, Lubumbashi',
  //             href: '#contact',
  //         },
  //     ],
  // },
  {
    group: "Legal",
    items: [
      {
        title: "Privacy Policy",
        href: "/legal/privacy-policy",
      },
      {
        title: "Terms of Service",
        href: "/legal/terms-and-conditions",
      },
    ],
  },
]

export default function FooterSection() {
  return (
    <footer
      role="contentinfo"
      className="footer-card-tint relative overflow-hidden"
    >
      <SectionDoodleOverlay
        variant="crosshatch"
        placement="bottom-right"
        className="opacity-20"
      />{" "}
      {/* <Container>
        <div className="h-12"></div>
      </Container> */}
      <Container asGrid className="relative z-10 bg-card/90 **:bg-transparent">
        <div className="grid gap-px @4xl:grid-cols-5">
          <div className="space-y-6 bg-foreground/5 p-6 lg:p-12 @4xl:col-span-2">
            <Link
              href="/"
              aria-label="go home"
              className="block size-fit text-base font-semibold tracking-wide text-foreground"
            >
              CEMENT FACTORY
            </Link>

            <p className="text-balance text-muted-foreground">
              Manufacturing high-performance cement and concrete blocks for
              infrastructure, commercial, and residential projects.
            </p>
          </div>

          {/* <div></div> */}

          <div className="col-span-1 grid rounded bg-foreground/5"></div>

          <div className="grid gap-px bg-foreground/5 sm:grid-cols-2 @4xl:col-span-2">
            {links.map((link, index) => (
              <div key={index} className="space-y-4 p-6 text-sm lg:p-12">
                <span className="block font-medium">{link.group}</span>

                <div className="flex flex-wrap gap-4 sm:flex-col">
                  {link.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block text-muted-foreground duration-150 hover:text-primary"
                    >
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 bg-foreground/5 p-6 lg:px-12">
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Cement Factory. All rights reserved.
            </span>

            <div className="flex items-center gap-2 rounded-full border border-transparent py-1 pr-4 pl-2 shadow ring-1 ring-foreground/5">
              <div className="relative flex size-3">
                <span className="absolute inset-0 block size-full animate-pulse rounded-full bg-emerald-100 duration-1500"></span>
                <span className="relative m-auto block size-1 rounded-full bg-emerald-500!"></span>
              </div>
              <span className="text-sm">Plant Operations Active</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
