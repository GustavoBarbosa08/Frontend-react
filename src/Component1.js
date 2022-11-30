import React from "react";
import { useState, useEffect } from "react";
import UsuariosTabela from "./UsuariosTabela";

export default function Component1() {
  const [contador, setContador] = useState(0);
  const [dados, setDados] = useState([]);

  function incContador() {
    setContador(contador + 1);
  }
  const decrement = function decContador() {
    setContador((contador) => contador - 1);
  };

  useEffect(() => {
    console.log("componentDidUpdate");
  });


  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    console.log("Requisitando dados por um fetch");
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setDados(resp));
  }, []);

  return (
    <>
      <div>Component de ex na aula dev</div>
      <p>pkfgnvfgdfigfgfdgbfdk bkfdgkikhipj </p>
      <button onClick={incContador}>Incrementar</button>
      <p>{contador}</p>
      <button onClick={decrement}>Decrementar</button>

      {dados.map((item) => {
        return (
          <div key={item.id}>
            <span>{item.name} -- </span>
            <span>{item.email} </span>
          </div>
        );
      })}


      <UsuariosTabela dados = {dados}></UsuariosTabela>

    </>
  );
}
