"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import profile from "../assets/profile.png";

const AnimatedCounter = ({
  end,
  duration = 2000,
}: {
  end: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#171717] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#98B4C9] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-[#E48A57] rounded-full"></div>
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#E48A57] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#E48A57]/20 to-[#98B4C9]/20 rounded-lg blur-lg"></div>
            <Image
              src={profile}
              alt="About me"
              height={500}
              width={500}
              className="relative rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white/80"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#E48A57] mb-6">
              Computer Science Student & Full-Stack Developer
            </h3>
            <p className="text-lg mb-6 leading-relaxed">
              Currently pursuing BTech in Computer Science Engineering at
              Heritage Institute of Technology (2022-2026). As a Software
              Developer Intern at DocsTribe AI, I specialize in building
              responsive, modular UIs with React, Next.js, and React Native.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              I am passionate about Web3 technologies and have achieved
              recognition in hackathons, including 4th place at Code For Change
              for building a decentralized crowdfunding platform using
              blockchain technology.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div
                className="bg-[#2B1942] p-4 rounded-lg text-center hover:bg-[#2B1942]/80 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-[#98B4C9] font-semibold">Projects</h4>
                <p className="text-2xl font-bold text-[#E48A57]">
                  <AnimatedCounter end={15} />+
                </p>
              </motion.div>
              <motion.div
                className="bg-[#2B1942] p-4 rounded-lg text-center hover:bg-[#2B1942]/80 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-[#98B4C9] font-semibold">Hackathons</h4>
                <p className="text-2xl font-bold text-[#E48A57]">
                  <AnimatedCounter end={5} />+
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
