import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import proyect1 from "../img/proyecto-1.jpg";
import proyect2 from "../img/proyecto-2.jpg";
import proyect3 from "../img/proyecto-3.jpg";
import proyect4 from "../img/proyecto-4.jpg";
import proyect5 from "../img/proyecto-5.jpg";

import ProyectoCard from "./ProyectosCard";

const ProyectosCarrusel = () => {
  return (
    <div className="container mx-auto">
      <div
        className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4" /* Carousel for desktop and large size devices */
      >
        <CarouselProvider /** Container o section principal */
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={5}
          visibleSlides={4}
          step={1}
          infinite={true}
        >
          <div
            className="w-full relative flex items-center justify-center" /** caja donde estan los botones y el carrusel */
          >
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div
              className="w-11/12  mx-auto overflow-x-hidden overflow-y-hidden" /** caja donde esta el slider que es lo que hace el carrusel */
            >
              <Slider /** Slider */>
                <div /**caja dentro del slider donde van los items a usar en un slide cada uno */
                  id="slider"
                  className="h-full flex  lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>

                    <ProyectoCard
                      image={proyect1}
                      titulo="Portfolio de Fotografia"
                      descripcion="Proyecto hecho con React & Redux"
                      enlace1="https://github.com/LG-Soria/photography-album-web"
                      enlace2="https://lg-soria.github.io/photography-album-web/"  />

                  </Slide>
                  <Slide index={1}>
                  <ProyectoCard
                      image={proyect2}
                      titulo="Portfolio Personal V1"
                      descripcion="Proyecto hecho con HTML, CSS, SASS y JavaScript"
                      enlace1="https://github.com/LG-Soria/portfolio/"
                      enlace2="https://lg-soria.github.io/portfolio/"
                    />
                  </Slide>
                  <Slide index={2}>
                  <ProyectoCard
                      image={proyect3}
                      titulo="HomePage Practica"
                      descripcion="Proyecto hecho con HTML, CSS y Bootstrap"
                      enlace1="https://github.com/LG-Soria/NewHomepageMain"
                      enlace2="https://lg-soria.github.io/NewHomepageMain/"
                    />
                  </Slide>
                  <Slide index={3}>
                  <ProyectoCard
                      image={proyect4}
                      titulo=" Apeperia Landing"
                      descripcion="Proyecto hecho con HTML, CSS, Metodologia BEM"
                      enlace1="https://github.com/LG-Soria/Apeperia-responsive/"
                      enlace2="https://lg-soria.github.io/Apeperia-responsive/"
                    />
                  
                  </Slide>
                  <Slide index={4}>
                  <ProyectoCard
                      image={proyect5}
                      titulo=" Fruto & Fruta Web "
                      descripcion="Proyecto hecho con HTML, CSS y Estructura Atomic Desing"
                      enlace1="https://github.com/LG-Soria/Fruto-y-fruta-proyecto"
                      enlace2="https://lg-soria.github.io/Fruto-y-fruta-proyecto/"
                    />
                  
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider
          className="lg:hidden md:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={5}
          visibleSlides={2}
          step={1}
          infinite={true}
        >
          <div className="w-11/12 relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={12}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                  <ProyectoCard
                      image={proyect1}
                      titulo="Portfolio de Fotografia"
                      descripcion="Proyecto hecho con React & Redux"
                      enlace1="https://github.com/LG-Soria/photography-album-web"
                      enlace2="https://lg-soria.github.io/photography-album-web/"  />
                  </Slide>
                  <Slide index={1}>
                  <ProyectoCard
                      image={proyect2}
                      titulo="Portfolio Personal V1"
                      descripcion="Proyecto hecho con HTML, CSS, SASS y JavaScript"
                      enlace1="https://github.com/LG-Soria/portfolio"
                      enlace2="https://lg-soria.github.io/portfolio/"
                    />
                  </Slide>
                  <Slide index={2}>
                  <ProyectoCard
                      image={proyect3}
                      titulo="HomePage Practica"
                      descripcion="Proyecto hecho con HTML, CSS y Bootstrap"
                      enlace1="https://github.com/LG-Soria/NewHomepageMain"
                      enlace2="https://lg-soria.github.io/NewHomepageMain/"
                    />
                  </Slide>
                  <Slide index={3}>
                  <ProyectoCard
                      image={proyect4}
                      titulo=" Apeperia Landing - Oracle One"
                      descripcion="Proyecto hecho con HTML, CSS, Metodologia BEM y Estructura Atomic Desing"
                      enlace1="https://github.com/LG-Soria/Apeperia-responsive/"
                      enlace2="https://lg-soria.github.io/Apeperia-responsive/"
                    />
                  </Slide>
                  <Slide index={4}>
                  <ProyectoCard
                      image={proyect5}
                      titulo=" Fruto & Fruta LandingPage - Oracle One"
                      descripcion="Proyecto hecho con HTML, CSS, Metodologia BEM y Estructura Atomic Desing"
                      enlace1="https://github.com/LG-Soria/Fruto-y-fruta-proyecto"
                      enlace2="https://lg-soria.github.io/Fruto-y-fruta-proyecto/"
                    />
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={12}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className=" md:hidden  "
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={5}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-80 relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={10}
                height={30}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="black"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full w-full flex  lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                  <ProyectoCard
                  className="pr-[300px]"
                      image={proyect1}
                      titulo="Portfolio de Fotografia"
                      descripcion="Proyecto hecho con React & Redux"
                      enlace1="https://github.com/LG-Soria/photography-album-web"
                      enlace2="https://lg-soria.github.io/photography-album-web/" />
                  </Slide>
                  <Slide index={1}>
                  <ProyectoCard
                      image={proyect2}
                      titulo="Portfolio Personal V1"
                      descripcion="Proyecto hecho con HTML, CSS, SASS y JavaScript"
                      enlace1="https://github.com/LG-Soria/portfolio/"
                      enlace2="https://lg-soria.github.io/portfolio/"
                    />
                  </Slide>
                  <Slide index={2}>
                  <ProyectoCard
                      image={proyect3}
                      titulo="HomePage Practica"
                      descripcion="Proyecto hecho con HTML, CSS y Bootstrap"
                      enlace1="https://github.com/LG-Soria/NewHomepageMain"
                      enlace2="https://lg-soria.github.io/NewHomepageMain/"
                    />
                  </Slide>
                  <Slide index={3}>
                  <ProyectoCard
                      image={proyect4}
                      titulo=" Apeperia Landing"
                      descripcion="Proyecto hecho con HTML, CSS y Estructura Atomic Desing"
                      enlace1="https://github.com/LG-Soria/Apeperia-responsive/"
                      enlace2="https://lg-soria.github.io/Apeperia-responsive/"
                    />
                  </Slide>
                  <Slide index={4}>
                  <ProyectoCard
                      image={proyect5}
                      titulo=" Fruto & Fruta Web "
                      descripcion="Proyecto hecho con HTML, CSS y Estructura Atomic Desing en el curso de Oracle One"
                      enlace1="https://github.com/LG-Soria/Fruto-y-fruta-proyecto"
                      enlace2="https://lg-soria.github.io/Fruto-y-fruta-proyecto/"
                    />
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={10}
                height={30}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default ProyectosCarrusel;
