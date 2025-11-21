import { Link, type LinkProps } from "react-router";
import { type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type NavbarLinkProps = PropsWithChildren &
  LinkProps & {
    isPastHero?: boolean;
    closeMobileMenu?: () => void;
  };

const NavbarLink: React.FC<NavbarLinkProps> = ({
  children,
  to,
  className,
  isPastHero,
  closeMobileMenu,
}) => {
  return (
    <Link
      className={twMerge(
        `block touch-manipulation transition-colors duration-300 ${isPastHero ? "text-primary hover:text-primary/70" : "text-offwhite hover:text-offwhite/70"}`,
        className,
      )}
      to={to}
      onClick={closeMobileMenu}
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
