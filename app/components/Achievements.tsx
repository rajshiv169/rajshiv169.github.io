'use client'

import { motion } from 'framer-motion'
import { Trophy, Star, Users, Award } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    {
      icon: <Star className="text-yellow-500" size={32} />,
      title: "Rockstar Rookie Award",
      description: "Recognized for exceptional performance that consistently exceeded goals and work expectations in Q1 of 2021.",
      category: "Performance Excellence",
      year: "2021"
    },
    {
      icon: <Users className="text-blue-500" size={32} />,
      title: "Squad Winning Team Award", 
      description: "Team recognition for exceptional performance and timely product delivery that exceeded client expectations.",
      category: "Team Achievement",
      year: "2022"
    },
    {
      icon: <Award className="text-purple-500" size={32} />,
      title: "Employee Spotlight Award",
      description: "Individual recognition for exceptional performance that exceeded work expectations and contributed significantly to project success.",
      category: "Individual Excellence", 
      year: "2023"
    }
  ]

  return (
    <section id="achievements" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Achievements & Awards
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition for exceptional performance, leadership, and contributions 
            to team success throughout my professional journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-primary/20 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white rounded-full shadow-sm border border-gray-100">
                  {achievement.icon}
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {achievement.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {achievement.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-center space-x-2 pt-4">
                  <Trophy className="text-accent" size={16} />
                  <span className="text-accent font-semibold text-sm">
                    {achievement.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 p-8 rounded-lg border border-primary/10"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Professional Impact
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These recognitions reflect my dedication to excellence, collaborative spirit, 
              and commitment to delivering high-quality solutions that drive business success. 
              Each award represents not just individual achievement, but the collective success 
              of the teams and projects I've been privileged to be part of.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-2">4+</div>
              <p className="text-gray-600 text-sm">Years of Excellence</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <p className="text-gray-600 text-sm">Successful Projects</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <p className="text-gray-600 text-sm">Awards Received</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 