import { Leaf, type LucideProps } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import ImageModal from "./ImageModal";

type NatureCardProps = {
  name: string;
  scientificName: string;
  description: string;
  type: string;
  imageUrl: string;
  idx: number;
};

type NatureCardInfoProps = {
  Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  text: string;
  label: string;
};

const NatureCardInfo: React.FC<NatureCardInfoProps> = ({ Icon, text, label }) => {
  return (
    <li className="mt-2 flex items-start gap-2">
      <Icon aria-hidden="true" className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
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
        className="bg-white border-primary/20 w-full rounded-md border shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
      >
        <div 
          className="h-48 w-full overflow-hidden cursor-pointer group"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="mb-1 font-serif text-xl font-medium text-primary">{name}</h3>
          <p className="text-sm italic text-gray-600 mb-3">{scientificName}</p>
          <p className="mb-3 text-sm opacity-80">{description}</p>
          <ul className="flex flex-col gap-1">
            <NatureCardInfo Icon={Leaf} text={type} label="Tipo" />
          </ul>
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
