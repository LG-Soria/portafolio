import Heading from "./components/Heading";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Skills from "./components/Skills";
import Forms from "./components/Forms";
import FooterDashboard from "./components/FooterDashboard";
import NavComponent from "./components/NavComponet"


function App() {
  return (
    <div className="App">
      <NavComponent />
      <Heading />
      <SobreMi />
      <Proyectos />
      <Skills />
      <Forms />
      <FooterDashboard />
    </div>
  );
}

export default App;
