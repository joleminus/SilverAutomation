import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-8 py-16 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl text-gray-900 dark:text-gray-50">
          Optimize Efficiency With Pipeline Automation
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 md:text-xl">
          Streamline your workflow through our Pipedrive Setup, Streamline, Support, and Generalist Virtual Assistant Services.
        </p>
        {/* <a href="https://form.jotform.com/242711835815458" target="_blank" rel="noopener noreferrer">
          <Button 
            size="lg" 
            className="bg-[#006B8F] hover:bg-[#005A79] dark:bg-[#006B8F] dark:hover:bg-[#005A79] text-white border-0"
          >
            Book Consultation
          </Button>
        </a> */}
      </div>
      <div className="relative h-[400px]">
        <Image
          src="/streamline.png"
          alt="Automation Flow Diagram"
          fill
          className="object-contain"
        />
      </div>
    </section>
  )
}

