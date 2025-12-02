import { useState, useEffect } from "react";
import { X, Upload } from "lucide-react";
import type { NatureElement } from "../types/nature";
import InputField from "./UI/InputField";

interface NatureElementFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  element?: NatureElement | null;
  isLoading?: boolean;
}

interface FormData {
  name: string;
  scientific_name: string;
  description: string;
  type: string;
  image: File | null;
}

const NatureElementFormModal: React.FC<NatureElementFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  element,
  isLoading = false,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    scientific_name: "",
    description: "",
    type: "",
    image: null,
  });
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (element) {
      setFormData({
        name: element.name,
        scientific_name: element.scientific_name,
        description: element.description,
        type: element.type,
        image: null,
      });
      setPreviewUrl(element.image_url);
    } else {
      setFormData({
        name: "",
        scientific_name: "",
        description: "",
        type: "",
        image: null,
      });
      setPreviewUrl(null);
    }
  }, [element, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.image && !element) {
      alert("Por favor, selecione uma imagem");
      return;
    }

    const submitData = {
      name: formData.name,
      scientific_name: formData.scientific_name,
      description: formData.description,
      type: formData.type,
      ...(formData.image && { image: formData.image }),
    };

    if (element) {
      onSubmit({ id: element.id, element: submitData });
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
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
          {element ? "Editar Elemento" : "Novo Elemento"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Nome"
            id="name"
            name="name"
            type="text"
            placeholder="Nome da planta"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <InputField
            label="Nome Científico"
            id="scientific_name"
            name="scientific_name"
            type="text"
            placeholder="Nome científico"
            value={formData.scientific_name}
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
              placeholder="Descreva a planta"
              value={formData.description}
              onChange={handleChange}
              required
              className="border-primary/30 focus:border-primary focus:ring-primary w-full rounded-lg border px-4 py-2 transition-colors focus:ring-2 focus:outline-none"
            />
          </div>

          <InputField
            label="Tipo"
            id="type"
            name="type"
            type="text"
            placeholder="Ex: Árvore, Arbusto, etc."
            value={formData.type}
            onChange={handleChange}
            required
          />

          <div>
            <label
              htmlFor="image"
              className="text-primary mb-2 block text-sm font-medium"
            >
              Imagem {!element && "*"}
            </label>
            <div className="space-y-3">
              <label
                htmlFor="image"
                className="border-primary/30 hover:border-primary flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed px-4 py-8 transition-colors"
              >
                <Upload className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">
                  {formData.image
                    ? formData.image.name
                    : "Clique para selecionar uma imagem"}
                </span>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  required={!element}
                />
              </label>
              {previewUrl && (
                <div className="relative">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="h-48 w-full rounded-lg object-cover"
                  />
                </div>
              )}
            </div>
          </div>

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
              {isLoading ? "Salvando..." : element ? "Atualizar" : "Criar Elemento"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NatureElementFormModal;
