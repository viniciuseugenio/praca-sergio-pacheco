import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import FooterLi from "./UI/FooterLi";

const FooterTitle: React.FC<{ children: string }> = ({ children }) => {
  return <h4 className="text-xl mb-3 font-serif">{children}</h4>;
};

const Footer: React.FC = () => {
  return (
    <footer className="mt-32 bg-primary text-offwhite">
      <div className="p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="w-fit">
          <h3 className="text-xl font-serif mb-3 font-semibold">
            Praça Sérgio Pacheco
          </h3>
          <p>
            Um local onde juntamos lazer, diversão e curiosidades, bem no
            coração da cidade.
          </p>

          <div className="flex mt-3 gap-3">
            <Facebook className="h-5 w-5" />
            <Instagram className="h-5 w-5" />
          </div>
        </div>

        <div className="w-fit">
          <FooterTitle>Links rápidos</FooterTitle>
          <ul className="flex flex-col gap-1 w-fit">
            <FooterLi>Como usar o site</FooterLi>
            <FooterLi>Galeria</FooterLi>
            <FooterLi>Próximos eventos</FooterLi>
          </ul>
        </div>

        <div>
          <FooterTitle>Nos contate</FooterTitle>
          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(34) 9544-2933</span>
            </li>

            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>exemplo@gov.br</span>
            </li>

            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Centro, Uberlândia - Minas Gerais, 38400-184</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
