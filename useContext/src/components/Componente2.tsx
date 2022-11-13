import React from "react";

interface Componente2Props {
  state: number;
}

export const Componente2: React.FC<Componente2Props> = ({ state }) => {
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
