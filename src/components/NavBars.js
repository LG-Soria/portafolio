import React from "react";
import { Navbar, Button } from "flowbite-react";
import logo from "../img/navbarLogo.svg"

const NavBars = () => {
  const handleButtonClick = () => {
    const formSection = document.querySelector("#form");
    formSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleButtonClickSobreMi = () => {
    const sobreMiSection = document.querySelector("#sobreMi");
    sobreMiSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleButtonClickSkills = () => {
    const skillsSection = document.querySelector("#skills");
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleButtonClickProyectos = () => {
    const proyectosSection = document.querySelector("#proyectos");
    proyectosSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="p-4">
      <Navbar fluid rounded>
        <Navbar.Brand className="flex justify-between">
          <img
            src={logo}
            className="mr-1 ml-3 h-6 sm:h-9"
            alt="mi Logo"
          />

          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            LG Soria
          </span>
        </Navbar.Brand>

        <div className="flex md:order-2">
          <Button
            className="border-none bg-blue-600 hover:bg-blue-800 mr-4"
            onClick={handleButtonClick}
          >
            Conectemos
          </Button>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link>
            <button onClick={handleButtonClickSobreMi}>Sobre mi</button>
          </Navbar.Link>
          <Navbar.Link>
            <button onClick={handleButtonClickProyectos}>Proyectos</button>
          </Navbar.Link>
          <Navbar.Link>
            <button onClick={handleButtonClickSkills}>Skills</button>
          </Navbar.Link>
          <Navbar.Link>
            
            <button onClick={handleButtonClick}>Contacto</button>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBars;

