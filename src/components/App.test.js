import React from "react";
import ReactDOM from "react-dom";
import { unmountComponentAtNode } from "react-dom";
import App from "./App";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  ReactDOM.render(<App />, container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("App", () => {
  it("renders", () => {
    expect(container.textContent).toContain(
      "Click on the traffic light to activate a random light!"
    );
  });

  // I would normally add significantly more unit tests, but wanted to respect
  // the requested time constraint.
});
