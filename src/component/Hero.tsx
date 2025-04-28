"use client";
import React from "react";
import { motion } from "framer-motion";
import cursor from "../assets/icon1.png";
import Image from "next/image";
import lightning from "../assets/icon2.png";
import profilepic from "../assets/profilepic.png";

const Hero = () => {
  return (
    <div className="py-32 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#171717_80%)]">
      <div
        className="absolute rounded-[50%] w-[3000px] h-[1300px]  top-[600px] left-[50%] -translate-x-1/2
                     bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"
      ></div>

      <div className="relative">
        <div className="text-8xl font-bold text-center">
          <h1 className=" text-[#98B4C9]">Hi, I am</h1>
          <h1 className="text-[#E48A57]">Sayak Ghosh</h1>
        </div>
        <div className="hidden 2xl:flex">
          <motion.div
            className="absolute left-[280px] top-[170px]"
            drag
            dragConstraints={{
              top: -400,
              left: -400,
              right: 400,
              bottom: 400,
            }}
          >
            <Image
              src={cursor}
              height={250}
              width={250}
              alt="cursor"
              draggable="false"
            />
          </motion.div>

          <motion.div
            className="absolute right-[250px] top-[70px]"
            drag
            dragConstraints={{
              top: -400,
              left: -400,
              right: 400,
              bottom: 400,
            }}
          >
            <Image
              src={lightning}
              height={170}
              width={170}
              alt="lightning"
              draggable="false"
            />
          </motion.div>
        </div>

        <p className="text-center text-xl max-w-5xl mx-auto mt-8 text-white/80 px-4">
          I am a software developer focused on creating impactful and meaningful
          <br className="hidden md:block" />
          software to change the world.
        </p>

        <Image
          src={profilepic}
          alt="profilepic"
          className="h-autp w-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
