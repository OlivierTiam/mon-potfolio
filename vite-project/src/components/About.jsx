// src/components/About.jsx
import { motion } from 'framer-motion';
import { Code2, Rocket, Heart, Download } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '0+', label: 'Années d\'expérience' },
    { number: '2+', label: 'Projets réalisés' },
    { number: '4+', label: 'Technologies maîtrisées' },
    { number: '100%', label: 'Satisfaction client' }
  ];

  const passions = [
    {
      icon: <Code2 size={24} />,
      title: "Code Propre",
      description: "J'écris du code maintenable, testé et bien documenté"
    },
    {
      icon: <Rocket size={24} />,
      title: "Performance",
      description: "Optimisation des applications pour une expérience fluide"
    },
    {
      icon: <Heart size={24} />,
      title: "Innovation",
      description: "Toujours à l'affût des nouvelles technologies et tendances"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonne de gauche - Image et Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Image/Avatar */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-xl font-semibold"></p>
                </div>
              </div>
              
              {/* Élément décoratif */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-2xl rotate-12 shadow-lg flex items-center justify-center">
                <Rocket size={32} className="text-gray-900" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-4 rounded-xl text-center border border-gray-200"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Colonne de droite - Contenu */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Enchanté, je suis{" "}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Olivier Tiam
                </span>
              </h2>
              
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Passionné par le développement web depuis petit et actuellement en 2eme annee de genie logiciel, je transforme des idées 
                  en réalité digitale. Mon parcours autodidacte m'a appris à être curieux, 
                  persévérant et toujours en veille des dernières technologies.
                </p>
                
                <p>
                  Je crois en un code <strong>propre, maintenable et testé</strong>. Chaque projet 
                  est pour moi une nouvelle aventure où j'aime repousser mes limites et apprendre 
                  de nouvelles compétences.
                </p>

                <p>
                  Quand je ne code pas, vous me trouverez probablement en train d'explorer de nouveaux 
                  frameworks, de contribuer à des projets open source ou de partager mes connaissances 
                  avec la communauté.
                </p>
              </div>
            </div>

            {/* Passions */}
            <div className="grid grid-cols-1 gap-4 pt-4">
              {passions.map((passion, index) => (
                <motion.div
                  key={passion.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100"
                >
                  <div className="p-2 bg-blue-500 text-white rounded-lg">
                    {passion.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {passion.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {passion.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bouton CV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-6"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/cv.pdf" // Remplace par le lien vers ton CV
                download
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                <Download size={20} />
                Télécharger mon CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;