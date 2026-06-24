import FooterSection from "@/components/footer"

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <main role="main" className="bg-background">
        {children}
      </main>
      {/* <FooterSection /> */}
    </>
  )
}
