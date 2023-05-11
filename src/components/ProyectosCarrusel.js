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

import IconButton from "@mui/material/IconButton";
import LanguageIcon from '@mui/icons-material/Language';

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
          infinite={true}>

          <div className="w-full relative flex items-center justify-center" /** caja donde estan los botones y el carrusel */  >
            
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
            <div className="w-11/12  mx-auto overflow-x-hidden overflow-y-hidden" /** caja donde esta el slider que es lo que hace el carrusel */>
             
              <Slider /** Slider */>
                <div /**caja dentro del slider donde van los items a usar en un slide cada uno */
                  id="slider"
                  className="h-full flex  lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div className="flex flex-shrink-0 relative h-[600px] w-full sm:w-auto">
                      <img
                        src={proyect2}
                        alt="Primer version de Portfolio web"
                        className="object-cover object-center w-full"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                          JavaScript + HTML + CSS
                        </h2>
                        <div className="flex flex-col-reverse h-full items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                            Portfolio v1
                          </h3>

                          <IconButton color="primary">
                            <a
                              href="https://lg-soria.github.io/portfolio/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              <LanguageIcon fontSize="large" />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="flex flex-shrink-0 h-[600px] relative w-full sm:w-auto">
                      <img
                        src={proyect3}
                        alt="Landing Page de practica"
                        className="object-cover object-center w-full"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                          HTML+CSS+JavaScript+Bootstrap
                        </h2>
                        <div className="flex flex-col-reverse h-full items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                            Landing Page blog.
                          </h3>
                          <IconButton color="primary">
                            <a
                              href="https://lg-soria.github.io/NewHomepageMain/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              <LanguageIcon fontSize="large" />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full h-[600px] sm:w-auto">
                      <img
                        src={proyect1}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                          React + NodeJs + ApiRest
                        </h2>
                        <div className="flex h-full flex-col-reverse items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                            Portfolio de fotografia
                          </h3>
                          <IconButton color="primary">
                            <a
                              href="https://lg-soria.github.io/photography-album-web/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              <LanguageIcon fontSize="large" />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="flex flex-shrink-0 relative w-full h-[600px] sm:w-auto">
                      <img
                        src={proyect4}
                        alt="Apeperia Web"
                        className="object-cover object-center w-full"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                          HTML + CSS + Metodologia BEM
                        </h2>
                        <div className="flex h-full  flex-col-reverse items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                            Apeperia Web - Oracle One
                          </h3>
                          <IconButton color="primary">
                            <a
                              href="https://lg-soria.github.io/Apeperia-responsive/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              <LanguageIcon fontSize="large" />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="flex flex-shrink-0 relative w-full h-[600px] sm:w-auto">
                      <img
                        src={proyect5}
                        alt="Fruto y Fruta Web Project"
                        className="object-cover object-center w-full"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                        HTML + CSS + Metodologia BEM
                        </h2>
                        <div className="flex h-full  flex-col-reverse items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          Fruta & Fruto WebSite - Oracle One
                          </h3>
                          <IconButton color="primary">
                            <a
                              href="https://lg-soria.github.io/Fruto-y-fruta-proyecto/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              <LanguageIcon fontSize="large" />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
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
                    <div className="flex flex-shrink-0 relative w-full h-[518px]  sm:w-auto">
                      <img
                        src={proyect2}
                        alt="Primer version de Portfolio web"
                        className="object-cover object-center w-full"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                          JavaScript + HTML + CSS
                        </h2>
                        <div className="flex h-full items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                            Portfolio v1
                          </h3>
                          <IconButton color="primary">
                            <a
                              href="https://lg-soria.github.io/portfolio/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              <LanguageIcon fontSize="large" />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="flex flex-shrink-0 relative w-full h-[518px]  sm:w-auto">
                      <img
                        src={proyect3}
                        alt="Landing page de practica"
                        className="object-cover object-center w-full"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                          HTML+CSS+JavaScript+Bootstrap
                        </h2>
                        <div className="flex h-full items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                            Landing Page blog.
                          </h3>
                          <IconButton color="primary">
                            <a
                              href="https://lg-soria.github.io/NewHomepageMain/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              <LanguageIcon fontSize="large" />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full h-[518px] sm:w-auto">
                      <img
                        src={proyect1}
                        alt="Portfolio de fotografia"
                        className="object-cover object-center w-full"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                          React + NodeJs + ApiRest
                        </h2>
                        <div className="flex flex-col-reverse h-full items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                            Portfolio de fotografia
                          </h3>
                          <IconButton color="primary">
                            <a
                              href="https://lg-soria.github.io/photography-album-web/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              <LanguageIcon fontSize="large" />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="flex flex-shrink-0 relative w-full h-[518px] sm:w-auto">
                      <img
                        src={proyect4}
                        alt="Apeperia Web"
                        className="object-cover object-center w-full"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                        HTML + CSS + Metodologia BEM
                        </h2>
                        <div className="flex flex-col-reverse h-full items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          Apeperia Web - Oracle One
                          </h3>
                          <IconButton color="primary">
                            <a
                              href="https://lg-soria.github.io/Apeperia-responsive/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              <LanguageIcon fontSize="large" />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="flex flex-shrink-0 relative w-full h-[518px] sm:w-auto">
                      <img
                        src={proyect5}
                        alt="Fruto y Fruta Web Project"
                        className="object-cover object-center w-full"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                        HTML + CSS + Metodologia BEM
                        </h2>
                        <div className="flex flex-col-reverse h-full items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          Fruta & Fruto WebSite - Oracle One
                          </h3>
                          <IconButton color="primary">
                            <a
                              href="https://lg-soria.github.io/Fruto-y-fruta-proyecto/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              <LanguageIcon fontSize="large" />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
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
          className="block md:hidden "
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={5}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
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
                  stroke="white"
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
                  className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div className="flex flex-shrink-0 relative h-[600px] w-full sm:w-auto">
                      <img
                        src={proyect2}
                        alt="Primer version de Portfolio web"
                        className="object-cover object-center w-full"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                          JavaScript + HTML + CSS
                        </h2>
                        <div className="flex h-full   flex-col-reverse items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                            Portfolio v1
                          </h3>
                          <IconButton color="primary">
                            <a
                              href="https://lg-soria.github.io/portfolio/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              <LanguageIcon fontSize="large" />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="flex flex-shrink-0 relative w-full h-[600px] sm:w-auto">
                      <img
                        src={proyect3}
                        alt="Landing page de practica"
                        className="object-cover object-center w-full"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                          HTML+CSS+JavaScript+Bootstrap
                        </h2>
                        <div className="flex h-full  flex-col-reverse  items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                            Landing Page blog.
                          </h3>
                          <IconButton color="primary">
                            <a
                              href="https://lg-soria.github.io/NewHomepageMain/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              <LanguageIcon fontSize="large" />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full h-[600px] sm:w-auto">
                      <img
                        src={proyect1}
                        alt="Portfolio de fotografia"
                        className="object-cover object-center w-full"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                          React + NodeJs + ApiRest
                        </h2>
                        <div className="flex  flex-col-reverse  h-full items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                            Portfolio de fotografia
                          </h3>
                          <IconButton color="primary">
                            <a
                              href="https://lg-soria.github.io/photography-album-web/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              <LanguageIcon fontSize="large" />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="flex flex-shrink-0 relative w-full h-[600px] sm:w-auto">
                      <img
                        src={proyect4}
                        alt="Apeperia Web"
                        className="object-cover object-center w-full"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                        HTML + CSS + Metodologia BEM
                        </h2>
                        <div className="flex h-full  flex-col-reverse  items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          Apeperia Web - Oracle One
                          </h3>
                          <IconButton color="primary">
                            <a
                              href="https://lg-soria.github.io/Apeperia-responsive/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              <LanguageIcon fontSize="large" />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="flex flex-shrink-0 relative w-full h-[600px] sm:w-auto">
                      <img
                        src={proyect5}
                        alt="Fruto y Fruta Web Project"
                        className="object-cover object-center w-full"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                        HTML + CSS + Metodologia BEM
                        </h2>
                        <div className="flex h-full  flex-col-reverse  items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                          Fruta & Fruto WebSite - Oracle One
                          </h3>
                          <IconButton color="primary">
                            <a
                              href="https://lg-soria.github.io/Fruto-y-fruta-proyecto/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              <LanguageIcon fontSize="large" />
                            </a>
                          </IconButton>
                        </div>
                      </div>
                    </div>
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
                  stroke="white"
                  strokeWidth={2}
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
