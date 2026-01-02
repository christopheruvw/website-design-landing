'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Clock, Shield, Zap } from 'lucide-react'

export default function FinalCtaSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleCta = () => {
    // Open WhatsApp with pre-filled message
    const message = encodeURIComponent('Hi! I\'m interested in getting a professional website for my business. Please tell me more about the offer.')
    window.open(`https://wa.me/2348000000000?text=${message}`, '_blank')
  }

  return (
    <section id="final-cta" className="py-20 gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Stop Losing Customers.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-500">
              Get Your Website Today.
            </span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            The businesses that win online are not always the best. They're the ones that SHOW UP.
            They're the ones that look professional. Join them today.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="w-5 h-5 text-pink-400" />
              <span>7-14 Days Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Shield className="w-5 h-5 text-pink-400" />
              <span>Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Zap className="w-5 h-5 text-pink-400" />
              <span>Limited Slots Available</span>
            </div>
          </div>
          
          <motion.button
            onClick={handleCta}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary inline-flex items-center gap-2 text-lg mb-6"
          >
            Yes, I Want My Professional Website Now
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <p className="text-white/60 text-sm max-w-xl mx-auto">
            P.S. — Remember, this price won't last. The normal cost is ₦500,000+. 
            Once slots fill up, the price goes back to normal. Don't wait until tomorrow.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
