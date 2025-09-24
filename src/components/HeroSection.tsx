import HeroImage from "../assets/pexels-myersmc16-919335.jpg";
import { ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen relative">
      <img
        height={400}
        width={400}
        src={HeroImage}
        alt=""
        className="w-full h-full brightness-50"
      />
      <div className="container mx-auto absolute flex flex-col items-start justify-between inset-0 mt-20">
        <div>
          <h1 className="font-serif text-white text-6xl">
            Praça Sérgio Pacheco
          </h1>
          <p className="text-white">
            Descubra a natureza, lazer e as histórias que marcam e moldam nossa
            cidade
          </p>
        </div>
        <button className="flex gap-2 items-center cursor-pointer mb-20 bg-primary hover:bg-primary-hover duration-300 text-white rounded-full px-8 py-3">
          <span className="font-semibold">Entenda melhor este site</span>
          <ArrowDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
