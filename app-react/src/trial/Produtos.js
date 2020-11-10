import React from "react";
import Produto from "./Produto";
import Titulo from "./Titulo";

const Produtos = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  return (
    <div>
      <Titulo text="Produtos" />
      {produtos.map((item) => (
        <Produto key={item.nome} {...item} />
      ))}
    </div>
  );
};

export default Produtos;
