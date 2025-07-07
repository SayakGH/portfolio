"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award } from "lucide-react";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "DocsTribe AI",
    location: "Onsite",
    period: "June 2025 - Present",
    type: "work",
    description: [
      "Built responsive, modular UIs with React, Next.js, and React Native for smooth web and mobile experience",
      "Squashed frontend bugs and polished cross-browser/API integrations, cutting down inconsistencies",
      "Crafted scalable REST APIs in FastAPI and Flask to power document processing and dynamic workflows",
      "Dockerized full-stack environments with Docker Compose to standardize setups and speed up team onboarding",
    ],
  },
  {
    title: "Code For Change Hackathon",
    company: "4th Place Winner",
    location: "Remote",
    period: "March 2025",
    type: "hackathon",
    description: [
      "Designed and built a decentralized crowdfunding platform enabling transparent funding using blockchain",
      "Integrated smart contracts for secure and trustless transactions between donors and fundraisers",
      "Showcased innovation and practical use of Web3 technologies under time constraints",
    ],
  },
  {
    title: "HackForBengal Season 3",
    company: "Blockchain Solution",
    location: "Remote",
    period: "July 2024",
    type: "hackathon",
    description: [
      "Implemented a decentralized solution for online certification and validation",
      "Leveraged blockchain and web3 technologies for enhanced security",
      "Reduced certification frauds by 30%, leading to an enhanced trust score",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-20 bg-[linear-gradient(to_bottom,#2B1942,#171717_50%,#2B1942)]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#98B4C9] mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-[#E48A57] mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#E48A57] to-[#98B4C9]"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#E48A57] rounded-full border-4 border-[#171717] z-10"></div>

              {/* Content card */}
              <div
                className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-[#2B1942]/80 backdrop-blur-sm p-6 rounded-lg border border-[#98B4C9]/20 hover:border-[#E48A57]/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    {exp.type === "hackathon" ? (
                      <Award className="w-5 h-5 text-[#E48A57] mr-2" />
                    ) : (
                      <Calendar className="w-5 h-5 text-[#98B4C9] mr-2" />
                    )}
                    <span className="text-[#98B4C9] text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#E48A57] mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-white/80 mb-4">
                    <span className="font-semibold">{exp.company}</span>
                    <MapPin className="w-4 h-4 ml-2 mr-1" />
                    <span className="text-sm">{exp.location}</span>
                  </div>

                  <ul className="text-white/70 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-[#98B4C9] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
