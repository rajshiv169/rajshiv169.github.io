'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "Parturnner",
      category: "E-Logistics & Supply Chain Management", 
      tech: ["NX", "Angular",  "Material", "Bootstrap", "NodeJS", "AWS", "Laravel", "Firestore", "SQL"],
      description: "A platform that streamlines supply chains for businesses via a web dashboard and helps drivers find and manage daily delivery jobs through a mobile app with live routing.",
      responsibilities: [
        "Led bug fixing, enhancements, and unit testing initiatives",
        "Updated all libraries to latest versions for improved security",
        "Implemented tracking system for containers and employees"
      ]
    },
    {
      title: "Quickhands Logistics",
      category: "E-Logistics & Supply Chain Management", 
      tech: ["NestJS", "Angular", "Angular Material", "PostgreSQL", "AWS S3"],
      description: "A comprehensive logistics supply chain platform that tracks container movements between buildings and monitors employee status.",
      responsibilities: [
        "Led bug fixing, enhancements, and unit testing initiatives",
        "Updated all libraries to latest versions for improved security",
        "Implemented tracking system for containers and employees"
      ]
    },
    {
      title: "Buildboard",
      category: "Home Remodeling Service & Management",
      tech: ["Node.js", "AWS S3", "Angular", "Angular Bootstrap", "Stripe"],
      description: "Platform connecting homeowners with contractors for home remodeling, featuring quote comparison and payment tracking.",
      responsibilities: [
        "Implemented new features and revamped existing functionality",
        "Made web application fully responsive across all devices",
        "Provided ongoing support for live application"
      ]
    },
    {
      title: "Expert Opinion",
      category: "Healthcare Consultation SAAS",
      tech: ["Node.js", "React", "DynamoDB", "NestJS", "Svelte", "TypeORM", "AWS"],
      description: "SAAS platform managing consultations between doctors and customers with enhanced communication channels.",
      responsibilities: [
        "Designed and developed features that significantly impacted client business",
        "Led feature discussions focusing on user impact analysis",
        "Provided comprehensive live application support"
      ]
    },
    {
      title: "&frnds",
      category: "SAAS for eB2B Distribution",
      tech: ["NgRx", "Angular", "Bootstrap Angular", "Power BI", "Ionic", "Java"],
      description: "B2B distribution platform helping users manage sales, inventory, and logistics with business insights.",
      responsibilities: [
        "Developed features impacting both web and mobile applications",
        "Collaborated on feature planning and user impact assessment",
        "Enhanced sales and revenue management capabilities"
      ]
    },
    {
      title: "DeepCell",
      category: "Biotech Data Visualization Platform",
      tech: ["React.js", "React Query", "AG-Grid", "JavaScript", "C#", ".NET"],
      description: "SAAS application for human cell visualization and processing, designed for cancer research biologists.",
      responsibilities: [
        "Led mapping and processing of complex cell data",
        "Created intuitive frontend features for data visualization",
        "Developed tools for comparing and selecting cellular data"
      ]
    },
    {
      title: "Quick Learn",
      category: "Corporate Learning Platform",
      tech: ["NX", "Next.js", "NestJS", "Tailwind CSS", "AWS", "PostgreSQL"],
      description: "Platform helping companies track employee learning activities with daily lesson email notifications.",
      responsibilities: [
        "Designed features to enhance user learning growth",
        "Managed development teams for timely delivery",
        "Ensured system integrity while scaling features"
      ]
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of impactful projects spanning logistics, healthcare, e-commerce, 
            and enterprise solutions that demonstrate my full-stack expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-3 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Key Contributions:
                  </h4>
                  <ul className="space-y-1">
                    {project.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white text-gray-700 text-xs font-medium rounded border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 