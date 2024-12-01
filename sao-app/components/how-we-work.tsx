export function HowWeWork() {
    return (
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-gray-50">How We Work</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16">
        We specialize in setting up and optimizing Pipedrive for streamlining your pipeline and seamless automation.
        </p>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200 dark:bg-gray-800" />
          
          <div className="space-y-24">
            {/* Step 1 */}
            <div className="relative grid grid-cols-2 gap-8">
              <div className="text-right">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Audit & Consult</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                We take the time to understand your clients, processes, and challenges, ensuring a solution that’s perfectly aligned with your business.
                </p>
              </div>
              <div></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full border-4 border-white dark:border-gray-950 flex items-center justify-center">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-300">1</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative grid grid-cols-2 gap-8">
              <div></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Propose Solution</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                We’ll design and walk you through our proposed solution to ensure clear communication. Before implementation, we’ll gather your feedback and revisions to make sure it meets your expectations.                </p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full border-4 border-white dark:border-gray-950 flex items-center justify-center">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-300">2</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative grid grid-cols-2 gap-8">
              <div className="text-right">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Action & Demo</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                With a clear vision and defined goals, our team will now focus on implementing the planned changes. Once complete, we’ll showcase the enhanced functionalities in an upcoming demo, and receive another round of revision request.                  </p>
              </div>
              <div></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full border-4 border-white dark:border-gray-950 flex items-center justify-center">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-300">3</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative grid grid-cols-2 gap-8">
              <div></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Roll Out Support</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                We'll guide your team or end users with comprehensive demos, walkthroughs, and detailed documentation. Alongside training sessions, we offer two weeks of dedicated support to gather feedback and make any final adjustments, ensuring a smooth rollout.                </p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full border-4 border-white dark:border-gray-950 flex items-center justify-center">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-300">4</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  