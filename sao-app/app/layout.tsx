import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Silver Automation - Optimize Efficiency With Pipeline Automation",
  description: "Streamline your workflow through our Pipeline tools, Support, and Integrated Virtual Assistant",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

