import React from "react";
import { ContextGlobal } from "./ContextGlobal";

const Items = () => {
  const { dados } = React.useContext(ContextGlobal);
  console.log(dados);

  return (
    <div>
      <h3>Items:</h3>
      {dados &&
        dados.map((item) => (
          <div style={{ margin: "1rem", border: "1px solid" }} key={item.id}>
            <h4>{item.nome}</h4>
            <p>{item.descricao}</p>
            <p>
              <strong>
                {Number(item.preco).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </p>
          </div>
        ))}
    </div>
  );
};

export default Items;
