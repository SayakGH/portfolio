"use client";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-[#98B4C9]">Sayak Ghosh</h3>
            <p className="text-white/60 mt-2">
              Full-Stack Developer & Web3 Enthusiast
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/SayakGH"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#2B1942] rounded-full hover:bg-[#E48A57] transition-colors duration-300"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/sayakghosh24"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#2B1942] rounded-full hover:bg-[#E48A57] transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://x.com/Sayak_Ghosh_?t=Wk2twvDmunMyY4AYvK4LyA&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#2B1942] rounded-full hover:bg-[#E48A57] transition-colors duration-300"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a
              href="sayakghosh2004sg@gmail.com"
              className="p-3 bg-[#2B1942] rounded-full hover:bg-[#E48A57] transition-colors duration-300"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} Sayak Ghosh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
