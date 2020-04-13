import React, { useState } from "react";
import Button from "./Button";
import fetchLight from "./helpers/fetchLight";
import "./styles.scss";

const ALREADY_ACTIVATED =
  "You have already activated the traffic light. \n" +
  'Try clicking the "Change!" button instead!';

const ACTIVATE_FIRST = "You must click the traffic light to activate first!";

const App = () => {
  const [isTrafficLightActivated, setIsTrafficLightActivated] = useState(false);
  const [activeColor, setActiveColor] = useState(null);
  const [isOrderedMode, setIsOrderedMode] = useState(false);

  const mode = isOrderedMode ? "ordered" : "random";

  const activateTrafficLight = () => {
    if (!isTrafficLightActivated) {
      activateRandomLight();
      return setIsTrafficLightActivated(true);
    }
    return alert(ALREADY_ACTIVATED);
  };

  const activateRandomLight = () => {
    fetchLight({ mode: "random" })
      .then(value => setActiveColor(value))
      .catch(err => alert(err));
  };

  const changeLight = () => {
    isTrafficLightActivated
      ? fetchLight({ mode, activeColor })
        .then(value => setActiveColor(value))
        .catch(err => alert(err))
      : alert(ACTIVATE_FIRST);
  };

  const changeMode = () => {
    isTrafficLightActivated
      ? setIsOrderedMode(!isOrderedMode)
      : alert(ACTIVATE_FIRST);
  };

  return (
    <main className={"light-app"}>
      <h3>Click on the traffic light to activate a random light!</h3>
      <div className="traffic-light" onClick={() => activateTrafficLight()}>
        <div
          className={`light top-light ${activeColor === "red" ? "active" : ""}`}
        />
        <div
          className={`light middle-light ${
            activeColor === "yellow" ? "active" : ""
            }`}
        />
        <div
          className={`light bottom-light ${
            activeColor === "green" ? "active" : ""
            }`}
        />
      </div>
      <Button
        className="button"
        handleClick={() => changeLight()}
        buttonText="Change!"
      />
      <Button
        className="button"
        handleClick={() => changeMode()}
        buttonText="Switch Mode"
      />
      <p>{`Current Mode: ${mode}`}</p>
    </main>
  );
};

export default App;
