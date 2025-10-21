import HeroImage from "../assets/pexels-myersmc16-919335.jpg";
import { ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const onClick = () => {
    const howToUse = document.getElementById("how-to-use");
    howToUse?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[100svh] relative flex items-center">
      <div className="h-full w-full overflow-hidden absolute inset-0">
        <img
          src={HeroImage}
          alt="Uma imagem da Praça Sérgio Pacheco"
          className="h-full w-full object-cover brightness-50"
        />
      </div>

      <div className="container mx-auto absolute flex flex-col z-10 min-h-screen px-4 sm:px-6 lg:px-8 items-start justify-between inset-0 pt-16 sm:pt-20 lg:pt-24">
        <div>
          <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            Praça Sérgio Pacheco
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
            Descubra a natureza, lazer e as histórias que marcam e moldam nossa
            cidade
          </p>
        </div>
        <button
          onClick={onClick}
          className="flex gap-2 text-center items-center cursor-pointer mb-12 sm:mb-16 lg:mb-20 bg-primary hover:bg-primary-hover duration-300 text-white rounded-full px-6 sm:px-8 py-3 text-sm sm:text-base touch-manipulation"
        >
          <span className="font-semibold">Entenda melhor este site</span>
          <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 flex shrink-0" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
