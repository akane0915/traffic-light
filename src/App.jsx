import React, { useState } from "react";
import "./styles.scss";

import { fetchLight } from "./fetchLight";

const ChangeButton = ({ handleClick }) => {
  return (
    <button
      onClick={() => handleClick()}>
      Change!
    </button>
  )
}

const ModeButton = ({ handleClick }) => {
  return (
    <button
      onClick={() => handleClick()}>
      Switch Mode!
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
      return setIsTrafficLightActivated(true);
    }
    return alert('You have already activated the traffic light. \n' +
      'Try clicking the "Change!" button instead!')
  }

  const activateRandomLight = () => {
    fetchLight({ mode: 'random' }).then((value) => setActiveColor(value));
  }

  const changeLight = () => {
    isTrafficLightActivated
      ? fetchLight({ mode, activeColor }).then((value) => setActiveColor(value))
      : alert('You must click the traffic light to activate first!')
  }

  const changeMode = () => {
    isTrafficLightActivated
      ? setIsOrderedMode(!isOrderedMode)
      : alert('You must click the traffic light to activate a random light before switching modes!')
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
      <ModeButton
        handleClick={() => changeMode()}
      />
      <p>{`Current Mode: ${mode}`}</p>
    </div>
  );
};

const App = () => {
  return (
    // Accessiblity standards expect a main element to be on each page
    <main>
      <h3>Click on the traffic light to activate a random light!</h3>
      <Light />
    </main>
  )
};

export default App;