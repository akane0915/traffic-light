import React, { useState } from "react";
import "./styles.scss";

import fetchLight from "./fetchLight";

const ChangeButton = ({ handleClick }) => {
  return (
    <button
      onClick={() => handleClick()}>
      Change!
    </button>
  )
}

const Light = () => {
  const [isOrderedMode, setIsOrderedMode] = useState(false);
  const [isTrafficLightActivated, setIsTrafficLightActivated] = useState(false);
  const [activeColor, setActiveColor] = useState(null);

  const mode = isOrderedMode ? 'ordered' : 'random';

  const activateTrafficLight = () => {
    if (!isTrafficLightActivated) {
      activateRandomLight();
      setIsTrafficLightActivated(true);
    }
  }

  const activateRandomLight = () => {
    fetchLight({ mode: 'random' }).then((value) => setActiveColor(value));
  }

  const changeLight = () => {
    fetchLight({ mode, activeColor }).then((value) => setActiveColor(value));
  }

  return (
    <div>
      <div
        className="lights-container"
        onClick={() => activateTrafficLight()}>
        <div className={`light top-light ${activeColor === 'red' ? "active" : ""}`} />
        <div className={`light middle-light ${activeColor === 'yellow' ? "active" : ""}`} />
        <div className={`light bottom-light ${activeColor === 'green' ? "active" : ""}`} />
      </div>
      <ChangeButton
        handleClick={() => changeLight()}
      />
    </div>
  );
};

const App = () => {
  return (
    // Accessiblity standards expect a main element to be on each page
    <main>
      <Light />
    </main>
  )
};

export default App;