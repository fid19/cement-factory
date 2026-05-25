"use client"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import React from "react"
import { useScroll, useMotionValueEvent } from "motion/react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Headset,
  Menu,
  X,
  Shield,
  SquareActivity,
  Sparkles,
  Cpu,
  Gem,
  ShoppingBag,
  GraduationCap,
  BookOpen,
  Notebook,
  Croissant,
} from "lucide-react"
import { useMedia } from "@/hooks/use-media"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { FaWhatsapp } from "react-icons/fa6"
import { scrollToId } from "@/lib/smooth-scroll"

interface FeatureLink {
  href: string
  name: string
  description?: string
  icon: React.ReactElement
}

interface MobileLink {
  groupName?: string
  links?: FeatureLink[]
  name?: string
  href?: string
}

const features: FeatureLink[] = [
  {
    href: "#ux",
    name: "AI",
    description: "Generate Insights and Recommendations",
    icon: <Sparkles className="fill-green-500/15 stroke-foreground" />,
  },
  {
    href: "#performance",
    name: "Performance",
    description: "Lightning-fast load times",
    icon: <SquareActivity className="fill-indigo-500/15 stroke-foreground" />,
  },
  {
    href: "#security",
    name: "Security",
    description: "Keep your data safe and secure",
    icon: <Shield className="fill-blue-500/15 stroke-foreground" />,
  },
  {
    href: "#support",
    name: "Customer Support",
    description: "Get help when you need it",
    icon: <Headset className="fill-pink-500/15 stroke-foreground" />,
  },
]

const useCases: FeatureLink[] = [
  {
    href: "#ux",
    name: "Marketplace",
    description: "Find and buy AI tools",
    icon: <ShoppingBag className="fill-emerald-500/25 stroke-foreground" />,
  },
  {
    href: "#performance",
    name: "Guides",
    description: "Learn how to use AI tools",
    icon: <GraduationCap className="fill-indigo-500/15 stroke-foreground" />,
  },
  {
    href: "#security",
    name: "API Integration",
    description: "Integrate AI tools into your app",
    icon: <Cpu className="fill-blue-500/15 stroke-foreground" />,
  },
  {
    href: "#support",
    name: "Partnerships",
    description: "Get help when you need it",
    icon: <Gem className="fill-pink-500/15 stroke-foreground" />,
  },
]

const contentLinks: FeatureLink[] = [
  {
    name: "Announcements",
    href: "#link",
    icon: <BookOpen className="fill-purple-500/15 stroke-foreground" />,
  },
  {
    name: "Resources",
    href: "#link",
    icon: <Croissant className="fill-red-500/15 stroke-foreground" />,
  },
  {
    name: "Blog",
    href: "#link",
    icon: <Notebook className="fill-zinc-500/15 stroke-foreground" />,
  },
]

const mobileLinks: MobileLink[] = [
  { name: "Our Mission", href: "#mission" },
  { name: "Gallery", href: "#gallery" },
  { name: "Blog", href: "#blogs" },
  { name: "Contact Us", href: "#contact" },
]

