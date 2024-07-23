import { useState } from "react";
import Navigation from "./components/Navigation.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";

import "./App.css";

function App() {
  const [item, setItem] = useState("about");

  const [aFade, setAFade] = useState(true); //true when a is visible/when it should fade it
  const [pFade, setPFade] = useState(false);
  const [visible, setVisible] = useState("about"); //true when a is visible/when it should fade it

  function handleItemClick(s) {
    if (s !== item) {
      setAFade((before) => (before = false));
      setPFade((before) => (before = false));
    }
    setItem(s);
  }

  function handleExit(s) {
    setVisible((before) => (before === "about" ? "projects" : "about"));
    if (s === "about") {
      setPFade(true);
    } else {
      setAFade(true);
    }
  }

  return (
    <div className="App container-sm container-margin">
      <Navigation
        selectedItem={item}
        setSelectedItem={(s) => handleItemClick(s)}
      />
      <About
        isClicked={aFade} //starts fade
        isVisible={visible === "about"} //after fully exited, this needs to turn false
        handleFade={(s) => handleExit(s)} //called when fade is done
      />
      <Projects
        isClicked={pFade} //starts fade
        isVisible={visible === "projects"} //after fully exited, this needs to turn false
        handleFade={(s) => handleExit(s)} //called when fade is done
      />
    </div>
  );
}

export default App;
