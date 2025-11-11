import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";
import NavbarLink from "./NavbarLink";
import type { LinksArray } from "./NewNavbar";
import { useMobileMenu } from "../../hooks/useMobileMenu";
import { useClickOutside } from "../../hooks/useClickOutside";

type FloatingNavbarProps = {
  isPastHero: boolean;
  links: LinksArray;
};

const FloatingNavbar: React.FC<FloatingNavbarProps> = ({
  isPastHero,
  links,
}) => {
  const { isMobileMenuOpen, closeMobileMenu, toggleMobileMenu } = useMobileMenu(!isPastHero);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useClickOutside(mobileMenuRef, closeMobileMenu, isMobileMenuOpen);

  return (
    <AnimatePresence>
      {isPastHero && (
        <motion.nav
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3, type: "spring", bounce: 0 }}
          className="border-primary/10 fixed top-0 right-0 left-0 z-50 m-3 rounded-md border bg-white/60 px-4 py-3 shadow-md backdrop-blur-md sm:px-8 md:px-16"
          aria-label="Floating navigation"
        >
          <div className="container mx-auto">
            <div className="flex justify-between">
              <Link to="/" className="title text-xl md:text-2xl">
                Praça Sérgio Pacheco
              </Link>
              <div className="hidden items-center gap-6 font-medium text-white lg:flex">
                {links.map(({ to, label }) => (
                  <NavbarLink isPastHero to={to} key={label}>
                    {label}
                  </NavbarLink>
                ))}
              </div>
              {/* Mobile toggle button */}
              <button
                onClick={toggleMobileMenu}
                className="touch-manipulation lg:hidden"
                aria-label={isMobileMenuOpen ? "Fecha o menu" : "Abre o menu para celulares"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="floating-mobile-menu"
              >
                {!isMobileMenuOpen ? (
                  <Menu className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <X className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>

            {/* Mobile navigation */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  ref={mobileMenuRef}
                  id="floating-mobile-menu"
                  role="menu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-3 overflow-hidden rounded-md bg-black/70 px-6 py-4 backdrop-blur-sm lg:hidden"
                >
                  <div className="space-y-6 font-medium text-white">
                    {links.map(({ to, label }) => (
                      <NavbarLink
                        isPastHero
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
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default FloatingNavbar;
