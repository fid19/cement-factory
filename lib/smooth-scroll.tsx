export const scrollToId = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}
