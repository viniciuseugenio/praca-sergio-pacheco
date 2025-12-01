import { Calendar, Clock, Edit, MapPin, Trash2, Users } from "lucide-react";
import { useDeleteEvent } from "../../hooks/useEvents";
import type { Event } from "../../types/event";

type EventCardProps = {
  setEditingEvent: (event: Event) => void;
  setIsModalOpen: (arg0: boolean) => void;
  event: Event;
};

const EventCard: React.FC<EventCardProps> = ({
  setEditingEvent,
  setIsModalOpen,
  event,
}) => {
  const deleteEvent = useDeleteEvent();

  const handleDeleteEvent = (id: number) => {
    if (window.confirm("Tem certeza que deseja excluir este evento?")) {
      deleteEvent.mutate(id);
    }
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setIsModalOpen(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatTime = (timeString: string) => {
    return timeString.substring(0, 5);
  };

  return (
    <div className="border-primary/20 rounded-xl border bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
      <div className="mb-4">
        <h3 className="text-primary mb-2 text-xl font-bold">{event.title}</h3>
        <p className="text-primary/70 line-clamp-2 text-sm">
          {event.description}
        </p>
      </div>

      <div className="space-y-2 text-sm">
        <div className="text-primary/80 flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(event.day)}</span>
        </div>
        <div className="text-primary/80 flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>
            {formatTime(event.time)}
            {event.end_time && ` - ${formatTime(event.end_time)}`}
          </span>
        </div>
        <div className="text-primary/80 flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span className="line-clamp-1">{event.address}</span>
        </div>
        <div className="text-primary/80 flex items-center gap-2">
          <Users className="h-4 w-4" />
          <span>{event.capacity}</span>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => handleEdit(event)}
          className="bg-primary/10 text-primary hover:bg-primary/20 flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
        >
          <Edit className="h-4 w-4" />
          Editar
        </button>
        <button
          onClick={() => handleDeleteEvent(event.id)}
          disabled={deleteEvent.isPending}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-100 disabled:opacity-50"
        >
          <Trash2 className="h-4 w-4" />
          Excluir
        </button>
      </div>
    </div>
  );
};

export default EventCard;
