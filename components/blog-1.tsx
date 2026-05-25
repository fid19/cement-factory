"use client"

import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { useMedia } from "@/hooks/use-media"
import { Author, Post } from "@/lib/types/post"

const SHADCN_AVATAR = "https://avatars.githubusercontent.com/u/124599?v=4"
const MESCHAC_AVATAR = "https://avatars.githubusercontent.com/u/47919550?v=4"
const THEO_AVATAR = "https://avatars.githubusercontent.com/u/68236786?v=4"
const BERNARD_AVATAR = "https://avatars.githubusercontent.com/u/31113941?v=4"
const GLODIE_AVATAR = "https://avatars.githubusercontent.com/u/99137927?v=4"

type Category =
  | "company"
  | "marketing"
  | "newsroom"
  | "partners"
  | "engineering"
  | "press"

type Filter = "all" | Category

interface Article {
  title: string
  description: string
  category: string
  image: string | null
  date: string
  href: string
  authors: Author[] | null
}

export default function Blog({ posts }: { posts: Post[] }) {
  const [activeFilter, setActiveFilter] = useState<Filter>("all")
  //   const filters: Filter[] = [
  //     "all",
  //     "company",
  //     "marketing",
  //     "newsroom",
  //     "partners",
  //     "engineering",
  //     "press",
  //   ]

  /**
   * 
   * order(publishedAt desc)[0...${limit}]{
      _id,
      title,
      description,
      "slug": slug.current,
      "href": slug.current,
      publishedAt,
      "date": publishedAt,
      "image": image.asset->url,
      category->{
        title,
        "slug": slug.current
      },
      authors[]->{
        name,
        "image": image.asset->url
      }
   */

  const rawArticles: Article[] = useMemo(
    () =>
      posts.map((post) => ({
        title: post.title,
        description: post.description,
        category: post.category!.title,
        image: post.image,
        date: new Date(post.publishedAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        href: `/blog/${post.slug}`,
        authors: post.authors,
      })),
    [posts]
  )

  const categoryCounts = useMemo(() => {
    const counts: Record<Filter, number> = {
      all: 0,
      company: 0,
      marketing: 0,
      newsroom: 0,
      partners: 0,
      engineering: 0,
      press: 0,
    }
    for (const a of rawArticles) {
      counts.all++
      counts[a.category as Filter]++
    }
    return counts
  }, [rawArticles])

  const articles = useMemo(
    () =>
      activeFilter === "all"
        ? rawArticles
        : rawArticles.filter((article) => article.category === activeFilter),
    [rawArticles, activeFilter]
  )
  const topArticles = useMemo(() => articles.slice(0, 3), [articles])
  const moreArticles = useMemo(() => {
    const topKeys = new Set(
      topArticles.map((a) => `${a.title}|${a.date}|${a.href}`)
    )
    return articles
      .slice(3)
      .filter((a) => !topKeys.has(`${a.title}|${a.date}|${a.href}`))
  }, [articles, topArticles])

  const isMobile = useMedia("(max-width: 640px)")
  const isMedium = useMedia("(min-width: 641px) and (max-width: 1024px)")

  const lastArticles = isMobile ? 1 : isMedium ? 2 : 3

  return (
    <section className="@container bg-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-md">
          <span className="text-muted-foreground">Blog</span>
          <h1 className="mt-4 text-4xl font-semibold text-balance text-muted-foreground">
            Everything you need to know about{" "}
            <strong className="font-semibold text-foreground">
              building stronger, smarter, and better
            </strong>
          </h1>
        </div>
      </div>
      {/* <div className="sticky top-0 z-10 my-12 bg-background">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex justify-between gap-4 border-b max-md:-mx-6">
            <div
              className="-ml-0.5 flex snap-x snap-mandatory overflow-x-auto py-3 max-md:px-6"
              role="tablist"
              aria-label="Blog categories"
            >
              {filters.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFilter(category)}
                  disabled={categoryCounts[category] === 0}
                  role="tab"
                  aria-selected={activeFilter === category}
                  className="group snap-center px-1 text-muted-foreground disabled:pointer-events-none disabled:opacity-50"
                >
                  <span
                    className={cn(
                      "flex w-fit items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors [&>svg]:size-4",
                      activeFilter === category
                        ? "bg-card font-medium text-primary shadow-sm ring-1 shadow-black/6.5 ring-border"
                        : "group-hover:bg-foreground/5 hover:text-foreground"
                    )}
                  >
                    <span className="capitalize">{category}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      <div className="mx-auto my-12 max-w-5xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topArticles.map((article, index) => (
            <Card
              key={`${article.title}-${article.date}-${index}`}
              asChild
              className="group relative row-span-5 grid grid-rows-subgrid gap-3 bg-linear-to-b from-card from-65% to-transparent p-6 shadow-xl shadow-black/6.5"
            >
              <article>
                <div className="-mx-6 -mt-6 aspect-video overflow-hidden rounded-xl">
                  <Image
                    src={article.image!}
                    alt={article.title}
                    width={6394}
                    height={4500}
                    className="h-full w-full object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    loading={index < 3 ? "eager" : "lazy"}
                    priority={index === 0}
                  />
                </div>

                <time
                  className="text-sm text-muted-foreground"
                  dateTime={new Date(article.date).toISOString()}
                >
                  {article.date}
                </time>
                <h2 className="text-lg font-semibold text-foreground">
                  <Link
                    href={article.href}
                    className="before:absolute before:inset-0"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground">{article.description}</p>

                <div className="grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
                  <div className="space-y-2">
                    {article.authors!.map((author, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-[auto_1fr] items-center gap-2"
                      >
                        <div className="ring-border-illustration aspect-square size-6 overflow-hidden rounded-md border border-transparent bg-card shadow-md ring-1 shadow-black/15">
                          <Image
                            src={author.image!}
                            alt={author.name}
                            width={46}
                            height={46}
                            className="size-full object-cover"
                          />
                        </div>
                        <span className="line-clamp-1 text-sm text-muted-foreground">
                          {author.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex h-6 items-center">
                    <span className="flex items-center gap-1 text-sm font-medium text-primary transition-colors duration-200 group-hover:text-foreground">
                      Read
                      <ChevronRight
                        strokeWidth={2.5}
                        aria-hidden="true"
                        className="size-3.5 translate-y-px duration-200 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              </article>
            </Card>
          ))}
        </div>
        {moreArticles.length > 0 && (
          <div className="mt-24">
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-x-px -inset-y-6 border-x"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -inset-y-6 left-1/2 w-6 -translate-x-3 border-x max-sm:hidden lg:left-1/3 lg:-translate-x-4"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -inset-y-6 right-1/3 ml-auto w-6 translate-x-4 border-x max-lg:hidden"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-x-6 -inset-y-px border-y"
              />
              <div className="grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                {moreArticles.map((article, index) => (
                  <article
                    key={`${article.title}-${article.date}-${index}`}
                    className={cn(
                      "group relative row-span-4 grid grid-rows-subgrid gap-3 p-6 duration-200 focus-within:bg-foreground/2 hover:bg-foreground/2",
                      index < moreArticles.length - lastArticles && "border-b"
                    )}
                  >
                    <time
                      className="text-sm text-muted-foreground"
                      dateTime={new Date(article.date).toISOString()}
                    >
                      {article.date}
                    </time>
                    <h2 className="text-lg font-semibold text-foreground">
                      {" "}
                      <Link
                        href={article.href}
                        className="before:absolute before:inset-0"
                      >
                        {article.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground">
                      {article.description}
                    </p>

                    <div className="grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
                      <div className="space-y-2">
                        {article.authors!.map((author, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-[auto_1fr] items-center gap-2"
                          >
                            <div className="ring-border-illustration aspect-square size-6 overflow-hidden rounded-md border border-transparent bg-card shadow-md ring-1 shadow-black/15">
                              <Image
                                src={author.image!}
                                alt={author.name}
                                width={46}
                                height={46}
                                className="size-full object-cover"
                              />
                            </div>
                            <span className="line-clamp-1 text-sm text-muted-foreground">
                              {author.name}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="flex h-6 items-center">
                        <span className="flex items-center gap-1 text-sm font-medium text-primary transition-colors duration-200 hover:text-foreground">
                          Read
                          <ChevronRight
                            strokeWidth={2.5}
                            aria-hidden="true"
                            className="size-3.5 translate-y-px duration-200 group-hover:translate-x-0.5"
                          />
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
