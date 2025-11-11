import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";
import SectionContainer from "../components/UI/SectionContainer";
import SectionTitle from "../components/UI/SectionTitle";

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      id: 1,
      url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1386",
      alt: "Paisagem natural 1",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1637070773929-054cf3288cbb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
      alt: "Paisagem natural 2",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1610103711589-618f3812b0d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      alt: "Paisagem natural 3",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1621157281949-65e2de4ba88b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZSUyMGdyZWVufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      alt: "Paisagem natural 4",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1613",
      alt: "Paisagem natural 5",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1614931454423-4b4bac270e8d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG5hdHVyZSUyMGdyZWVufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      alt: "Paisagem natural 6",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1621877361185-5e3cd6f3c61b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW1hem9uJTIwZm9yZXN0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      alt: "Floresta amazônica",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471",
      alt: "Natureza verde",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632",
      alt: "Floresta verde",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      alt: "Paisagem natural 10",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1574",
      alt: "Montanhas",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1587",
      alt: "Paisagem com água",
    },
  ];

  return (
    <div className="to-primary/5 min-h-screen bg-gradient-to-b from-white py-12 pt-20 sm:py-16 sm:pt-24">
      <SectionContainer>
        <SectionTitle
          title="Galeria de Fotos"
          description="Explore a beleza e os momentos especiais da Praça Sérgio Pacheco através desta coleção de imagens"
        />

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 columns-2 gap-3 space-y-3 sm:mt-12 sm:gap-4 sm:space-y-4 md:columns-3 lg:columns-3 xl:columns-4"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl active:scale-95"
              onClick={() => setSelectedImage(image)}
              tabIndex={0}
              onKeyDown={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40 group-active:bg-black/50">
                <ZoomIn className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:h-10 sm:w-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionContainer>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="absolute top-4 right-4 z-10 p-1 text-white transition-colors hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
              aria-label="Fechar"
              autoFocus
            >
              <X className="h-8 w-8" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-h-[90vh] w-full max-w-7xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="h-full w-full rounded-lg object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
