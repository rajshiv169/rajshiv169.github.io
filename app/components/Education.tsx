'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="section-padding bg-light">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Bachelor of Technology
                </h3>
                <p className="text-lg text-primary font-semibold">
                  Computer Engineering
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-700 font-medium">
                University School of Information, Communication & Technology
              </p>
              <p className="text-gray-600">
                Guru Gobind Singh Indraprastha University (IPU)
              </p>
              <p className="text-gray-500">
                Comprehensive curriculum covering software engineering principles, 
                data structures, algorithms, and modern development practices.
              </p>
            </div>
          </motion.div>

          {/* Certification */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Award className="text-accent" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Google Cloud Certification
                </h3>
                <p className="text-lg text-accent font-semibold">
                  Core Infrastructure Fundamentals
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-700 font-medium">
                Google Cloud Platform
              </p>
              <p className="text-gray-600">
                Comprehensive understanding of cloud computing concepts, 
                infrastructure services, and deployment strategies.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                  Cloud Architecture
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                  Infrastructure Management
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                  Deployment Strategies
                </span>
              </div>
            </div>
          </motion.div>

          {/* Learning Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-lg border border-primary/10"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              Commitment to Continuous Learning
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              I believe in staying current with rapidly evolving technology landscapes. 
              My approach to continuous learning includes exploring emerging frameworks, 
              attending tech conferences, contributing to open-source projects, and 
              maintaining hands-on experience with the latest development tools and practices.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 