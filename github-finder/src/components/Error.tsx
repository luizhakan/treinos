import React from "react";
import { UserProps } from "../types/user";

const Error = ({ login }: UserProps) => {
  return <div className="text-center">Usuário {login} não encontrado!</div>;
};

export default Error;
