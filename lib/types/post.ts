import type { PortableTextBlock } from "@portabletext/types"

export type Heading = {
  text: string
  level: 2 | 3
  slug: string
}

export type Author = {
  name: string
  image: string | null
}

export type Category = {
  title: string
  slug: string
}

export type Post = {
  _id: string
  title: string
  description: string
  slug: string
  href: string
  publishedAt: string
  date: string
  image: string | null
  category: Category | null
  authors: Author[] | null
}

export type PostWithBody = Post & {
  body: PortableTextBlock[]
}
