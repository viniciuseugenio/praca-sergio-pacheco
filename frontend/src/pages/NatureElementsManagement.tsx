import { useState } from "react";
import { ArrowLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router";
import DashboardNavbar from "../components/UI/DashboardNavbar";
import NatureCard from "../components/UI/NatureCard";
import NatureElementFormModal from "../components/NatureElementFormModal";
import {
  useNatureElements,
  useCreateNatureElement,
  useUpdateNatureElement,
  useDeleteNatureElement,
} from "../hooks/useNatureElements";
import type { NatureElement } from "../types/nature";

const NatureElementsManagement: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingElement, setEditingElement] = useState<NatureElement | null>(
    null,
  );

  const { data: elements = [], isLoading, error } = useNatureElements();
  const createMutation = useCreateNatureElement();
  const updateMutation = useUpdateNatureElement();
  const deleteMutation = useDeleteNatureElement();

  const handleCreate = () => {
    setEditingElement(null);
    setIsModalOpen(true);
  };

  const handleEdit = (element: NatureElement) => {
    setEditingElement(element);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Tem certeza que deseja deletar este elemento?")) {
      try {
        await deleteMutation.mutateAsync(id);
      } catch (error) {
        console.error("Failed to delete element:", error);
        alert("Erro ao deletar elemento");
      }
    }
  };

  const handleSubmit = async (data: any) => {
    try {
      if (editingElement) {
        await updateMutation.mutateAsync(data);
      } else {
        await createMutation.mutateAsync(data);
      }
      setIsModalOpen(false);
      setEditingElement(null);
    } catch (error) {
      console.error("Failed to save element:", error);
      alert("Erro ao salvar elemento");
    }
  };

  return (
    <div className="bg-offwhite min-h-screen">
      <DashboardNavbar title="Gerenciamento de Plantas" />

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
            <h2 className="title text-3xl">Elementos da Natureza</h2>
            <p className="text-primary/70 mt-2">
              Gerencie todas as plantas da Praça Sérgio Pacheco
            </p>
          </div>
          <button
            onClick={handleCreate}
            className="bg-primary hover:bg-primary-hover flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
          >
            <Plus className="h-5 w-5" />
            Nova Planta
          </button>
        </div>

        {isLoading && (
          <div className="text-center text-gray-600">Carregando...</div>
        )}

        {error && (
          <div className="text-center text-red-600">
            Erro ao carregar elementos da natureza
          </div>
        )}

        {!isLoading && !error && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                isAdmin
                onEdit={() => handleEdit(element)}
                onDelete={() => handleDelete(element.id)}
              />
            ))}
          </div>
        )}
      </main>

      <NatureElementFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingElement(null);
        }}
        onSubmit={handleSubmit}
        element={editingElement}
        isLoading={createMutation.isPending || updateMutation.isPending}
      />
    </div>
  );
};

export default NatureElementsManagement;
