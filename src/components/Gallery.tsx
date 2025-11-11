import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionContainer from "./UI/SectionContainer";
import SectionTitle from "./UI/SectionTitle";
import { motion } from "motion/react";

const Gallery: React.FC = () => {
  const slides = [
    "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1386",
    "https://images.unsplash.com/photo-1637070773929-054cf3288cbb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
    "https://images.unsplash.com/photo-1610103711589-618f3812b0d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    "https://images.unsplash.com/photo-1621157281949-65e2de4ba88b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZSUyMGdyZWVufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1613",
    "https://images.unsplash.com/photo-1614931454423-4b4bac270e8d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG5hdHVyZSUyMGdyZWVufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    "https://images.unsplash.com/photo-1621877361185-5e3cd6f3c61b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW1hem9uJTIwZm9yZXN0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
  ];

  return (
    <div className="bg-primary/5 mt-32 overflow-hidden py-24" id="gallery">
      <SectionContainer className="w-full">
        <SectionTitle
          title="Galeria de Imagens"
          description="Explore a beleza natural e as diversas atrações da Praça Sérgio Pacheco"
          button
          href="/gallery"
          buttonLabel="Veja mais fotos"
        />
      </SectionContainer>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 0.6, delay: 0.3 }}
        className="h-full w-full"
      >
        <div className="flex">
          <Swiper
            spaceBetween={50}
            speed={550}
            slidesPerView="auto"
            modules={[Navigation, Pagination, Keyboard, A11y]}
            navigation
            pagination
            centeredSlides
            autoHeight
            a11y={{
              prevSlideMessage: "Imagem anterior",
              nextSlideMessage: "Próxima imagem",
              paginationBulletMessage: "Ir para imagem {{index}}",
            }}
            keyboard={{ enabled: true }}
          >
            {slides.map((slide, i) => (
              <SwiperSlide className="max-w-4xl" key={i}>
                <div
                  className={`h-52 w-auto shadow-md duration-700 hover:shadow-lg min-[510px]:h-3/5 sm:h-96 md:h-2/5 lg:h-1/5 xl:h-[640px]`}
                >
                  <img
                    className="h-full w-full rounded-md object-cover"
                    src={slide}
                    alt={`Imagem da praça Sérgio Pacheco - Número ${i}`}
                  />
                </div>
                <div className="mt-4">
                  <h2 className="font-serif text-xl font-medium md:text-3xl">
                    Nostrum nesciunt, repellat accusantium
                  </h2>
                  <p className="mt-2 text-sm opacity-90 md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Distinctio cumque accusantium voluptatem dicta ducimus
                    quasi, ab harum? Sed animi ipsa! Mollitia ex iure velit esse
                    nemo.
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
