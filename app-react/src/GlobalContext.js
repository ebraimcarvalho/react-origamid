import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [carrinho, setCarrinho] = React.useState(0);
  const name = window.localStorage.getItem("item");

  function add1() {
    setCarrinho((contar) => contar + 1);
    window.localStorage.setItem("item", "Notebook");
  }

  function sub1() {
    if (carrinho >= 1) setCarrinho((contar) => contar - 1);
    window.localStorage.setItem("item", "Smartphone");
  }

  return (
    <GlobalContext.Provider value={{ carrinho, add1, sub1, name }}>
      {children}
    </GlobalContext.Provider>
  );
};
