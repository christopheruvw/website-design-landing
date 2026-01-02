'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Why is this so cheap? What\'s the catch?',
    answer: 'No catch. We\'ve streamlined our process to help serious business owners get online fast without breaking the bank. We\'re running this offer to help more businesses establish their online presence. The normal cost is ₦500,000+, but this limited offer helps us reach more entrepreneurs.',
  },
  {
    question: 'How long does it take to build my website?',
    answer: 'Typically 7-14 days from when we receive all your content and requirements. We work efficiently while ensuring quality.',
  },
  {
    question: 'What do I need to provide?',
    answer: 'We\'ll need your logo (or we can create a simple one), photos of your products/services, your business information, and your content/text. Don\'t worry — we\'ll guide you through everything.',
  },
  {
    question: 'What happens after the 1 year of hosting?',
    answer: 'After your first year, you can renew hosting at our standard rate (around ₦50,000/year) or transfer your website elsewhere. You own your website — no lock-in.',
  },
  {
    question: 'Can I make changes to my website later?',
    answer: 'Yes! We provide a simple way to request updates. Minor changes are often included, and we offer affordable rates for bigger modifications.',
  },
  {
    question: 'What if I don\'t like the design?',
    answer: 'We work with you to understand your vision before starting. We offer revisions during the design process to ensure you\'re happy with the final result.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers.
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <motion.div
              key={faq?.question ?? index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq?.question ?? ''}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-5 text-gray-600 bg-white">{faq?.answer ?? ''}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
