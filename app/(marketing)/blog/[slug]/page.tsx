import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

import { PortableText } from "@portabletext/react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { formatDate } from "@/lib/format-date"
import { portableTextComponents } from "@/components/content-components"
import { extractHeadings } from "@/lib/extract-headings"
import { getPostBySlug, getAllPostSlugs } from "@/lib/actions"

export async function generateStaticParams() {
  const posts = await getAllPostSlugs()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} - Blog`,
    description: post.description,
    openGraph: {
      title: `${post.title} - Blog`,
      description: post.description,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 675,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} - Blog`,
      description: post.description,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 675,
        },
      ],
    },
    alternates: {
      canonical: `/libre/blog-one/${slug}`,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const headings = extractHeadings(post.body)

  return (
    <div className="relative mx-auto max-w-5xl px-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/#blogs">Blog</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
            //   href={`/libre/blog-one/category/${post.category.slug}`}
            >
              {post.category!.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <article className="mt-8">
        <header className="mb-8 max-w-2xl">
          <h1 className="mb-6 text-3xl font-bold text-balance text-foreground md:text-4xl md:leading-tight">
            {post.title}
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              {post.authors!.map((author, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[auto_1fr] items-center gap-2"
                >
                  <div className="ring-border-illustration aspect-square size-6 overflow-hidden rounded-md border border-transparent bg-card shadow-md ring-1 shadow-black/15">
                    <Image
                      src={author.image!}
                      alt={author.name}
                      width={460}
                      height={460}
                      className="size-full object-cover"
                    />
                  </div>
                  <span className="line-clamp-1 text-sm text-muted-foreground">
                    {author.name}
                  </span>
                </div>
              ))}
            </div>
            <time
              className="text-sm text-muted-foreground"
              dateTime={new Date(post.publishedAt).toISOString()}
            >
              {formatDate(post.publishedAt)}
            </time>
          </div>
        </header>

        <div className="flex gap-12">
          <div className="order-last ml-auto hidden h-fit max-w-xs lg:block">
            {headings.length > 0 && (
              <nav className="sticky top-20 w-56">
                <h4 className="mb-4 text-sm font-semibold text-foreground">
                  On this page
                </h4>
                <ul className="space-y-3 text-sm">
                  {headings.map((heading) => (
                    <li key={heading.slug}>
                      <a
                        href={`#${heading.slug}`}
                        className={`block text-muted-foreground transition-colors hover:text-foreground ${heading.level === 3 ? "pl-4" : ""}`}
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
          <div className="max-w-2xl">
            <div className="relative mb-12 overflow-hidden rounded-xl border shadow shadow-black/5">
              <Image
                src={post.image!}
                alt={post.title}
                width={1200}
                height={675}
                className="aspect-video w-full object-cover"
                priority
              />
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            </div>
          </div>
        </div>
      </article>

      <footer className="mt-12 border-t bg-muted/50 py-8">
        <div className="flex items-center justify-between">
          <Link
            href="/#blogs"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to Home
          </Link>
          {/* <Link
            href={`/libre/blog-one/category/${post.category.slug}`}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            More in {post.category.title} →
          </Link> */}
        </div>
      </footer>
    </div>
  )
}
