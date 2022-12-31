type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");
  return (
    <div className="w-full bg-zinc-900 p-12 rounded-2xl flex flex-col gap-4 mb-6 mt-6 text-center">
      <h2 className="font-bold text-2xl md:text-4xl">Busque por um usuário</h2>
      <p className="text-center text-lg md:text-xl font-light">
        Conheça seus melhores repositórios
      </p>
      <div className="flex gap-2">
        <input
          autoFocus
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserName(e.target.value)
          }
          onKeyUp={(e: React.KeyboardEvent) => {
            if (e.code === "Enter" || e.code === "NumpadEnter") {
              loadUser(userName);
            }
          }}
          className="p-2 text-black font-medium rounded border-none"
        />
        <button
          className="p-2 text-black font-medium rounded border-none"
          onClick={() => loadUser(userName)}
        >
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
