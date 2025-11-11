import heroImage from "../assets/pexels-myersmc16-919335.jpg";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

const HeroSection: React.FC = () => {
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    setViewportHeight(window.innerHeight);
  }, []);

  const onClick = () => {
    const howToUse = document.getElementById("how-to-use");
    howToUse?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative flex items-center"
      style={{ height: viewportHeight || "100vh" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Uma imagem genérica da praça Sérgio Pacheco"
      >
        <div className="absolute inset-0 bg-black opacity-70" />
      </div>

      <div className="absolute inset-0 z-10 container mx-auto flex h-full flex-col items-start justify-between px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              type: "spring",
              delay: 0.1,
              bounce: 0,
            }}
            className="font-serif text-3xl leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Praça Sérgio Pacheco
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.16,
              type: "spring",
              bounce: 0,
            }}
            className="max-w-lg text-sm leading-relaxed text-white sm:text-base md:text-lg"
          >
            Descubra a natureza, lazer e as histórias que marcam e moldam nossa
            cidade
          </motion.p>
        </div>
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.44, type: "spring", bounce: 0 }}
          onClick={onClick}
          className="bg-primary hover:bg-primary-hover mb-12 flex cursor-pointer touch-manipulation items-center gap-2 rounded-full px-6 py-3 text-center text-sm text-white transition-colors duration-300 sm:mb-16 sm:px-8 sm:text-base lg:mb-20"
          aria-label="Rolar para seção 'Como usar este site?'"
        >
          <span className="font-semibold">Entenda melhor este site</span>
          <ArrowDown className="flex h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
