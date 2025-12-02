import { Link } from "react-router";

type FooterLiProps = {
  children: string;
  to: string;
};

const FooterLi: React.FC<FooterLiProps> = ({ children, to }) => {
  return (
    <li>
      <Link 
        to={to}
        className="hover:text-offwhite duration-300 transition-colors cursor-pointer text-offwhite/70"
      >
        {children}
      </Link>
    </li>
  );
};

export default FooterLi;
