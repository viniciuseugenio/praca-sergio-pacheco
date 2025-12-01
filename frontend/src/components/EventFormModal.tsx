import { useState, useEffect } from "react";
import { X } from "lucide-react";
import type { Event, CreateEventDto } from "../types/event";
import InputField from "./UI/InputField";

interface EventFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  event?: Event | null;
  isLoading?: boolean;
}

const EventFormModal: React.FC<EventFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  event,
  isLoading = false,
}) => {
  const [formData, setFormData] = useState<CreateEventDto>({
    title: "",
    description: "",
    day: "",
    time: "",
    end_time: "",
    address: "",
    capacity: "",
  });

  useEffect(() => {
    if (event) {
      setFormData({
        title: event.title,
        description: event.description,
        day: event.day,
        time: event.time,
        end_time: event.end_time || "",
        address: event.address,
        capacity: event.capacity,
      });
    } else {
      setFormData({
        title: "",
        description: "",
        day: "",
        time: "",
        end_time: "",
        address: "",
        capacity: "",
      });
    }
  }, [event, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const submitData = {
      ...formData,
      end_time: formData.end_time || undefined,
    };

    if (event) {
      onSubmit({ id: event.id, event: submitData });
    } else {
      onSubmit(submitData);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="border-primary/20 relative w-full max-w-2xl rounded-xl border bg-white p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="text-primary/50 hover:text-primary absolute top-4 right-4 cursor-pointer transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="title mb-6 text-2xl">
          {event ? "Editar Evento" : "Novo Evento"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Título"
            id="title"
            name="title"
            type="text"
            placeholder="Nome do evento"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <div>
            <label
              htmlFor="description"
              className="text-primary mb-2 block text-sm font-medium"
            >
              Descrição
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              placeholder="Descreva o evento"
              value={formData.description}
              onChange={handleChange}
              required
              className="border-primary/30 focus:border-primary focus:ring-primary w-full rounded-lg border px-4 py-2 transition-colors focus:ring-2 focus:outline-none"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <InputField
              label="Data"
              id="day"
              name="day"
              type="date"
              placeholder=""
              value={formData.day}
              onChange={handleChange}
              required
            />

            <InputField
              label="Hora de Início"
              id="time"
              name="time"
              type="time"
              placeholder=""
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <InputField
            label="Hora de Término (Opcional)"
            id="end_time"
            name="end_time"
            type="time"
            placeholder=""
            value={formData.end_time}
            onChange={handleChange}
          />

          <InputField
            label="Endereço"
            id="address"
            name="address"
            type="text"
            placeholder="Local do evento"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <InputField
            label="Capacidade"
            id="capacity"
            name="capacity"
            type="text"
            placeholder="Ex: 100 pessoas, Ilimitado, etc."
            value={formData.capacity}
            onChange={handleChange}
            required
          />

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="border-primary/30 text-primary hover:bg-primary/5 flex-1 cursor-pointer rounded-lg border px-4 py-3 font-medium transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary hover:bg-primary-hover flex-1 cursor-pointer rounded-lg px-4 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? "Salvando..." : event ? "Atualizar" : "Criar Evento"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventFormModal;
