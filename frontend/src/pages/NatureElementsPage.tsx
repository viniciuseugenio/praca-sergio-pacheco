import NatureCard from "../components/UI/NatureCard";
import SectionContainer from "../components/UI/SectionContainer";
import SectionTitle from "../components/UI/SectionTitle";

const NatureElementsPage: React.FC = () => {
  const allElements = [
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
    {
      name: "Pau-Brasil",
      scientificName: "Paubrasilia echinata",
      type: "Árvore",
      description:
        "Árvore símbolo nacional, de madeira avermelhada e dura, historicamente explorada para extração de corante.",
      imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
    },
    {
      name: "Jabuticabeira",
      scientificName: "Plinia cauliflora",
      type: "Árvore",
      description:
        "Árvore frutífera brasileira que produz frutos diretamente no tronco, com casca roxa escura e polpa branca adocicada.",
      imageUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&h=300&fit=crop",
    },
    {
      name: "Samambaia",
      scientificName: "Nephrolepis exaltata",
      type: "Arbusto",
      description:
        "Planta ornamental com folhas delicadas e arqueadas, perfeita para ambientes sombreados e úmidos.",
      imageUrl: "https://images.unsplash.com/photo-1565011523534-747a8601f10a?w=500&h=300&fit=crop",
    },
    {
      name: "Azaleia",
      scientificName: "Rhododendron simsii",
      type: "Arbusto",
      description:
        "Arbusto florífero muito popular no paisagismo, com flores vibrantes em tons de rosa, vermelho e branco.",
      imageUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=300&fit=crop",
    },
    {
      name: "Quaresmeira",
      scientificName: "Tibouchina granulosa",
      type: "Árvore",
      description:
        "Árvore de médio porte com flores roxas abundantes que florescem no período da Quaresma, daí seu nome popular.",
      imageUrl: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=500&h=300&fit=crop",
    },
    {
      name: "Helicônia",
      scientificName: "Heliconia rostrata",
      type: "Arbusto",
      description:
        "Planta tropical de flores exóticas em forma de bico de papagaio, com cores vibrantes que atraem beija-flores.",
      imageUrl: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=500&h=300&fit=crop",
    },
    {
      name: "Ficus",
      scientificName: "Ficus benjamina",
      type: "Árvore",
      description:
        "Árvore ornamental de copa densa e folhagem abundante, muito utilizada em paisagismo urbano para sombra.",
      imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500&h=300&fit=crop",
    },
    {
      name: "Agave",
      scientificName: "Agave americana",
      type: "Arbusto",
      description:
        "Planta suculenta de folhas carnosas e pontiagudas, resistente à seca e de grande valor ornamental.",
      imageUrl: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500&h=300&fit=crop",
    },
  ];

  return (
    <>
      <div className="bg-primary/5 py-16 mt-20">
        <SectionContainer>
          <SectionTitle
            title="Elementos da Natureza"
            description="Explore toda a diversidade de flora presente na Praça Sérgio Pacheco. Árvores, arbustos e plantas ornamentais que compõem nosso paisagismo."
          />
        </SectionContainer>
      </div>

      <SectionContainer className="py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allElements.map((element, idx) => (
            <NatureCard key={idx} idx={idx} {...element} />
          ))}
        </div>
      </SectionContainer>
    </>
  );
};

export default NatureElementsPage;
