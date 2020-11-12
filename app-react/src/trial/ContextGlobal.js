import React from "react";

export const ContextGlobal = React.createContext();

export const StorageGlobal = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  function limparDados() {
    setDados(null);
  }

  return (
    <ContextGlobal.Provider value={{ dados, limparDados }}>
      {children}
    </ContextGlobal.Provider>
  );
};
