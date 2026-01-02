'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, ArrowRight, Sparkles } from 'lucide-react'

const valueItems = [
  { item: 'Professional Website Design', value: '₦350,000' },
  { item: '1 Year Premium Hosting', value: '₦50,000' },
  { item: 'Domain Name Registration', value: '₦15,000' },
  { item: 'Mobile Optimization', value: '₦50,000' },
  { item: 'Basic SEO Setup', value: '₦30,000' },
  { item: 'WhatsApp Integration', value: '₦15,000' },
]

export default function PricingSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const scrollToContact = () => {
    const el = document.getElementById('final-cta')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 gradient-cta">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-purple-700 to-pink-600 p-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full mb-3">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-white text-sm font-medium">Limited Time Offer</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Complete Website Package</h2>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="space-y-3 mb-8">
              {valueItems?.map((item, index) => (
                <div key={item?.item ?? index} className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{item?.item ?? ''}</span>
                  </div>
                  <span className="text-gray-400 line-through text-sm">{item?.value ?? ''}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 text-center mb-6">
              <p className="text-gray-600 mb-2">Total Value</p>
              <p className="text-3xl font-bold text-gray-400 line-through mb-2">₦510,000</p>
              <p className="text-gray-600 mb-2">Your Investment Today</p>
              <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
                Less than ₦120,000
              </p>
              <p className="text-green-600 font-semibold mt-2">You're saving over ₦380,000!</p>
            </div>
            
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full flex items-center justify-center gap-2 text-lg"
            >
              Get My Website Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
