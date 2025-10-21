type FooterLiProps = {
  children: string;
};

// Criei isso aqui pra ser reutilizável, ao invés de criar um por um,
// se eu modificar aqui, modifica todos os links ali
const FooterLi: React.FC<FooterLiProps> = ({ children }) => {
  return (
    <li className="hover:text-offwhite duration-300 transition-colors cursor-pointer text-offwhite/70">
      {children}
    </li>
  );
};

export default FooterLi;
