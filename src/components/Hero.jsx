import React from 'react'
import { motion } from 'framer-motion'
import { Download, MapPin, Building, Calendar } from 'lucide-react'

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto section-padding py-20">
        <motion.div 
          className="text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Hero Image */}
          <motion.div 
            className="mb-8"
            variants={fadeInUp}
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-600 to-primary-400 flex items-center justify-center text-white text-3xl font-bold shadow-xl">
              LC
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            variants={fadeInUp}
          >
            Lansana <span className="gradient-text">CISSE</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Data Scientist passionné par l'analyse de données, le Machine Learning et l'innovation
          </motion.p>

          {/* Info Pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            variants={fadeInUp}
          >
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <MapPin size={16} className="text-primary-600" />
              <span className="text-gray-700 text-sm">France</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Building size={16} className="text-primary-600" />
              <span className="text-gray-700 text-sm">Université Lumière Lyon 2</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Calendar size={16} className="text-primary-600" />
              <span className="text-gray-700 text-sm">GitHub depuis 2022</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            <a
              href="#projects"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Voir mes projets</span>
            </a>
            <a
              href="#contact"
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>Me contacter</span>
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="mt-16"
            variants={fadeInUp}
          >
            <div className="animate-bounce">
              <div className="w-1 h-16 bg-gradient-to-b from-primary-400 to-transparent mx-auto rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero