import React from "react";
import useLocalStorage from "./useLocalStorage";

const App = () => {
  const [produto, setProduto] = useLocalStorage("item", "");

  function handleClick(e) {
    setProduto(e.target.innerText);
  }
  return (
    <div>
      <h3>Preferência: {produto}</h3>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  );
};

export default App;
