import { notFound } from "next/navigation"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getLegalDocBySlug, getAllLegalSlugs } from "@/lib/legal-docs"
import { mdxComponents } from "@/components/mdx-components"
import { formatDate } from "@/lib/format-date"
import { ChevronLeft } from "lucide-react"

export async function generateStaticParams() {
  const slugs = getAllLegalSlugs()
  return slugs.map((slug) => ({ document: slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ document: string }>
}) {
  const { document } = await params
  const doc = getLegalDocBySlug(document)

  if (!doc) {
    return { title: "Document Not Found" }
  }

  return {
    title: `${doc.title} - Legal`,
  }
}

export default async function LegalDocumentPage({
  params,
}: {
  params: Promise<{ document: string }>
}) {
  const { document } = await params
  const doc = getLegalDocBySlug(document)

  if (!doc) {
    notFound()
  }

  return (
    <>
      <section>
        <div className="relative py-6 sm:py-12">
          <div className="absolute inset-0 w-full bg-[url('/gallery/texture.jpg')] bg-cover bg-center opacity-80" />
          <div className="absolute inset-0 bg-black/50" aria-hidden />
        </div>
        <div className="border-b bg-muted/50 pt-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="group mb-4 flex flex-col items-center justify-center">
              <Link
                href="/"
                className="gap-q flex items-center text-sm font-medium text-muted-foreground"
              >
                <ChevronLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Home
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold text-balance text-foreground sm:text-6xl lg:tracking-tight">
                {doc.title}
              </h1>
              <p className="mt-4 text-muted-foreground">
                <span className="text-foreground">Effective date:</span>{" "}
                {formatDate(doc.effectiveDate)}
              </p>
            </div>

            <div className="ring-border-illustration mx-auto mt-16 max-w-3xl rounded-3xl bg-card p-8 shadow-xl ring shadow-black/4 lg:p-16">
              <MDXRemote source={doc.content} components={mdxComponents} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
