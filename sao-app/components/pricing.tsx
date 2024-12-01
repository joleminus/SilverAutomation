import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function Pricing() {
  return (
    <section className="container py-16">
      <h2 className="text-3xl font-bold text-center mb-4">One Solution, Zero Confusion</h2>
      <p className="text-center text-gray-600 mb-12">
        We focus on solving problems, not complicating things. <strong>ONE PROBLEM, ONE PROJECT, ONE PRICE.</strong>
      </p>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Setup & Streamline</CardTitle>
          <p className="text-sm text-gray-600 text-center">For current Pipeline users looking to fine-up Streamline their workflows in the next level</p>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold mb-6 text-center">$1200</div>
          <ul className="space-y-2">
            <li><span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">✓</span> Process & Pipeline Mapping</li>
            <li><span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">✓</span> Tailored CRM Setup for Your Workflow</li>
            <li><span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">✓</span> Native Tool Automation</li>
            <li><span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">✓</span> Custom Workflow Automation & AI Agents (Zapier, N8N, Make)</li>
            <li><span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">✓</span> Basic Tool Integration (VoIP, SMS, Email)</li>
            <li><span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">✓</span> Standard Operating Document (Notion)</li>
            <li><span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">✓</span> 2 weeks Roll Out Support</li>
            <li><span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">✓</span> 3 Revisions</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-[#006B8F] hover:bg-[#005A79] dark:bg-[#006B8F] dark:hover:bg-[#005A79] text-white border-0">Get Started</Button>
        </CardFooter>
      </Card>
    </section>
  )
}

