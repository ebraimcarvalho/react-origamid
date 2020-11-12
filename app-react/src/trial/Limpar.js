import React from "react";
import { ContextGlobal } from "./ContextGlobal";

const Limpar = () => {
  const { limparDados } = React.useContext(ContextGlobal);

  return <button onClick={limparDados}>Limpar Dados</button>;
};

export default Limpar;
