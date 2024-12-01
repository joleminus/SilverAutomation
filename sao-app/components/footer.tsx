import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link></li>
              <li><Link href="/careers" className="text-sm text-gray-600 hover:text-gray-900">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Privacy</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-sm text-gray-600 hover:text-gray-900">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-sm text-gray-600 hover:text-gray-900">FAQ</Link></li>
              <li><Link href="/help" className="text-sm text-gray-600 hover:text-gray-900">Help Center</Link></li>
              <li><Link href="/status" className="text-sm text-gray-600 hover:text-gray-900">Status</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/licenses" className="text-sm text-gray-600 hover:text-gray-900">Licenses</Link></li>
              <li><Link href="/security" className="text-sm text-gray-600 hover:text-gray-900">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Silver Automation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

