import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./src/App";
import configureStore from "./src/store/configureStore";
import "./src/styles/main.scss";

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app-container")
);
