import NatureCard from "./UI/NatureCard";
import SectionContainer from "./UI/SectionContainer";
import SectionTitle from "./UI/SectionTitle";
import { useNatureElements } from "../hooks/useNatureElements";

const NatureElements: React.FC = () => {
  const { data: elements = [], isLoading, error } = useNatureElements();

  if (isLoading) {
    return (
      <SectionContainer className="pt-24 pb-24" id="natureza">
        <SectionTitle
          title="Elementos da Natureza"
          description="Conheça a flora diversificada que compõe o paisagismo da Praça Sérgio Pacheco"
        />
        <div className="mt-8 text-center">Carregando...</div>
      </SectionContainer>
    );
  }

  if (error) {
    return (
      <SectionContainer className="pt-24 pb-24" id="natureza">
        <SectionTitle
          title="Elementos da Natureza"
          description="Conheça a flora diversificada que compõe o paisagismo da Praça Sérgio Pacheco"
        />
        <div className="mt-8 text-center text-red-600">
          Erro ao carregar elementos da natureza
        </div>
      </SectionContainer>
    );
  }

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
        {elements.slice(0, 4).map((element, idx) => (
          <NatureCard
            key={element.id}
            id={element.id}
            idx={idx}
            name={element.name}
            scientificName={element.scientific_name}
            description={element.description}
            type={element.type}
            imageUrl={element.image_url}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default NatureElements;
