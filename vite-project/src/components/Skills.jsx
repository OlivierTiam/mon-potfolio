// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { Code, Database, Palette, Smartphone, Cloud, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: "Frontend",
      skills: ["React", "JavaScript",  "HTML/CSS", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database size={32} />,
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Sequelize"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile",
      skills: [  "Flutterflow"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Cloud size={32} />,
      title: "DevOps ",
      skills: ["Git" ,"GitHub", "Vercel", ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const SkillBar = ({ skill, level, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 font-medium">{skill}</span>
        <span className="text-gray-500 text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mes <span className="text-cyan-600">Compétences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un aperçu des technologies et outils que j'utilise pour donner vie à vos projets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Catégories de compétences */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Barres de progression */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Niveau de maîtrise</h3>
            <SkillBar skill="React " level={50} index={0} />
            <SkillBar skill="JavaScript" level={60} index={1} />
            <SkillBar skill="Node.js & Express" level={50} index={2} />
            <SkillBar skill="Tailwind CSS" level={65} index={3} />
            <SkillBar skill="MongoDB & PostgreSQL" level={65} index={4} />
            <SkillBar skill="Git & Vercel" level={40} index={5} />
            <SkillBar skill="HTML/CSS" level={70} index={5} />
            <SkillBar skill="FlutterFlow" level={40} index={5} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;