"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="text-white/70 pt-3 h-[80px] flex justify-center fixed w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[500px]">
        <ul className="flex flex-row space-x-8 p-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>
                <p className="hover:text-[#E48A57] transition-colors duration-300">
                  {link.title}
                </p>
              </Link>
            </li>
          ))}
          <li>
            <a href="#contact" className="group">
              <h1>Contact Me</h1>
              <div className="relative">
                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                <div className="mt-1 absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-600 rounded-full group-hover:w-full"></div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div
        onClick={toggleNav}
        className="md:hidden absolute top-5 right-5 border rounded text-white/70 border-white/70 p-2"
      >
        {nav ? <X size={30} /> : <Menu size={30} />}
      </div>
      <motion.div
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={menuVariants}
        className="fixed top-0 left-0 w-full z-40 bg-black/90"
      >
        <ul className="text-4xl font-semibold my-24 text-center space-y-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} onClick={closeNav}>
                <p>{link.title}</p>
              </Link>
            </li>
          ))}
          <li>
            <Link href="#contact" onClick={closeNav}>
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
