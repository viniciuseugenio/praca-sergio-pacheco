import heroImage from "../assets/pexels-myersmc16-919335.jpg";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

const HeroSection: React.FC = () => {
  const onClick = () => {
    const howToUse = document.getElementById("how-to-use");
    howToUse?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();

    const onOrientationChange = () => setVh();
    window.addEventListener("orientationchange", onOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", onOrientationChange);
    };
  }, []);

  return (
    <section
      className="w-full relative flex items-center"
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 opacity-70 bg-black" />
      </div>

      <div className="container mx-auto absolute flex flex-col z-10 min-h-screen px-4 sm:px-6 lg:px-8 items-start justify-between inset-0 pt-16 sm:pt-20 lg:pt-24">
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
            className="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight"
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
            className="text-white text-sm sm:text-base md:text-lg max-w-lg leading-relaxed"
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
          className="flex gap-2 text-center items-center transition-colors cursor-pointer mb-12 sm:mb-16 lg:mb-20 bg-primary hover:bg-primary-hover duration-300 text-white rounded-full px-6 sm:px-8 py-3 text-sm sm:text-base touch-manipulation"
        >
          <span className="font-semibold">Entenda melhor este site</span>
          <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 flex shrink-0" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
