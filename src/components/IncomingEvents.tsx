import { Calendar, Clock } from "lucide-react";
import SectionContainer from "./UI/SectionContainer";
import SectionTitle from "./UI/SectionTitle";
import EventCard from "./UI/EventCard";
import { useEffect, useState } from "react";

const IncomingEvents: React.FC = () => {
  return (
    <SectionContainer className="mt-32 mb-32">
      <SectionTitle
        title="Próximos eventos"
        description="Descubra as atividades e eventos especiais que acontecem na praça."
      />

      <div className="mt-8 sm:place-items-start place-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <EventCard
          img="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
          title="Festival de Músicas ao Ar Livre"
          time="14:00-18:00"
          date="27/09/2025"
        >
          Apresentações de artistas locais em um ambiente natural e aberto, para
          todos os públicos.
        </EventCard>

        <EventCard
          img="https://images.unsplash.com/photo-1577083552792-a0d461cb1dd6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1570"
          title="Feira de Artes e Sabores Locais"
          date="24/11/2025"
          time="10:00-18:00"
        >
          Evento dedicado à cultura local, reunindo artistas, artesãos e
          produtores da região. Haverá barracas com comidas típicas,
          apresentações musicais e oficinas de cerâmica e pintura.
        </EventCard>

        <EventCard
          img="https://images.unsplash.com/photo-1527979809431-ea3d5c0c01c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3BlbiUyMGFpciUyMGNpbmVtYXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
          title="Cinema ao Ar Livre"
          date="06/12/2025"
          time="19:30"
        >
          Sessão gratuita de cinema sob as estrelas, com exibição do filme "O
          Grande Hotel Budapeste" e curtas-metragens de jovens cineastas locais.
          Leve sua cadeira e pipoca.
        </EventCard>

        <EventCard
          img="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1570"
          title="Festival de Música Independente"
          date="14/12/2025"
          time="16:00-23:00"
        >
          Festival com bandas independentes de rock, MPB e rap. Contará com área
          gastronômica, exposições de arte urbana e arrecadação voluntária de
          alimentos para doação.
        </EventCard>
      </div>
    </SectionContainer>
  );
};

export default IncomingEvents;
