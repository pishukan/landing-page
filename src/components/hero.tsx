'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { people } from "@/data/tooltip";
import { Star } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
  onOpenProductDialog?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage = "/hero-bg.jpg",
  onOpenProductDialog
}) => {


  const handleButtonClick = () => {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      
      setTimeout(() => {
        if (onOpenProductDialog) {
          onOpenProductDialog();
        }
      }, 800);
    }
  };


  return (
    <section className="relative flex items-center justify-center h-screen text-white font-opensans">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-transparent" />


      <div className="relative text-center px-6 max-w-2xl">

        <motion.div
          className="flex flex-row items-center justify-center w-full mb-5 mt-[-80px]"
          initial={{ opacity: 0, y: 20 }} // Start 20px lower and invisible
          animate={{ opacity: 1, y: 0 }} // Fade in and move up
          transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
        >
          {/* <div className="flex">
            <AnimatedTooltip items={people} />
          </div> */}
          {/* <div className="mx-3" /> */}
          <div className="flex flex-col items-center text-yellow-600">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" stroke="none" className="mx-0.5 shadow-2xl" />
              ))}
            </div>
            <p className="text-sm text-white font-openSans">Trusted Worldwide</p>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-2 font-bodoni italic"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl w-4/5 mx-auto font-thin"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {subtitle}
        </motion.p>

        <motion.button
          onClick={handleButtonClick}
          className="mt-7 py-3 inline-flex h-12 shimmer-bg items-center justify-center rounded-md border border-slate-800 px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {buttonText}
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;