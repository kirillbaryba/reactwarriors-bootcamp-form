import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/index.scss";
import Store from "./store/store";
import { Provider } from "mobx-react";

ReactDOM.render(
  <Provider formStore={new Store()} hello={1}>
    <App />
  </Provider>,
  document.getElementById("root")
);
