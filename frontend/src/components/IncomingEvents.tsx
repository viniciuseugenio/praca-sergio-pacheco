import { useEvents } from "../hooks/useEvents";
import EventCard from "./UI/EventCard";
import SectionContainer from "./UI/SectionContainer";
import SectionTitle from "./UI/SectionTitle";

const IncomingEvents: React.FC = () => {
  const eventsApi = useEvents().data;

  return (
    <SectionContainer className="pt-24" id="eventos">
      <SectionTitle
        title="Próximos eventos"
        description="Descubra as atividades e eventos especiais que acontecem na praça."
      />

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {eventsApi?.map((event, idx) => (
          <EventCard key={idx} idx={idx} {...event}>
            {event.description}
          </EventCard>
        ))}
      </div>
    </SectionContainer>
  );
};

export default IncomingEvents;
