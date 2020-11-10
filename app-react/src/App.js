import React from "react";
import Produtos from "./components/Produtos/Produtos";

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      "https://ranekapi.origamid.dev/json/api/produto/" +
        event.target.innerText.toLowerCase()
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);

    // setCarregando(true);
    // fetch(
    //   "https://ranekapi.origamid.dev/json/api/produto/" +
    //     event.target.innerText.toLowerCase()
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //     setDados(json);
    //     console.log(dados);
    //   });
    // setCarregando(false);
  }

  return (
    <div>
      <button onClick={handleClick}>Tablet</button>
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Notebook</button>

      <div>
        {carregando && <p>Carregando...</p>}
        {!carregando && dados && <Produtos dados={dados} />}
      </div>
    </div>
  );
};

export default App;
