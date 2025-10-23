import {
  BookOpenText,
  Calendar,
  Camera,
  Leaf,
  MapPin,
  ShoppingBag,
  type LucideProps,
} from "lucide-react";
import SectionTitle from "./UI/SectionTitle";
import SectionContainer from "./UI/SectionContainer";
import { motion } from "motion/react";

type SiteInfoCard = {
  Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  title: string;
  description: string;
  idx: number;
};

const InfoCard: React.FC<SiteInfoCard> = ({
  Icon,
  title,
  description,
  idx,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 + idx * 0.06, duration: 0.6 }}
      className="group  hover:ring-1 transition-colors ring-primary/20 hover:shadow-md shadow-sm rounded-md gap-3 p-5 sm:p-8 shadow-[#a9ae9e] flex flex-col"
    >
      <div className="bg-primary/15 group-hover:bg-primary/25 duration-300 inline-block p-2 rounded-md w-fit">
        <Icon className="text-primary" />
      </div>

      <p className="font-serif text-xl">{title}</p>
      <p className="text-sm sm:text-base">{description}</p>
    </motion.div>
  );
};

const HowToUse: React.FC = () => {
  const cards = [
    {
      Icon: BookOpenText,
      title: "Saiba mais sobre a nossa história",
      description:
        "Descubra a rica herança e histórias que moldaram o parque ao longo das décadas.",
    },
    {
      Icon: Calendar,
      title: "Confira os próximos eventos",
      description:
        "Fique atualizado com shows, festivais, workshops e eventos comunitários.",
    },
    {
      Icon: Leaf,
      title: "Explore a natureza",
      description:
        "Navegue pela nossa coleção de árvores centenárias, arbustos e tesouros botânicos.",
    },
    {
      Icon: Camera,
      title: "Veja a galeria de fotos",
      description:
        "Navegue por lindas imagens do nosso parque pelas estações e momentos especiais.",
    },
    {
      Icon: ShoppingBag,
      title: "Suporte vendedores locais",
      description:
        "Encontre informações sobre os vendedores confiáveis e artesãos locais.",
    },
    {
      Icon: MapPin,
      title: "Planeje a sua visita",
      description:
        "Obtenha direções, informações do parque e detalhes de acessibilidade.",
    },
  ];

  return (
    <SectionContainer className="mt-32" id="how-to-use">
      <SectionTitle
        title="Como usar esse website?"
        description="Nosso website tem o propósito de simplicidade e acessibilidade para todas as idades. Aqui está o que você pode descobrir e como navegar por essa experiência digital."
      />
      <div className="grid mb-12 gap-6 mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2">
        {cards.map((card, idx) => (
          <InfoCard
            idx={idx}
            key={card.title}
            Icon={card.Icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default HowToUse;
