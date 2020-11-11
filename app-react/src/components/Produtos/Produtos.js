import React from "react";

const Produtos = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto) {
      fetch("https://ranekapi.origamid.dev/json/api/produto/" + produto)
        .then((response) => response.json())
        .then((json) => setDados(json));
    }
  }, [produto]);

  if (!dados) return null;

  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <img
        style={{ maxWidth: "360px" }}
        src={dados.fotos[0].src}
        alt={dados.fotos[0].titulo}
      />
    </div>
  );
};

export default Produtos;
