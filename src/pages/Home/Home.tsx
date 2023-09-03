import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Formulario } from "@/components";

const Home = () => {
  return (
    <>
      <div
        className="bg-cover bg-fondo1 w-full h-[800px] bg-center relative flex items-center justify-center 
      max-sm:w-full max-sm:bg-cover max-sm:bg-fondo1 max-sm:h-[250px] max-sm:bg-center max-sm:relative max-sm:flex max-sm:items-center max-sm:justify-center"
      >
        <div
          className="w-auto text-center bg-white text-orange-950 py-20 px-20 grid opacity-60 absolute text-5xl font-Itim drop-shadow-2xl
        max-sm:absolute max-sm:py-5 max-sm:px-5 max-sm:opacity-60 max-sm:font-Itim max-sm:text-xl"
        >
          <h2>Descubre el Placer de vivir</h2>
          <h2> en el entorno perfecto</h2>
        </div>
      </div>
      <div className="bg-amber-50 py-16 max-sm:py-4">
        <div
          className="container mx-auto flex justify-center gap-4 
                 max-sm:container max-sm:mx-auto  max-sm:flex max-sm:justify-center max-sm:gap-1"
        >
          <div
            className="mx-40 flex gap-4 
          max-sm:flex-col max-sm:gap-4 max-sm:mx-10 max-sm:items-center "
          >
            <img
              className="bg-cover bg-fam h-76 w-50 max-sm:h-[220px] max-sm:w-76 "
              src="/public/fam.png"
              alt="familia"
            ></img>
            <div className="inline-block">
              <h1
                className=" inline-block font-Itim text-4xl text-yellow-600 mb-4
                  max-sm:text-xl max-sm:mb-2 max-sm:inline-block"
              >
                Explora Innovadores Espacios<br></br>
                Residenciales en Ica para Tu Nuevo <br></br>
                Hogar Familiar
              </h1>
              <div className="w-full bg-gray-400 h-[0.5px] my-2"></div>
              <p
                className="font-Itim text-xl w-50 text-gray-500
                max-sm:text-xs max-sm:mb-1 max-sm:inline-block max-sm:mt-2"
              >
                Explora los conjuntos residenciales más vanguardistas en Ica,
                brindando una variedad excepcional de casas y departamentos en
                venta para encontrar el lugar perfecto donde tu familia podrá
                establecer su nuevo hogar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-neutral-700 py-20">
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col gap-8">
            <Swiper
              effect={"coverflow"}
              spaceBetween={50}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation, A11y]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="./casa1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./casa2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./casa3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./casa4.jpg" />
              </SwiperSlide>
            </Swiper>
            <div className="flex gap-8 justify-center max-sm:flex-col max-sm:gap-2 ">
              <div className="text-slate-50 text-center">
                <div className="max-sm:w-full max-sm:bg-gray-400 max-sm:h-[0.5px] max-sm:mb-5 max-sm:mt-4"></div>
                <h3 className="text-3xl font-bold max-sm:text-xs max-sm:font-bold">
                  +10 años
                </h3>
                <p className="font-semibold text-xl max-sm:text-xs">
                  de experiencia en el sector
                </p>
              </div>
              <div className="w-[0.50px] bg-white"></div>
              <div className="text-slate-50 text-center">
                <div className="max-sm:w-full max-sm:bg-gray-400 max-sm:h-[0.5px] max-sm:mb-5 max-sm:mt-4"></div>
                <h3 className="text-3xl font-bold max-sm:text-xs max-sm:font-bold">
                  +100 departamentos
                </h3>
                <p className="font-semibold text-xl max-sm:text-xs">
                  de experiencia en el sector
                </p>
              </div>
              <div className="w-[0.50px] bg-white"></div>
              <div className="text-slate-50 text-center">
                <div className="max-sm:w-full max-sm:bg-gray-400 max-sm:h-[0.5px] max-sm:mb-5 max-sm:mt-4"></div>
                <h3 className="text-3xl font-bold max-sm:text-xs max-sm:font-bold">
                  +20 aliados
                </h3>
                <p className="font-semibold text-xl max-sm:text-xs">
                  trabajando con nosotros
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-atras h-[500px] bg-center relative flex py-10
                      max-sm:h-[350px]"
      >
        <div className="bg-cover bg-Verde-0 w-96 h-44 static max-sm:bg-cover max-sm:w-40 max-sm:h-[5rem] ">
          <div className="font-Itim text-black my-8 mx-10 text-xl max-sm:my-3 max-sm:mx-2 max-sm:text-xs">
            <p>
              Cada Lote cuenta con un area con piscina y area verde para la
              familia
            </p>
          </div>
        </div>
      </div>
      <Formulario />
    </>
  );
};

export default Home;
