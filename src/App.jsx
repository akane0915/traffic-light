import React, { useState } from "react";
import "./styles.scss";

import fetchLight from "./fetchLight";


const ChangeButton = (onClick) => {
  return (
    <button
      onClick={() => onClick()}>
      Change!
    </button>
  )
}

const orderedMode = () => {
  console.log('orderedMode')
}

const randomMode = () => {
  console.log('randomMode')
}

const Light = () => {
  const [isOrderedMode, setIsOrderedMode] = useState(false);
  const [isTrafficLightActivated, setIsTrafficLightActivated] = useState(false);
  const [isTopActive, setIsTopActive] = useState(false);
  const [isMiddleActive, setIsMiddleActive] = useState(false);
  const [isBottomActive, setIsBottomActive] = useState(false);

  const activateTrafficLight = () => {
    if (!isTrafficLightActivated) {
      activateRandomLight();
      setIsTrafficLightActivated(true);
    }
  }

  const activateRandomLight = () => {
    const options = [setIsTopActive, setIsMiddleActive, setIsBottomActive];
    const randomLightActivator = options[Math.floor(Math.random() * 3)];
    randomLightActivator(true);
  }

  return (
    <div>
      <div
        className="lights-container"
        onClick={() => activateTrafficLight()}>
        <div className={`light top-light ${isTopActive ? "active" : ""}`} />
        <div className={`light middle-light ${isMiddleActive ? "active" : ""}`} />
        <div className={`light bottom-light ${isBottomActive ? "active" : ""}`} />
      </div>
      <ChangeButton
        onClick={() => setIsOrderedMode(!isOrderedMode)} />
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