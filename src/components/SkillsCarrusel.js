import Illu from "./logos/LogosAdobeIllustrator";
import Photo from "./logos/LogosAdobePhotoshop";
import Git from "./logos/LogosGit";
import Github from "./logos/LogosGithub";
import Mongo from "./logos/LogosMongodb";
import Npm from "./logos/LogosNpm";
import React from "./logos/LogosReact";
import Tailwind from "./logos/LogosTailwindcss";
import Node from "./logos/LogosNodejs";
import JavaScript from "./logos/SkillIconsJavascript";
import Css from "./logos/SkillIconsCss";
import Html from "./logos/SkillIconsHtml";



const SkillsCarrusel = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 lg:py-10 mx-auto max-w-screen-xl px-4">
        <h2 class="mb-6 lg:mb-16 text-5xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-5xl">
          SKILLS
        </h2>

        <div class="mt-48 grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
          <div class="flex justify-center items-center ">
            <React />
          </div>
          <div class="flex justify-center items-center ">
            <Node />
          </div>
          <div class="flex justify-center items-center ">
            <Npm />
          </div>
          <div class="flex justify-center items-center ">
            <JavaScript />
          </div>
          <div class="flex justify-center items-center ">
            <Tailwind />
          </div>
          <div class="flex justify-center items-center">
            <Git />
          </div>
          <div class="flex justify-center items-center">
            <Github />
          </div>
          <div class="flex justify-center items-center">
            <Mongo />
          </div>
          <div class="flex justify-center items-center">
            <Css />
          </div>
          <div class="flex justify-center items-center">
            <Html />
          </div>
          <div class="flex justify-center items-center">
            <Illu />
          </div>
          <div class="flex justify-center items-center">
            <Photo />
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default SkillsCarrusel;
