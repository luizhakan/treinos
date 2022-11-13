import React from "react";

interface ComponenteProps {
  state: number;
}

export const Componente1: React.FC<ComponenteProps> = ({ state }) => {
  return (
    <div>
      <ul>
        <li>
          Componente 1
          <ul>
            <li>Number: {state}</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export const Componente2: React.FC<ComponenteProps> = ({ state }) => {
  return (
    <div>
      <ul>
        <li>
          Componente 2
          <ul>
            <li>Number : {state}</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
