import EventCard from "./UI/EventCard";
import SectionContainer from "./UI/SectionContainer";
import SectionTitle from "./UI/SectionTitle";

const IncomingEvents: React.FC = () => {
  const events = [
    {
      title: "Festival de Músicas ao Ar Livre",
      time: "14:00-18:00",
      date: "Setembro 27, 2025",
      local: "Ao lado do lago",
      qtyPeople: "Aberto para todos",
      description:
        "Apresentações de artistas locais em um ambiente natural e aberto, para todos os públicos.",
    },
    {
      title: "Feira de Artes e Sabores Locais",
      date: "Novembro 24, 2025",
      time: "10:00 - 18:00",
      local: "Próximo à pista de skate",
      qtyPeople: "15 pessoas máx.",
      description:
        "Evento dedicado à cultura local, reunindo artistas, artesãos e produtores da região.",
    },
    {
      title: "Cinema ao Ar Livre",
      date: "Dezembro 06, 2025",
      time: "19:30 - 22:00",
      local: "Ao lado da casinha",
      qtyPeople: "Aberto para as crianças",
      description:
        ' Sessão gratuita de cinema sob as estrelas, com exibição do filme "O Grande Hotel Budapeste".',
    },
    {
      title: "Festival de Música Independente",
      date: "Dezembro 14, 2025",
      time: "16:00 - 23:00",
      local: "Ao lado do palco",
      qtyPeople: "Aberto para todos",
      description: "Festival com bandas independentes de rock, MPB e rap.",
    },
  ];

  return (
    <SectionContainer className="mt-16">
      <SectionTitle
        title="Próximos eventos"
        description="Descubra as atividades e eventos especiais que acontecem na praça."
      />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {events.map((event, idx) => (
          <EventCard key={idx} idx={idx} {...event}>
            {event.description}
          </EventCard>
        ))}
      </div>
    </SectionContainer>
  );
};

export default IncomingEvents;
