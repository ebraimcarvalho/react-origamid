import React from "react";

const Produto = ({ nome, propriedades }) => {
  return (
    <div style={{ border: "1px solid black", marginBottom: "1rem" }}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((spec) => (
          <li key={spec}>{spec}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
