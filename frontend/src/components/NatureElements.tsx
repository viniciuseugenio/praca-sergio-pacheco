import NatureCard from "./UI/NatureCard";
import SectionContainer from "./UI/SectionContainer";
import SectionTitle from "./UI/SectionTitle";

const NatureElements: React.FC = () => {
  const elements = [
    {
      name: "Ipê Amarelo",
      scientificName: "Handroanthus albus",
      type: "Árvore",
      description:
        "Árvore nativa do Brasil, conhecida por suas flores amarelas vibrantes que florescem no final do inverno e início da primavera.",
      imageUrl: "https://images.unsplash.com/photo-1597868165956-03a6827955b1?w=500&h=300&fit=crop",
    },
    {
      name: "Palmeira Imperial",
      scientificName: "Roystonea oleracea",
      type: "Árvore",
      description:
        "Palmeira majestosa que pode atingir até 40 metros de altura, símbolo de elegância e nobreza em paisagens tropicais.",
      imageUrl: "https://images.unsplash.com/photo-1509715513011-e394f0cb20c4?w=500&h=300&fit=crop",
    },
    {
      name: "Costela de Adão",
      scientificName: "Monstera deliciosa",
      type: "Arbusto",
      description:
        "Planta ornamental tropical com folhas grandes e perfuradas, muito utilizada em paisagismo urbano.",
      imageUrl: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500&h=300&fit=crop",
    },
    {
      name: "Bromélias",
      scientificName: "Bromeliaceae",
      type: "Arbusto",
      description:
        "Família de plantas epífitas com folhas coloridas, típicas da flora brasileira, que formam rosetas atraentes.",
      imageUrl: "https://images.unsplash.com/photo-1615671524827-c1fe3973b648?w=500&h=300&fit=crop",
    },
  ];

  return (
    <SectionContainer className="pt-24 pb-24" id="natureza">
      <SectionTitle
        title="Elementos da Natureza"
        description="Conheça a flora diversificada que compõe o paisagismo da Praça Sérgio Pacheco"
        button
        href="/nature-elements"
        buttonLabel="Ver todos os elementos"
      />

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {elements.map((element, idx) => (
          <NatureCard key={idx} idx={idx} {...element} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default NatureElements;
