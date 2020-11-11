import React from "react";
import Produtos from "./components/Produtos/Produtos";

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem("item");
    if (produtoLocal) setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto) window.localStorage.setItem("item", produto);
  }, [produto]);

  function handleClick(event) {
    setProduto(event.target.innerText);
  }

  return (
    <div>
      <h3>Preferência: {produto}</h3>
      <button style={{ margin: "1rem" }} onClick={handleClick}>
        Tablet
      </button>
      <button style={{ margin: "1rem" }} onClick={handleClick}>
        Smartphone
      </button>
      <button style={{ margin: "1rem" }} onClick={handleClick}>
        Notebook
      </button>

      <div>{produto && <Produtos produto={produto} />}</div>
    </div>
  );
};

export default App;
