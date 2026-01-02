'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Adaeze Okonkwo',
    business: 'Adaeze Hair Studio, Lagos',
    quote: 'Before my website, customers would ask "do you have a website?" and I\'d feel embarrassed saying no. Now I proudly share my link and bookings have increased by 40%!',
  },
  {
    name: 'Emeka Nwachukwu',
    business: 'EnTech Solutions, Abuja',
    quote: 'I was skeptical at first because of the price, but the website they delivered looks like something that should cost ₦500k. Best investment I\'ve made for my business.',
  },
  {
    name: 'Funke Adeleke',
    business: 'Funke\'s Catering, Port Harcourt',
    quote: 'My competitors all had websites and I was losing contracts to them. Within 2 weeks of getting my website, I landed a corporate contract that paid for the website 10 times over.',
  },
]

export default function TestimonialsSection() {
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
            What Business Owners Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of Nigerian entrepreneurs who've transformed their online presence.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials?.map((testimonial, index) => (
            <motion.div
              key={testimonial?.name ?? index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <Quote className="w-10 h-10 text-purple-200 mb-4" />
              <p className="text-gray-700 mb-6 italic">"{testimonial?.quote ?? ''}"</p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)]?.map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="font-semibold text-gray-900">{testimonial?.name ?? ''}</p>
              <p className="text-sm text-gray-500">{testimonial?.business ?? ''}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
