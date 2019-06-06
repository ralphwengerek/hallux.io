/* global module */
import React from "react";
import { render } from "react-dom";
import App from "./App";

const root = document.getElementById("root");

const renderApp = () => {
  render(<App />, root);
};

renderApp();

if (module.hot) {
  module.hot.accept(renderApp);
}
