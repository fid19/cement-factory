import Blog from "../blog-1"
import { Container } from "../container"

export default function BlogSection() {
  return (
    <section
      id="blogs"
      className="relative overflow-hidden border-b-2 bg-card/90 py-24 md:py-32"
    >
      <Blog />
    </section>
  )
}
