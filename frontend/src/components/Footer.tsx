import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";
import FooterLi from "./UI/FooterLi";

const FooterTitle: React.FC<{ children: string }> = ({ children }) => {
  return <h4 className="mb-4 text-lg font-semibold text-white">{children}</h4>;
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32 bg-primary text-offwhite">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="mb-4 inline-block">
              <h3 className="font-serif text-2xl font-bold text-white">
                Praça Sérgio Pacheco
              </h3>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-offwhite/80">
              Um espaço público de lazer, cultura e natureza no coração de
              Uberlândia. Visite e aproveite nossas diversas atrações.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <FooterTitle>Navegação</FooterTitle>
            <ul className="flex flex-col gap-2">
              <FooterLi to="/">Início</FooterLi>
              <FooterLi to="/#gallery">Galeria</FooterLi>
              <FooterLi to="/#natureza">Natureza</FooterLi>
              <FooterLi to="/#eventos">Eventos</FooterLi>
              <FooterLi to="/history">História</FooterLi>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <FooterTitle>Páginas</FooterTitle>
            <ul className="flex flex-col gap-2">
              <FooterLi to="/gallery">Todas as Fotos</FooterLi>
              <FooterLi to="/nature-elements">Todas as Plantas</FooterLi>
              <FooterLi to="/#direcoes">Como Chegar</FooterLi>
              <FooterLi to="/#feedback">Enviar Feedback</FooterLi>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <FooterTitle>Contato</FooterTitle>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-offwhite/60" />
                <a
                  href="tel:+5534954429330"
                  className="transition-colors hover:text-white"
                >
                  (34) 9544-2933
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-offwhite/60" />
                <a
                  href="mailto:contato@pracasergiopacheco.gov.br"
                  className="transition-colors hover:text-white"
                >
                  contato@pracasergiopacheco.gov.br
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-offwhite/60" />
                <address className="not-italic">
                  Centro, Uberlândia - MG
                  <br />
                  CEP: 38400-184
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-offwhite/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-offwhite/70 sm:flex-row sm:text-left">
            <p>
              © {currentYear} Praça Sérgio Pacheco. Todos os direitos
              reservados.
            </p>
            <p>
              Desenvolvido com ❤️ para a comunidade de Uberlândia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
