'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light via-white to-blue-50 pt-20">
      <div className="container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
            Hi, I'm{' '}
            <span className="gradient-text">
              Shiv Raj Bhagat
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 font-light">
            Full Stack Software Engineer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experienced Full Stack Developer with almost 4 years of front-end and back-end development expertise.
            Passionate about creating scalable, high-performance applications that deliver exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a href="#contact" className="btn-primary flex items-center gap-2">
              <Mail size={20} />
              Get In Touch
            </a>
            <a href="#about" className="btn-outline flex items-center gap-2">
              <Download size={20} />
              View Resume
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="text-gray-500 hover:text-primary transition-colors">
            <ArrowDown size={24} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
} 