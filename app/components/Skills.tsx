'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "C#"]
    },
    {
      title: "Frontend Frameworks",
      skills: ["Angular", "React", "Vue", "NextJS", "Ionic"]
    },
    {
      title: "Backend Frameworks", 
      skills: ["Node.js", "NestJS", "Express.js", "ASP.NET"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "SQL Server", "Firestore"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS S3", "Digital Ocean", "Vercel", "Railway", "Docker"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Postman", "Jira", "Swagger", "TypeORM", "NgRx", "NX"]
    }
  ]

  const softSkills = [
    "Teamwork", "Leadership", "Time Management", "Stress Management", 
    "Work Ethics", "Problem Solving", "Communication", "Adaptability"
  ]

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional software solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-lg border border-primary/10"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + (index * 0.05) }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white text-gray-700 font-medium rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 