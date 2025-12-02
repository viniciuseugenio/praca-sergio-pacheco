import { motion } from "motion/react";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Academia from "../assets/Academia.jpg";
import AreaCachorro from "../assets/AreaCachorro.jpg";
import BancoOrganico from "../assets/BancoOrganico.jpg";
import Estacionamento from "../assets/Estacionamento.jpg";
import FonteMonumental from "../assets/FonteMonumental.jpg";
import Parquinho from "../assets/Parquinho.jpg";
import QuadraEsportes from "../assets/QuadraEsportes.jpg";
import PistaSkate from "../assets/skate.jpg";
import SectionContainer from "./UI/SectionContainer";
import SectionTitle from "./UI/SectionTitle";

const Gallery: React.FC = () => {
  const slides = [
    {
      title: "Parquinho",
      description:
        "Área do parquinho, para as crianças, totalmente revitalizada, com novos brinquedos e novo acabamento no chão",
      image: Parquinho,
    },
    {
      title: "Pista de Skate",
      description:
        "Para os amantes de skate, agora, a praça Sérgio Pacheco apresenta um espaço mais que especial e adequado para você!",
      image: PistaSkate,
    },
    {
      title: "Área para seus pets",
      description:
        "Área integrativa, focada para cachorros, possuindo área verde e areia. Funciona todos os dias da semana",
      image: AreaCachorro,
    },
    {
      title: "Bancos orgânicos",
      description:
        "Bancos orgânicos espalhados por toda a praça, oferecendo conforto para seus usuários",
      image: BancoOrganico,
    },
    {
      title: "Academia ao ar livre",
      description:
        "Academia revitalizada do zero, oferecendo mais qualidade e diversidade nos aparelhos!",
      image: Academia,
    },
    {
      title: "Quadras de Esportes",
      description:
        "Quadras de esportes adequadas para jogar basquete, vôlei, futevôlei e outras modalidades! Aberta de quarta a domingo",
      image: QuadraEsportes,
    },
    {
      title: "Fonte Monumental",
      description:
        "Fonte monumental, para quem busca uma sensação de paz e tranquilidade enquanto frequenta a praça!",
      image: FonteMonumental,
    },
    {
      title: "Estacionamento",
      description:
        "Estacionamento de carros, motos e bicicletas, localizado em frente a fonte",
      image: Estacionamento,
    },
  ];

  return (
    <section className="bg-primary/5 mt-32 overflow-hidden py-24" id="gallery">
      <SectionContainer className="w-full">
        <SectionTitle
          title="Galeria de Imagens"
          description="Veja quais são as nossas propostas para a revitalização da praça Sérgio Pacheco!"
        />
      </SectionContainer>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 0.6, delay: 0.3 }}
        className="mt-6"
      >
        <Swiper
          spaceBetween={32}
          speed={550}
          slidesPerView="auto"
          modules={[Navigation, Pagination, Keyboard, A11y]}
          navigation
          pagination={{ clickable: true }}
          centeredSlides
          a11y={{
            prevSlideMessage: "Imagem anterior",
            nextSlideMessage: "Próxima imagem",
            paginationBulletMessage: "Ir para imagem {{index}}",
          }}
          keyboard={{ enabled: true }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide className="max-w-5xl pb-12" key={i}>
              <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                <div className="aspect-video w-full sm:aspect-[16/10]">
                  <img
                    className="h-full w-full object-cover"
                    src={slide.image}
                    alt={slide.title}
                  />
                </div>
                <div className="flex flex-1 flex-col bg-white px-4 py-4 sm:px-6 sm:py-5">
                  <h3 className="font-serif text-lg font-semibold text-gray-900 sm:text-2xl">
                    {slide.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Gallery;
