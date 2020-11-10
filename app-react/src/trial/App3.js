import React from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

const App = () => {
  let Component;
  const { pathname } = window.location;
  if (pathname == '/') {
    Component = Home;
  } else if (pathname == '/produtos') {
    Component = Produtos;
  }

  return (
    <>
      <Header />
      <Component />
    </>
  );
};

export default App;
