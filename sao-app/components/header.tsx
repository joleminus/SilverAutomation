import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Silver Automation" width={150} height={40} />
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              About Us
            </Link>
            <a href="https://form.jotform.com/242711835815458" target="_blank" rel="noopener noreferrer">
              <Button 
                size="sm"
                className="bg-[#006B8F] hover:bg-[#005A79] dark:bg-[#006B8F] dark:hover:bg-[#005A79] text-white border-0"
              >
                Book Consultation
              </Button>
            </a>
            <ThemeToggle />
          </nav>
        </header>
      </div>
    </div>
  )
}

