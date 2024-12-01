import Image from 'next/image'
import Link from 'next/link'

export function Features() {
  return (
    <section className="container py-16">
      <h2 className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">
        You're on the money there. Let's fine-tune and automate it.
      </h2>
      <p className="text-center text-gray-700 dark:text-gray-300 mb-16">
        Ever notice yourself saying, "This needs automating", "There's got to be a better way!" or "I need help, but where do I even begin?" You're probably onto something. Let's chat.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center space-y-4">
          <div className="w-40 h-40 mx-auto bg-blue-50 dark:bg-blue-950/20 rounded-full flex items-center justify-center">
            <Image 
              src="/gear.png"
              alt="Pipeline Setup Icon"
              width={640}
              height={640}
              className="text-blue-700 dark:text-blue-300"
            />
          </div>
          <h3 className="font-semibold text-xl text-gray-900 dark:text-gray-50">Pipeline Setup & Streamline</h3>
          <p className="text-gray-700 dark:text-gray-300">
          Your business workflow is unique. Properly aligning your processes and data structure with Pipedrive during setup is essential for immediate efficiency and streamlining.
          </p>
          <Link 
            href="/services/pipeline-setup"
            className="inline-block text-[#006B8F] hover:text-[#005A79] dark:text-[#006B8F] dark:hover:text-[#005A79] font-medium"
          >
            Read More →
          </Link>
        </div>
        <div className="text-center space-y-4">
          <div className="w-40 h-40 mx-auto bg-blue-50 dark:bg-blue-950/20 rounded-full flex items-center justify-center">
            <Image 
              src="/hands.png"
              alt="Support Icon"
              width={640}
              height={640}
              className="text-blue-700 dark:text-blue-300"
            />
          </div>
          <h3 className="font-semibold text-xl text-gray-900 dark:text-gray-50">Proactive Support</h3>
          <p className="text-gray-700 dark:text-gray-300">
          Even a well-designed automation workflow can break. You need someone to troubleshoot and maintain your CRM, but hiring a full-time Pipedrive expert might not be necessary.
          </p>
          <Link 
            href="/services/proactive-support"
            className="inline-block text-[#006B8F] hover:text-[#005A79] dark:text-[#006B8F] dark:hover:text-[#005A79] font-medium"
          >
            Read More →
          </Link>
        </div>
        <div className="text-center space-y-4">
          <div className="w-40 h-40 mx-auto bg-blue-50 dark:bg-blue-950/20 rounded-full flex items-center justify-center">
            <Image 
              src="/va.png"
              alt="Virtual Assistant Icon"
              width={640}
              height={640}
              className="text-blue-700 dark:text-blue-300"
            />
          </div>
          <h3 className="font-semibold text-xl text-gray-900 dark:text-gray-50">Generalist Virtual Assistant</h3>
          <p className="text-gray-700 dark:text-gray-300">
          As your business grows, so does your administrative workload. You need a versatile T-shaped VA, ideally with Pipedrive support as one of their core skills.
          </p>
          <Link 
            href="/services/virtual-assistant"
            className="inline-block text-[#006B8F] hover:text-[#005A79] dark:text-[#006B8F] dark:hover:text-[#005A79] font-medium"
          >
            Read More →
          </Link>
        </div>
      </div>
    </section>
  )
}

