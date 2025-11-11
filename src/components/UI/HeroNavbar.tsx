import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef } from "react";
import NavbarLink from "./NavbarLink";
import type { LinksArray } from "./NewNavbar";
import { useMobileMenu } from "../../hooks/useMobileMenu";
import { useClickOutside } from "../../hooks/useClickOutside";

const HERO_HEIGHT = typeof window !== "undefined" ? window.innerHeight : 0;

const HeroNavbar: React.FC<{ links: LinksArray }> = ({ links }) => {
  const shouldClose = typeof window !== "undefined" && window.scrollY > HERO_HEIGHT;
  const { isMobileMenuOpen, closeMobileMenu, toggleMobileMenu } = useMobileMenu(shouldClose);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useClickOutside(mobileMenuRef, closeMobileMenu, isMobileMenuOpen);

  return (
    <nav className="absolute top-0 right-0 left-0 z-50" aria-label="Main navigation">
      <div className="relative container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <button
          onClick={toggleMobileMenu}
          className="touch-manipulation text-white lg:hidden"
          aria-label={isMobileMenuOpen ? "Fecha o menu" : "Abre o menu para celulares"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="hero-mobile-menu"
        >
          {!isMobileMenuOpen ? (
            <Menu className="h-5 w-5" aria-hidden="true" />
          ) : (
            <X className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
        <div className="hidden items-center gap-6 font-medium text-white lg:flex">
          {links.map(({ to, label }) => (
            <NavbarLink to={to} key={label}>
              {label}
            </NavbarLink>
          ))}
        </div>

        {/* Mobile navbar */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              id="hero-mobile-menu"
              role="menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-13 left-4 block w-auto min-w-[200px] overflow-hidden lg:hidden"
            >
              <div className="space-y-6 rounded-md bg-black/70 px-6 py-4 backdrop-blur-sm">
                {links.map(({ to, label }) => (
                  <NavbarLink
                    key={label}
                    closeMobileMenu={closeMobileMenu}
                    to={to}
                  >
                    {label}
                  </NavbarLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default HeroNavbar;
