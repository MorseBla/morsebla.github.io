import { useState } from "react";
import Navigation from "./components/Navigation.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

import "./App.css";

function App() {
  const [item, setItem] = useState("about");

  const [fade, setFade] = useState("about"); //true when a is visible/when it should fade it

  const [visible, setVisible] = useState("about"); //which one is visible

  function handleItemClick(s) {
    if (s !== item) {
      setItem(s);
      setFade(s);
    }
  }

  function handleExit(s) {
    setVisible(item);
    setFade(item);
  }

  return (
    <div className="App container-sm container-margin">
      <Navigation
        selectedItem={item}
        setSelectedItem={(s) => handleItemClick(s)}
      />
      <About
        isClicked={fade === "about"} //starts fade
        isVisible={visible === "about"} //after fully exited, this needs to turn false
        handleFade={(s) => handleExit(s)} //called when fade is done
      />
      <Skills
        isClicked={fade === "skills"} //starts fade
        isVisible={visible === "skills"} //after fully exited, this needs to turn false
        handleFade={(s) => handleExit(s)} //called when fade is done
      />
      <Projects
        isClicked={fade === "projects"} //starts fade
        isVisible={visible === "projects"} //after fully exited, this needs to turn false
        handleFade={(s) => handleExit(s)} //called when fade is done
      />
    </div>
  );
}

export default App;
