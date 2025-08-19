import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, GitFork, Calendar } from 'lucide-react'

const Projects = () => {
  const [repositories, setRepositories] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  // Featured repositories that we want to highlight
  const featuredRepos = [
    'Nnakouri',
    'iris-predictor-mlops',
    'us-airlines-tweet-sentiment-streamlit',
    'security_m2sise',
    'pattern_recognition',
    'm2_enedis',
    'Nkaran',
    'mnlmixte'
  ]

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/lansanacisse/repos?sort=updated&per_page=20')
        const data = await response.json()
        
        // Filter out forks and sort by featured status
        const filteredRepos = data
          .filter(repo => !repo.fork)
          .sort((a, b) => {
            const aIsFeatured = featuredRepos.includes(a.name)
            const bIsFeatured = featuredRepos.includes(b.name)
            if (aIsFeatured && !bIsFeatured) return -1
            if (!aIsFeatured && bIsFeatured) return 1
            return new Date(b.updated_at) - new Date(a.updated_at)
          })

        setRepositories(filteredRepos)
      } catch (error) {
        console.error('Error fetching repositories:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepositories()
  }, [])

  const getLanguageColor = (language) => {
    const colors = {
      Python: 'bg-blue-500',
      JavaScript: 'bg-yellow-500',
      'Jupyter Notebook': 'bg-orange-500',
      R: 'bg-blue-700',
      TypeScript: 'bg-blue-600',
      HTML: 'bg-red-500',
      CSS: 'bg-purple-500',
    }
    return colors[language] || 'bg-gray-500'
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short'
    })
  }

  const filteredRepositories = repositories.filter(repo => {
    if (filter === 'all') return true
    if (filter === 'featured') return featuredRepos.includes(repo.name)
    return repo.language?.toLowerCase() === filter.toLowerCase()
  })

  const uniqueLanguages = [...new Set(repositories.map(repo => repo.language).filter(Boolean))]

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez mes projets phares en Data Science, Machine Learning et développement d'applications
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              filter === 'all'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Tous
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              filter === 'featured'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Projets phares
          </button>
          {uniqueLanguages.slice(0, 4).map((language) => (
            <button
              key={language}
              onClick={() => setFilter(language)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === language
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {language}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRepositories.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-6 card-hover"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                      {repo.name}
                    </h3>
                    {featuredRepos.includes(repo.name) && (
                      <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                        Projet phare
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {repo.description || 'Aucune description disponible'}
                </p>

                {/* Language and Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    {repo.language && (
                      <div className="flex items-center space-x-1">
                        <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
                        <span className="text-xs text-gray-600">{repo.language}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-1">
                      <Star size={12} className="text-gray-400" />
                      <span className="text-xs text-gray-600">{repo.stargazers_count}</span>
                    </div>
                    {repo.forks_count > 0 && (
                      <div className="flex items-center space-x-1">
                        <GitFork size={12} className="text-gray-400" />
                        <span className="text-xs text-gray-600">{repo.forks_count}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={12} className="text-gray-400" />
                    <span className="text-xs text-gray-600">{formatDate(repo.updated_at)}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-3">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* View More */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/lansanacisse?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
          >
            <Github size={20} />
            <span>Voir tous mes projets</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects