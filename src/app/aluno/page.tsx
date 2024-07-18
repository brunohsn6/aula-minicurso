"use client";

import globalState from "@/utils/GlobalState";
import { useState } from "react";
import type { Aluno } from "./interfaces";

export default function Aluno() {
  // Exemplo estado, com gerador de efeito colateral na aplicação
  const [name, setName] = useState("");
  // Exemplo de uso dos utility types do typescript
  const pessoa: Partial<Aluno> = {};

  const handleSetName = () => {
    // Exemplo de localstorage e sessionStorage
    localStorage.setItem("username", globalState.getValue("username"));
    sessionStorage.setItem("username", globalState.getValue("username"));
    // Exemplo de estado global com uso de Singleton
    setName(globalState.getValue("username"));
  };

  return (
    <>
      <input
        name={globalState.getValue("username")}
        onChange={(evt) => {
          globalState.setValue("username", evt.currentTarget.value);
        }}
      />
      <button onClick={() => handleSetName()}>Exibir Valor</button>
      <span>{name}</span>
    </>
  );
}
