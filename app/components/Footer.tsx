'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Logo/Name */}
          <div>
            <h3 className="text-3xl font-bold gradient-text mb-4">
              Shiv Raj Bhagat
            </h3>
            <p className="text-gray-300 max-w-md mx-auto">
              Full Stack Software Engineer passionate about creating 
              exceptional digital experiences and scalable solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/rajshiv169"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors duration-200"
            >
              <Github size={24} />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/rajshiv169/"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors duration-200"
            >
              <Linkedin size={24} />
            </motion.a>
            
            <motion.a
              href="mailto:shivraj.api@gmail.com"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors duration-200"
            >
              <Mail size={24} />
            </motion.a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <a href="#about" className="hover:text-primary transition-colors duration-200">
              About
            </a>
            <a href="#skills" className="hover:text-primary transition-colors duration-200">
              Skills
            </a>
            <a href="#experience" className="hover:text-primary transition-colors duration-200">
              Experience
            </a>
            <a href="#projects" className="hover:text-primary transition-colors duration-200">
              Projects
            </a>
            <a href="#education" className="hover:text-primary transition-colors duration-200">
              Education
            </a>
            <a href="#contact" className="hover:text-primary transition-colors duration-200">
              Contact
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/20"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-400 text-sm">
            <p>
              © {currentYear} Shiv Raj Bhagat. All rights reserved.
            </p>
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} fill="currentColor" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center w-12 h-12 bg-primary hover:bg-secondary rounded-full transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
} 