'use client'

import { motion } from 'framer-motion'
import { Globe, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const scrollToContact = () => {
    const el = document.getElementById('final-cta')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="gradient-hero min-h-screen flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-pink-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Globe className="w-5 h-5 text-pink-400" />
            <span className="text-white/90 text-sm font-medium">Limited Time Offer</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            You're Losing Customers Right Now<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
              Because You Don't Have a Website
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
            In 2025, if your business doesn't have a website, you don't look like a real business.
            You look like someone selling from their bedroom.
          </p>
          
          <p className="text-lg text-pink-300 font-semibold mb-10">
            Get a complete, professional website for less than ₦120,000
          </p>
          
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary inline-flex items-center gap-2 text-lg"
          >
            Get My Professional Website Now
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <p className="text-white/60 mt-6 text-sm">
            Normal price: ₦500,000+ • Today: Less than ₦120,000
          </p>
        </motion.div>
      </div>
    </section>
  )
}
