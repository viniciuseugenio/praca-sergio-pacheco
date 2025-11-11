import { useEffect, useState } from "react";
import HeroNavbar from "./UI/HeroNavbar";
import FloatingNavbar from "./UI/FloatingNavbar";
import { useMatch } from "react-router";

export type LinksArray = {
  to: string;
  label: string;
}[];

const Navbar: React.FC = () => {
  const [isPastHero, setIsPastHero] = useState(false);
  const isIndexPage = !!useMatch({ path: "/", end: true });

  useEffect(() => {
    const heroHeight = window.innerHeight;

    if (!isIndexPage) {
      setIsPastHero(true);
      return;
    }

    setIsPastHero(window.scrollY > heroHeight);

    const handleScroll = () => {
      if (window.scrollY > heroHeight) setIsPastHero(true);
      else setIsPastHero(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isIndexPage]);

  const links = [
    { to: "/", label: "Início" },
    { to: "/#gallery", label: "Galeria" },
    { to: "/#eventos", label: "Eventos" },
    { to: "/#direcoes", label: "Direções" },
    { to: "/#feedback", label: "Feedback" },
    { to: "/history", label: "História" },
  ];

  return (
    <>
      <HeroNavbar links={links} />
      <FloatingNavbar isPastHero={isPastHero} links={links} />
    </>
  );
};

export default Navbar;
