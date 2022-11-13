import React, { useContext } from "react";
import * as C from "./components/Componentes";
import { ExampleContext } from "./contexts/ExampleContext";

export default function App() {
  const { number, setNumber } = useContext(ExampleContext);

  return (
    <>
      <h1>React Hooks - useContext</h1>
      <hr />
      meu number : {number}
      <button onClick={() => setNumber(number + 1)}>incrementar</button>
      <C.Componente1 state={number} />
      <C.Componente2 state={number} />
    </>
  );
}
