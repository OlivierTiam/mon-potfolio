// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Star, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Développeur web", "Créatif Passionné"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const floatingElements = [
    { icon: "⚡", top: "20%", left: "10%", delay: 0 },
    { icon: "🚀", top: "60%", left: "85%", delay: 0.5 },
    { icon: "💻", top: "30%", left: "90%", delay: 1 },
    { icon: "🎯", top: "80%", left: "15%", delay: 1.5 },
    { icon: "✨", top: "40%", left: "5%", delay: 2 },
    { icon: "🔥", top: "70%", left: "95%", delay: 2.5 }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      
      {/* Background animé avec particules */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ 
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{ 
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Éléments flottants animés */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl"
          style={{
            top: element.top,
            left: element.left,
          }}
          initial={{ opacity: 0, scale: 0, y: 0 }}
          animate={{ 
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
            y: [-10, 10, -10]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: element.delay
          }}
        >
          {element.icon}
        </motion.div>
      ))}

      {/* Grid animé en arrière-plan */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center">
          
          {/* Badge "Disponible" */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 px-4 py-2 rounded-full mb-8"
          >
            <Sparkles size={16} />
            <span className="text-sm font-medium">Disponible pour de nouveaux projets</span>
          </motion.div>

          {/* Titre principal avec effet machine à écrire */}
          <div className="mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
            >
              Salut, je suis{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Olivier Tiam
              </span>
            </motion.h1>
          </div>

          {/* Texte animé qui change */}
          <motion.div
            key={textIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h-12 mb-6"
          >
            <span className="text-2xl md:text-3xl text-cyan-300 font-semibold">
              {texts[textIndex]}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Je crée des <span className="text-cyan-300 font-semibold">expériences digitales exceptionnelles</span> 
            {" "}en combinant design moderne et code robuste. 
            Spécialiste React & Node.js avec une passion pour l'innovation.
          </motion.p>

          {/* Boutons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Code size={20} />
                Explorer mes projets
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.a
              whileHover={{ 
                scale: 1.05,
                borderColor: "#22d3ee"
              }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 hover:border-cyan-400 transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={20} />
              Discutons projet
            </motion.a>
          </motion.div>

          {/* Stats rapides */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12"
          >
            {[
              { number: "+0", label: "Ans d'exp" },
              { number: "+2", label: "Projets" },
              { number: "100%", label: "Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center gap-6"
          >
            {[
              { icon: <Github size={24} />, url: "https://github.com/OlivierTiam", color: "hover:text-cyan-400" },
              { icon: <Linkedin size={24} />, url: "https://www.linkedin.com/in/olivier-tiam-9598b121a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", color: "hover:text-blue-400" },
              { icon: <Mail size={24} />, url: "oltiam36@gmail.com", color: "hover:text-green-400" }
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.3, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href={social.url}
                className={`text-gray-400 ${social.color} transition-colors duration-300 bg-gray-800/50 p-3 rounded-full backdrop-blur-sm`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator amélioré */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-cyan-400 hover:text-cyan-300 cursor-pointer flex flex-col items-center"
          onClick={scrollToProjects}
        >
          <span className="text-sm mb-2">Découvrir</span>
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;