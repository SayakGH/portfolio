"use client";
import { motion } from "framer-motion";
import { Database, Cloud, Globe, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Globe className="w-8 h-8" />,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "React Native", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: <Database className="w-8 h-8" />,
    skills: [
      { name: "FastAPI", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    title: "DevOps",
    icon: <Cloud className="w-8 h-8" />,
    skills: [
      { name: "Docker", level: 80 },
      { name: "Microservices", level: 75 },
    ],
  },
  {
    title: "Web3",
    icon: <Cpu className="w-8 h-8" />,
    skills: [
      { name: "Blockchain", level: 70 },
      { name: "Smart Contracts", level: 65 },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-[#171717] relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#98B4C9]/20 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#98B4C9] mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-[#E48A57] mx-auto"></div>
          <p className="text-white/80 text-xl mt-6 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#2B1942]/50 backdrop-blur-sm p-6 rounded-lg border border-[#98B4C9]/20 hover:border-[#E48A57]/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#E48A57]/20 rounded-lg text-[#E48A57] mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-[#E48A57] font-bold text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-[#E48A57] to-[#98B4C9] h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
