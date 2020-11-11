import React from "react";

const set1 = new Set();
const set2 = new Set();

function oplenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const Produto = () => {
  const func1 = () => {
    console.log("Func 1");
  };

  const func2 = React.useCallback(() => {
    console.log("Funco 2");
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log("Set1:", set1);
  console.log("Set2:", set2);
  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
};

const App = () => {
  const [contador, setContador] = React.useState(0);
  const ts = React.useMemo(() => {
    const n = 5;
    console.log(n);
    return n + 1;
  }, []);
  const t1 = performance.now();
  const valor = React.useMemo(() => {
    return oplenta();
  }, []);
  console.log(performance.now() - t1);

  return (
    <div>
      <p>Teste</p>
      <button onClick={() => setContador(contador + 1)}>{contador}</button>
      <p>TS: {ts}</p>
      <hr />
      <Produto />
    </div>
  );
};

export default App;
