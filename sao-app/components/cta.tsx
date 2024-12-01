import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="container py-16 text-center">
      <h2 className="text-gray-600 mb-4">Have questions about our services or unsure which one is right for you?</h2>
      <p className="text-3xl font-bold mb-8">Don't get stuck, let's talk.</p>
      <Button size="lg" className="bg-[#006B8F] hover:bg-[#005A79] dark:bg-[#006B8F] dark:hover:bg-[#005A79] text-white border-0">Schedule a FREE Consultation</Button>
    </section>
  )
}
