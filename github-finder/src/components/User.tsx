import React from "react";
import { UserProps } from "../types/user";

import { MdLocationPin } from "react-icons/md";

const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <div className="border-2 border-red-600 p-8 rounded-xl">
      <div className="flex w-full flex-col justify-center items-center border-2 gap-4 border-red-600 p-8 rounded-xl bg-zinc-900">
        <img
          src={avatar_url}
          alt={`avatar do perfil ${login}`}
          className="w-40 h-40 rounded-full mx-auto border-red-700 border-4"
        />
        <h2>{login}</h2>
        {location && (
          <div className="flex items-center gap-2">
            <MdLocationPin />
            <p>
              <span>{location}</span>
            </p>
          </div>
        )}
        <div className="flex items-center gap-2 gap-x-8 border-b-2 pb-4 border-cyan-400">
          <div className="flex flex-col items-center border-r-2 border-cyan-400 border-solid pr-8">
            <p>Seguidores</p>
            <p className="bg-cyan-400 w-full font-semibold text-center text-black">
              {followers}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p>Seguindo</p>
            <p className="bg-cyan-400 w-full font-semibold text-center text-black">
              {following}
            </p>
          </div>
        </div>
        <a
          target={"_blank"}
          className="underline cursor-pointer"
          href={`https://github.com/${login}`}
        >
          Ir para página do Github
        </a>
      </div>
    </div>
  );
};

export default User;
