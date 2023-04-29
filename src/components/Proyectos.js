import ProyectosCarrusel from "./ProyectosCarrusel";
import React from "react";

const Proyectos = () => {

  return (
    <section id="proyectos" className="margin">
      <div className="carruselContainer pt-8">
        <h1 className="mb-6 lg:mb-16 text-5xl font-extrabold tracking-tight leading-tight text-center  dark:text-white md:text-5xl">PROYECTOS</h1>
        <ProyectosCarrusel />
      </div>
    </section>
  );
};

export default Proyectos;