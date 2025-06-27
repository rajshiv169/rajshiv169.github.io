'use client'

import { motion } from 'framer-motion'
import { Building2, Calendar } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-light">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Building2 className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Associate Team Lead
                  </h3>
                  <p className="text-lg text-primary font-semibold">
                    Crownstack Technologies
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar size={18} />
                <span>2021 - Present</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">
                Key Responsibilities & Achievements:
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Led development teams to deliver multiple full-stack projects using modern technologies including Angular, React, Node.js, and NestJS</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Designed and developed scalable RESTful APIs with comprehensive documentation using Swagger/OpenAPI standards</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Implemented security measures including OAuth and JWT authentication across multiple applications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Optimized application performance through efficient query design, caching strategies, and best practices</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Conducted code reviews and mentored junior developers to maintain code quality and foster knowledge sharing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Successfully deployed and managed applications across various cloud platforms including AWS, Digital Ocean, and Vercel</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collaborated effectively with cross-functional teams using Agile methodologies (Scrum/Kanban)</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Professional Growth
              </h4>
              <p className="text-gray-600">
                Throughout my tenure, I've demonstrated exceptional adaptability to evolving project requirements 
                and dynamic development environments. My commitment to continuous learning has enabled me to stay 
                current with industry trends and implement cutting-edge solutions that drive business success.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 