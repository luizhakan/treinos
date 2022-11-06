import React, { useReducer } from "react";

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    valor: 1000,
    mostrar: true,
  });

  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENTAR":
        return { valor: state.valor + 1, mostrar: state.mostrar };
      case "MOSTRAR":
        return { valor: state.valor, mostrar: !state.mostrar };
      default:
        return state;
    }
  }

  return (
    <>
      <h3>React Hooks - useReducer</h3>
      <hr />

      {state.mostrar && <p>Valor: {state.valor}</p>}
      <button
        onClick={() => {
          dispatch({ type: "INCREMENTAR" });
        }}
      >
        Incrementar
      </button>
      <button
        onClick={() => {
          dispatch({ type: "MOSTRAR" });
        }}
      >
        Visibilidade
      </button>
    </>
  );
}
