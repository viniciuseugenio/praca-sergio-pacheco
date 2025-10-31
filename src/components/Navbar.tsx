import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useMatch } from "react-router";

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isIndexPage = !!useMatch({ path: "/", end: true });

  useEffect(() => {
    const heroHeight = window.innerHeight;

    if (!isIndexPage) {
      setIsVisible(true);
      return;
    }

    if (isIndexPage && window.scrollY < heroHeight) {
      setIsVisible(false);
    }

    const handleScroll = () => {
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isIndexPage]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, bounce: 0, type: "spring" }}
          className="border-primary/20 fixed top-0 right-0 left-0 z-50 m-3 rounded-md border bg-white/50 shadow-md backdrop-blur-md"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-14 items-center justify-between sm:h-16">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="text-primary font-serif text-lg font-bold sm:text-xl lg:text-2xl"
              >
                Praça Sérgio Pacheco
              </Link>

              {/* Desktop Navigation */}
              <div className="text-primary hidden gap-4 font-medium sm:flex lg:gap-6">
                <Link
                  to="/"
                  className="hover:text-primary/70 text-sm transition-colors lg:text-base"
                >
                  Início
                </Link>
                <Link
                  to="/history"
                  className="hover:text-primary/70 text-sm transition-colors lg:text-base"
                >
                  História
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hover:text-primary touch-manipulation p-2 text-gray-700 transition-colors sm:hidden"
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
                  className="overflow-hidden sm:hidden"
                >
                  <div className="space-y-3 py-4">
                    <Link
                      to="/"
                      onClick={closeMobileMenu}
                      className="hover:text-primary block touch-manipulation py-2 text-gray-700 transition-colors"
                    >
                      Início
                    </Link>
                    <Link
                      to="/history"
                      onClick={closeMobileMenu}
                      className="hover:text-primary block touch-manipulation py-2 text-gray-700 transition-colors"
                    >
                      História
                    </Link>
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

export default Navbar;
