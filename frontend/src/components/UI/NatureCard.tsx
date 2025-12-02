import { Edit, Leaf, Trash2, type LucideProps } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import ImageModal from "./ImageModal";

type NatureCardProps = {
  id?: number;
  name: string;
  scientificName: string;
  description: string;
  type: string;
  imageUrl: string;
  idx: number;
  isAdmin?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
};

type NatureCardInfoProps = {
  Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  text: string;
  label: string;
};

const NatureCardInfo: React.FC<NatureCardInfoProps> = ({
  Icon,
  text,
  label,
}) => {
  return (
    <li className="mt-2 flex items-start gap-2">
      <Icon
        aria-hidden="true"
        className="text-primary mt-0.5 h-4 w-4 flex-shrink-0"
      />
      <span className="text-sm">
        <strong className="font-semibold">{label}:</strong> {text}
      </span>
    </li>
  );
};

const NatureCard: React.FC<NatureCardProps> = ({
  name,
  scientificName,
  description,
  type,
  imageUrl,
  idx,
  isAdmin = false,
  onEdit,
  onDelete,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          bounce: 0,
          duration: 1,
          delay: 0.1 + idx * 0.06,
        }}
        viewport={{ once: true }}
        className="border-primary/20 w-full overflow-hidden rounded-md border bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
      >
        <div
          className="group h-48 w-full cursor-pointer overflow-hidden"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-primary mb-1 font-serif text-xl font-medium">
            {name}
          </h3>
          <p className="mb-3 text-sm text-gray-600 italic">{scientificName}</p>
          <p className="mb-3 text-sm opacity-80">{description}</p>
          <ul className="flex flex-col gap-1">
            <NatureCardInfo Icon={Leaf} text={type} label="Tipo" />
          </ul>
          {isAdmin && onEdit && onDelete && (
            <div className="mt-4 flex gap-2">
              <button
                onClick={onEdit}
                className="bg-primary/10 text-primary hover:bg-primary/20 flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
              >
                <Edit className="h-4 w-4" />
                Editar
              </button>
              <button
                onClick={onDelete}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-100"
              >
                <Trash2 className="h-4 w-4" />
                Excluir
              </button>
            </div>
          )}
        </div>
      </motion.div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={imageUrl}
        name={name}
        scientificName={scientificName}
      />
    </>
  );
};

export default NatureCard;
