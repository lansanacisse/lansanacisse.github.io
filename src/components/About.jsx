import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Code, Database, BarChart3, GitBranch, MessageSquare } from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'Machine Learning & Deep Learning', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { name: 'Python, R', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'Analyse de données', icon: Database, color: 'from-green-500 to-emerald-500' },
    { name: 'Visualisation', icon: BarChart3, color: 'from-orange-500 to-red-500' },
    { name: 'Git & GitHub', icon: GitBranch, color: 'from-gray-500 to-slate-500' },
    { name: 'Communication scientifique', icon: MessageSquare, color: 'from-indigo-500 to-purple-500' },
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            À propos de moi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Data Scientist à l'Université Lumière Lyon 2, je suis passionné par l'analyse de données 
            et l'innovation technologique. Mon expertise se concentre sur l'application du Machine Learning 
            pour résoudre des problèmes complexes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mon parcours</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Basé en France, je travaille comme Data Scientist à l'Université Lumière Lyon 2, 
                  où je contribue à des projets de recherche innovants en analyse de données et 
                  intelligence artificielle.
                </p>
                <p>
                  Mes projets sur GitHub témoignent de ma passion pour la diversité technologique : 
                  de la création d'assistants intelligents préservant le patrimoine culinaire africain 
                  aux systèmes de prédiction énergétique, en passant par des outils d'analyse de sentiments 
                  et des packages R pour la régression logistique.
                </p>
                <p>
                  Je partage régulièrement mes connaissances et réflexions sur mon 
                  <a href="https://medium.com/@lansana.cisse" target="_blank" rel="noopener noreferrer" 
                     className="text-primary-600 hover:text-primary-700 font-medium">
                    blog Medium
                  </a>, où j'explore les dernières tendances en Data Science et IA.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Compétences</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md card-hover"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4`}>
                    <skill.icon className="text-white" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '17+', label: 'Projets GitHub' },
            { number: '3+', label: 'Années d\'expérience' },
            { number: '5+', label: 'Technologies maîtrisées' },
            { number: '2+', label: 'Publications' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About