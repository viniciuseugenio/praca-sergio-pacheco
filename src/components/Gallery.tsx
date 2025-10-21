import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionContainer from "./UI/SectionContainer";
import SectionTitle from "./UI/SectionTitle";

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
    <div className="bg-primary/5 py-16 mt-32 overflow-hidden">
      <SectionContainer className="w-full">
        <SectionTitle
          title="Galeria de Imagens"
          description="Explore a beleza natural e as diversas atrações da Praça Sérgio Pacheco"
        />
      </SectionContainer>
      <div className="w-full h-full">
        <div className="flex">
          <Swiper
            spaceBetween={50}
            speed={550}
            slidesPerView="auto"
            modules={[Navigation, Pagination]}
            navigation
            pagination
            centeredSlides
            autoHeight
          >
            {slides.map((slide, i) => (
              <SwiperSlide className="max-w-4xl" key={i}>
                <div
                  className={`h-36 md:h-2/5 lg:h-1/5 xl:h-[710px] w-auto shadow-md hover:shadow-lg duration-700`}
                >
                  <img
                    className="object-cover rounded-md h-full w-full"
                    src={slide}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold md:text-3xl font-serif">
                    Nostrum nesciunt, repellat accusantium
                  </h3>
                  <p className="mt-2 opacity-90">
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
      </div>
    </div>
  );
};

export default Gallery;
