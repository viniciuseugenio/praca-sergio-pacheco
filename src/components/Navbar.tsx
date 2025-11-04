import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useMatch, type LinkProps } from "react-router";

type MobileLinkProps = LinkProps & {
  closeMobileMenu: () => void;
  isPastHero: boolean;
  label: string;
};

const MobileLink: React.FC<MobileLinkProps> = ({
  to,
  closeMobileMenu,
  isPastHero,
  label,
  ...props
}) => {
  return (
    <Link
      to={to}
      onClick={closeMobileMenu}
      className={`block touch-manipulation py-2 transition-colors ${
        isPastHero
          ? "hover:text-primary text-gray-700"
          : "text-white hover:text-white/70"
      }`}
      {...props}
    >
      {label}
    </Link>
  );
};

type DesktopLinkProps = LinkProps & {
  isPastHero: boolean;
  label: string;
};

const DesktopLink: React.FC<DesktopLinkProps> = ({ to, label, isPastHero }) => {
  return (
    <Link
      to={to}
      className={`text-sm transition-colors lg:text-base ${
        isPastHero ? "hover:text-primary/70" : "hover:text-white/70"
      }`}
    >
      {label}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isIndexPage = !!useMatch({ path: "/", end: true });

  useEffect(() => {
    const heroHeight = window.innerHeight;

    if (!isIndexPage) {
      setIsPastHero(true);
      return;
    }

    setIsPastHero(window.scrollY > heroHeight);

    const handleScroll = () => {
      setIsPastHero(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isIndexPage]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`border-primary/20 z-50 transition-all duration-300 ${
        isPastHero
          ? "fixed top-0 right-0 left-0 m-3 rounded-md border bg-white/50 shadow-md backdrop-blur-md"
          : "absolute top-0 right-0 left-0 border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-16">
          {isPastHero && (
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="text-primary font-serif text-lg font-bold transition-colors sm:text-xl lg:text-2xl"
            >
              Praça Sérgio Pacheco
            </Link>
          )}

          {/* Desktop Navigation */}
          <div
            className={`hidden gap-4 font-medium transition-colors sm:flex lg:gap-6 ${
              isPastHero ? "text-primary" : "text-white"
            }`}
          >
            <DesktopLink label="Início" to="/" isPastHero={isPastHero} />
            <DesktopLink
              label="História"
              to="/history"
              isPastHero={isPastHero}
            />
            <DesktopLink
              label="Galeria"
              to="/#gallery"
              isPastHero={isPastHero}
            />
            <DesktopLink
              label="Eventos"
              to="/#eventos"
              isPastHero={isPastHero}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`touch-manipulation p-2 transition-colors sm:hidden ${
              isPastHero
                ? "hover:text-primary text-gray-700"
                : "text-white hover:text-white/70"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`overflow-hidden sm:hidden ${
                !isPastHero
                  ? "absolute top-full left-4 mt-2 w-auto min-w-[200px]"
                  : ""
              }`}
            >
              <div
                className={`space-y-3 py-4 ${
                  !isPastHero
                    ? "rounded-md bg-black/70 px-6 backdrop-blur-sm"
                    : ""
                }`}
              >
                <MobileLink
                  to="/"
                  closeMobileMenu={closeMobileMenu}
                  isPastHero={isPastHero}
                  label="Início"
                />
                <MobileLink
                  to="/history"
                  closeMobileMenu={closeMobileMenu}
                  isPastHero={isPastHero}
                  label="História"
                />
                <MobileLink
                  to="#gallery"
                  closeMobileMenu={closeMobileMenu}
                  isPastHero={isPastHero}
                  label="Galeria"
                />
                <MobileLink
                  to="/#eventos"
                  closeMobileMenu={closeMobileMenu}
                  isPastHero={isPastHero}
                  label="Eventos"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
