import React from "react";

const App = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState("");
  const inputElement = React.useRef();

  const [notificacao, setNotificacao] = React.useState(null);
  const [contador, setContador] = React.useState(0);
  const timeout = React.useRef();

  function handleClick() {
    setComentarios([...comentarios, input]);
    setInput("");
    inputElement.current.focus();
  }

  function handleDelete(index) {
    const newArr = [...comentarios];
    newArr.splice(index, 1);
    setComentarios(newArr);
  }

  function handleContador() {
    setNotificacao("Agradecemos a compra!");
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setNotificacao(null);
    }, 1000);
    setContador(contador + 1);
  }

  return (
    <div>
      <ul>
        {comentarios.map((item, index) => (
          <li key={index}>
            {item} -{" "}
            <button onClick={() => handleDelete(index)}>Excluir</button>
          </li>
        ))}
      </ul>
      <input
        ref={inputElement}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <br />
      <button onClick={handleClick}>Enviar</button>
      <hr />
      <p>{notificacao}</p>
      <button onClick={handleContador}>{contador}</button>
    </div>
  );
};

export default App;
