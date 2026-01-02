'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Monitor, Server, Globe2, Smartphone, Search, MessageCircle } from 'lucide-react'

const features = [
  {
    icon: Monitor,
    title: 'Professional Website Design',
    description: 'A clean, modern website that makes you look like the established business you deserve to be.',
  },
  {
    icon: Server,
    title: '1 Year Premium Hosting',
    description: '12 months of fast, reliable hosting included. No extra fees. No surprises.',
  },
  {
    icon: Globe2,
    title: 'Your Own Domain Name',
    description: 'YourBusinessName.com — A professional web address customers can find and trust.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-Optimized Design',
    description: 'Over 80% of customers browse on phones. Your site will look perfect on every device.',
  },
  {
    icon: Search,
    title: 'Basic SEO Setup',
    description: 'So people can actually FIND you when they search on Google.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Integration',
    description: 'Make it easy for customers to reach you directly from your website.',
  },
]

export default function IncludedSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Here's Everything You're Getting
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to look professional online — included in one affordable package.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features?.map((feature, index) => {
            const Icon = feature?.icon
            return (
              <motion.div
                key={feature?.title ?? index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg hover:bg-purple-50 transition-colors group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {Icon && <Icon className="w-7 h-7 text-white" />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature?.title ?? ''}</h3>
                <p className="text-gray-600">{feature?.description ?? ''}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
