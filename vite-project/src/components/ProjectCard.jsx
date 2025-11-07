// src/components/ProjectCard.jsx
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
    >
      {/* Image du projet */}
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-all duration-300" />
        {project.featured && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
            🌟 Projet phare
          </div>
        )}
      </div>

      {/* Contenu */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Boutons */}
        <div className="flex gap-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.demoLink}
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold flex-1 justify-center hover:bg-indigo-700 transition-colors"
          >
            <ExternalLink size={18} />
            Démo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.codeLink}
            className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold flex-1 justify-center hover:bg-gray-50 transition-colors"
          >
            <Github size={18} />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;