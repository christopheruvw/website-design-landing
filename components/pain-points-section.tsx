'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, Handshake, TrendingDown, AlertCircle } from 'lucide-react'

const painPoints = [
  {
    icon: Search,
    title: 'Invisible on Google',
    description: 'That contract you didn\'t get because the client Googled you and found nothing.',
  },
  {
    icon: Handshake,
    title: 'Lost Partnerships',
    description: 'That partnership that fell through because you couldn\'t send a professional link.',
  },
  {
    icon: TrendingDown,
    title: 'Losing to Competitors',
    description: 'That customer who went to your competitor because their website made them look more "established".',
  },
  {
    icon: AlertCircle,
    title: 'Looking Small',
    description: 'You\'re not losing to better businesses. You\'re losing to businesses that LOOK better than you.',
  },
]

export default function PainPointsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Real Problem Nobody Talks About
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            It's not just about "having a website." It's about what NOT having one is costing you.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints?.map((point, index) => {
            const Icon = point?.icon
            return (
              <motion.div
                key={point?.title ?? index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-pink-500"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    {Icon && <Icon className="w-6 h-6 text-purple-700" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{point?.title ?? ''}</h3>
                    <p className="text-gray-600">{point?.description ?? ''}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
