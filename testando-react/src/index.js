import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
const hora = ReactDOM.createRoot(document.querySelector("#hora"));
const root = document.querySelector("#root");


let relogio = () => {
  const clock = <h2>Hora : {new Date().toLocaleTimeString()}</h2>;
  hora.render(clock);
};

setInterval(relogio, 1000);

ReactDOM.render(App(), root);
