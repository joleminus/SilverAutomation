import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowWeWork } from "@/components/how-we-work"
import { Pricing } from "@/components/pricing"
import { MilestonePricing } from "@/components/milestone-pricing"
import { ProductCards } from "@/components/product-cards"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white dark:bg-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowWeWork />
        <Pricing />
        <MilestonePricing />
        <ProductCards />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

