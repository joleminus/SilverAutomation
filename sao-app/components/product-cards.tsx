import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function ProductCards() {
  return (
    <section className="container py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">Products that fits your need</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-50">Support</CardTitle>
            <p className="text-sm text-gray-600 dark:text-gray-400">Simple Pipeline Specialist Support</p>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">$500<span className="text-sm font-normal text-gray-600 dark:text-gray-400">/month</span></div>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><span className="text-green-600 dark:text-green-400">✓</span> Unlimited Task & Enquiry</li>
              <li><span className="text-green-600 dark:text-green-400">✓</span> 3 Active Task at a time</li>
              <li><span className="text-green-600 dark:text-green-400">✓</span> 1 - 2 days Turnaround</li>
              <li><span className="text-green-600 dark:text-green-400">✓</span> 1 Recurring Task</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-[#006B8F] hover:bg-[#005A79] dark:bg-[#006B8F] dark:hover:bg-[#005A79] text-white border-0">Get Started</Button>
          </CardFooter>
        </Card>
        
        <Card className="bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-50">Part-Time Generalist</CardTitle>
            <p className="text-sm text-gray-600 dark:text-gray-400">For companies in need of a dedicated part-time</p>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">$720<span className="text-sm font-normal text-gray-600 dark:text-gray-400">/month</span></div>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><span className="text-green-600 dark:text-green-400">✓</span> Part-Time Pipedrive Specialist</li>
              <li><span className="text-green-600 dark:text-green-400">✓</span> T-shaped Professional</li>
              <li><span className="text-green-600 dark:text-green-400">✓</span> 2 Sub-skill according to your need</li>
              <li><span className="text-green-600 dark:text-green-400">✓</span> Expert Generalist via Proprietary Hiring Process</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-[#006B8F] hover:bg-[#005A79] dark:bg-[#006B8F] dark:hover:bg-[#005A79] text-white border-0">Get Started</Button>
          </CardFooter>
        </Card>

        <Card className="bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-50">Full-Time Generalist</CardTitle>
            <p className="text-sm text-gray-600 dark:text-gray-400">For companies in need of a dedicated full-time</p>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">$1440<span className="text-sm font-normal text-gray-600 dark:text-gray-400">/month</span></div>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><span className="text-green-600 dark:text-green-400">✓</span> Full-Time Pipedrive Specialist</li>
              <li><span className="text-green-600 dark:text-green-400">✓</span> T-shaped Professional</li>
              <li><span className="text-green-600 dark:text-green-400">✓</span> 2 Sub-skill according to your need</li>
              <li><span className="text-green-600 dark:text-green-400">✓</span> Expert Generalist via Proprietary Hiring Process</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-[#006B8F] hover:bg-[#005A79] dark:bg-[#006B8F] dark:hover:bg-[#005A79] text-white border-0">Get Started</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
