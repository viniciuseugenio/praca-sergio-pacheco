import NatureCard from "../components/UI/NatureCard";
import SectionContainer from "../components/UI/SectionContainer";
import SectionTitle from "../components/UI/SectionTitle";
import { useNatureElements } from "../hooks/useNatureElements";

const NatureElementsPage: React.FC = () => {
  const { data: elements = [], isLoading, error } = useNatureElements();

  return (
    <>
      <div className="bg-primary/5 mt-20 py-16">
        <SectionContainer>
          <SectionTitle
            title="Elementos da Natureza"
            description="Explore toda a diversidade de flora presente na Praça Sérgio Pacheco. Árvores, arbustos e plantas ornamentais que compõem nosso paisagismo."
          />
        </SectionContainer>
      </div>

      <SectionContainer className="py-16">
        {isLoading && (
          <div className="text-center text-gray-600">Carregando...</div>
        )}

        {error && (
          <div className="text-center text-red-600">
            Erro ao carregar elementos da natureza
          </div>
        )}

        {!isLoading && !error && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {elements.map((element, idx) => (
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
        )}
      </SectionContainer>
    </>
  );
};

export default NatureElementsPage;
