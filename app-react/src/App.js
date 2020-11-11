import React from "react";
import { StorageGlobal } from "./ContextGlobal";
import Items from "./Items";
import Limpar from "./Limpar";

const App = () => {
  return (
    <StorageGlobal>
      <Items />
      <Limpar />
    </StorageGlobal>
  );
};

export default App;
