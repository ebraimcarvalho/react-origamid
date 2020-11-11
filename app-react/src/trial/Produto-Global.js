import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const global = React.useContext(GlobalContext);

  return (
    <div>
      <p>Produto: {global.name}</p>
      <p>Quantidade: {global.carrinho}</p>
      <button onClick={() => global.add1()}>Adicionar 1</button>
      <button onClick={() => global.sub1()}>Diminuir 1</button>
    </div>
  );
};

export default Produto;
