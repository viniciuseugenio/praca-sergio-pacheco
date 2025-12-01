import { ArrowLeft, Calendar, Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import EventFormModal from "../components/EventFormModal";
import DashboardNavbar from "../components/UI/DashboardNavbar";
import EventCard from "../components/UI/EventCardAdmin";
import { useCreateEvent, useEvents, useUpdateEvent } from "../hooks/useEvents";
import type { Event } from "../types/event";

const EventManagement: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const { data: events, isLoading, error } = useEvents();
  console.log(events);
  const createEvent = useCreateEvent();
  const updateEvent = useUpdateEvent();

  const handleSubmit = (data: any) => {
    if (editingEvent) {
      updateEvent.mutate(
        { id: data.id, event: data.event },
        {
          onSuccess: () => {
            setEditingEvent(null);
            setIsModalOpen(false);
          },
        },
      );
    } else {
      createEvent.mutate(data, {
        onSuccess: () => {
          setIsModalOpen(false);
        },
      });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingEvent(null);
  };

  return (
    <div className="bg-offwhite min-h-screen">
      <DashboardNavbar title="Gerenciamento de Eventos" />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="text-primary hover:text-primary-hover mb-6 flex cursor-pointer items-center gap-2 font-medium transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Voltar
        </button>

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="title text-3xl">Eventos</h2>
            <p className="text-primary/70 mt-2">
              Gerencie todos os eventos da Praça Sérgio Pacheco
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary hover:bg-primary-hover flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
          >
            <Plus className="h-5 w-5" />
            Novo Evento
          </button>
        </div>

        {isLoading && (
          <div className="text-primary/70 text-center">
            Carregando eventos...
          </div>
        )}

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-600">
            Erro ao carregar eventos: {error.message}
          </div>
        )}

        {events && events.length === 0 && (
          <div className="border-primary/20 rounded-xl border bg-white p-12 text-center shadow-md">
            <Calendar className="text-primary/30 mx-auto mb-4 h-16 w-16" />
            <h3 className="text-primary mb-2 text-xl font-semibold">
              Nenhum evento cadastrado
            </h3>
            <p className="text-primary/70 mb-4">
              Comece criando seu primeiro evento
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary-hover inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition-all"
            >
              <Plus className="h-5 w-5" />
              Criar Primeiro Evento
            </button>
          </div>
        )}

        {events && events.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard
                event={event}
                key={event.id}
                setIsModalOpen={setIsModalOpen}
                setEditingEvent={setEditingEvent}
              />
            ))}
          </div>
        )}
      </main>

      <EventFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        event={editingEvent}
        isLoading={createEvent.isPending || updateEvent.isPending}
      />
    </div>
  );
};

export default EventManagement;
