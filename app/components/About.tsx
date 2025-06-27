'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Server, Shield } from 'lucide-react'

export default function About() {
  const competencies = [
    {
      icon: <Code2 className="text-primary" size={24} />,
      title: "Frontend Development",
      description: "Proficient in Angular, React, Vue, SASS/SCSS, JavaScript, TypeScript, and Ionic for native app development."
    },
    {
      icon: <Server className="text-primary" size={24} />,
      title: "Backend Development", 
      description: "Hands-on experience designing, developing, and maintaining RESTful APIs in NestJS/NodeJS and C#/.NET frameworks."
    },
    {
      icon: <Database className="text-primary" size={24} />,
      title: "Database Management",
      description: "Experienced in SQL and NoSQL databases, including MongoDB, PostgreSQL, and SQL Server for efficient data management."
    },
    {
      icon: <Shield className="text-primary" size={24} />,
      title: "Security & Performance",
      description: "Implemented security measures including OAuth, JWT authentication, and optimized API performance through caching strategies."
    }
  ]

  return (
    <section id="about" className="section-padding bg-light">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              Full Stack Software Engineer at Crownstack Technologies
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Experienced Full Stack Developer with almost 4 years of front-end and back-end development expertise.
              I specialize in creating scalable, high-performance applications with a strong focus on both user experience 
              and system architecture.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My commitment to continuous learning keeps me updated on industry trends and emerging technologies. 
              I excel in Agile development environments and have experience collaborating with cross-functional teams 
              to deliver exceptional software solutions.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div>
                <span className="text-3xl font-bold text-primary">4+</span>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <span className="text-3xl font-bold text-primary">10+</span>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {competencies.map((competency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
                    {competency.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {competency.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {competency.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 