export default function HeaderOne() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const isLarge = useMedia("(min-width: 64rem)")

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <>
      <header
        role="banner"
        data-state={isMobileMenuOpen ? "active" : "inactive"}
        {...(isScrolled && { "data-scrolled": true })}
      >
        <div
          className={cn(
            "fixed inset-x-0 top-0 z-50 in-data-scrolled:border-b in-data-scrolled:bg-background/50 in-data-scrolled:backdrop-blur",
            !isLarge && "h-14 overflow-hidden border-b",
            isMobileMenuOpen && "h-screen bg-background/75 backdrop-blur"
          )}
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <div className="relative flex flex-wrap items-center justify-between lg:py-5">
              <div className="flex justify-between gap-8 max-lg:h-14 max-lg:w-full max-lg:border-b">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center space-x-2"
                >
                  <h1 className="text-2xl font-bold text-white in-data-scrolled:text-foreground max-lg:in-data-scrolled:text-foreground! max-lg:in-data-[state=active]:text-foreground">
                    TD
                  </h1>
                </Link>

                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label={
                    isMobileMenuOpen == true ? "Close Menu" : "Open Menu"
                  }
                  className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="m-auto size-5 text-white duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0 max-lg:in-data-scrolled:text-black! dark:in-data-scrolled:text-white!" />
                  <X className="absolute inset-0 m-auto size-5 scale-0 -rotate-180 text-white opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100 max-lg:in-data-scrolled:text-black" />
                </button>
              </div>

              {isLarge && (
                <div className="absolute inset-0 m-auto size-fit">
                  <NavMenu />
                </div>
              )}
              {!isLarge && isMobileMenuOpen && (
                <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />
              )}

              <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 in-data-[state=active]:flex max-lg:in-data-[state=active]:mt-6 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                  <Button
                    asChild
                    className="group hover:bg-green-500"
                    variant="secondary"
                    size="sm"
                  >
                    <Link
                      target="_blank"
                      href="https://api.whatsapp.com/send?phone=918798516721"
                    >
                      <span className="group-hover:text-white">
                        Request a Quote{" "}
                      </span>
                      <FaWhatsapp className="size-4 text-green-500 group-hover:text-white" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

const MobileMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <nav role="navigation" className="w-full">
      <Accordion
        type="single"
        collapsible
        className="-mx-4 mt-0.5 space-y-0.5 **:hover:no-underline"
      >
        {mobileLinks.map((link, index) => {
          if (link.groupName && link.links) {
            return (
              <AccordionItem
                key={index}
                value={link.groupName}
                className="group relative border-b-0 before:pointer-events-none before:absolute before:inset-x-4 before:bottom-0 before:border-b"
              >
                <AccordionTrigger className="flex items-center justify-between px-4 py-3 text-lg **:!font-normal data-[state=open]:bg-foreground/5">
                  {link.groupName}
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <ul>
                    {link.links.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <Link
                          href={feature.href}
                          onClick={closeMenu}
                          className="grid grid-cols-[auto_1fr] items-center gap-2.5 px-4 py-2"
                        >
                          <div
                            aria-hidden
                            className="flex items-center justify-center *:size-4"
                          >
                            {feature.icon}
                          </div>
                          <div className="text-base">{feature.name}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )
          }
          return null
        })}
      </Accordion>
      {mobileLinks.map((link, index) => {
        if (link.name && link.href) {
          return (
            <Link
              key={index}
              href={link.href}
              className="group relative block border-0 border-b py-4 text-lg"
              onClick={(e) => {
                closeMenu()
                scrollToId(link.href!.split("#")[1]!)(e)
              }}
            >
              {link.name}
            </Link>
          )
        }
        return null
      })}
    </nav>
  )
}

const NavMenu = () => {
  return (
    <NavigationMenu
      viewport={false}
      className="**:hover:text-white **:focus:text-white **:in-data-scrolled:text-foreground! **:in-data-scrolled:hover:text-foreground! **:data-[slot=navigation-menu-content]:top-10 max-lg:hidden"
    >
      <NavigationMenuList className="gap-3">
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle())}
          >
            <Link
              className="text-white"
              href="/#mission"
              // onClick={scrollToId("mission")}
            >
              Our Mission
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link
              className="text-white"
              href="/#gallery"
              // onClick={scrollToId("gallery")}
            >
              Gallery
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle())}
          >
            <Link
              className="text-white"
              href="/#blogs"
              // onClick={scrollToId("mission")}
            >
              Blog
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link
              className="text-white"
              href="/#contact"
              // onClick={scrollToId("contact")}
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  description,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string
  title: string
  description?: string
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="grid grid-cols-[auto_1fr] gap-2.5 p-3">
          <div className="bg-illustration relative flex size-9 items-center justify-center rounded-lg border border-transparent shadow shadow-sm ring-1 ring-foreground/10 *:drop-shadow *:drop-shadow-black/6.5 before:absolute before:inset-0 before:rounded-lg before:bg-radial before:to-foreground/3">
            {children}
          </div>
          <div className="space-y-0.5">
            <div className="text-sm font-medium text-foreground">{title}</div>
            <p className="line-clamp-1 text-xs text-muted-foreground">
              {description}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
