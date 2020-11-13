import React from "react";

const App = () => {
  const [mensagem, setMensagem] = React.useState("");
  const [select, setSelect] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleCheck(cor) {
    return cores.includes(cor);
  }

  return (
    <div>
      <p>Textarea</p>
      <form>
        <label htmlFor="textarea">Mensagem</label>
        <textarea
          name="textarea"
          id="textarea"
          cols="10"
          rows="5"
          onChange={(e) => setMensagem(e.target.value)}
        ></textarea>
        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          <option value="" disabled>
            Selecione uma opção
          </option>
          <option value="notebook">Notebook</option>
          <option value="desktop">Desktop</option>
          <option value="ps5">PS5</option>
        </select>
        <h3>Dispositivo</h3>
        <label>
          <input
            type="radio"
            value="notebook"
            name="produto"
            onChange={({ target }) => setProduto(target.value)}
          />
          Notebook
        </label>
        <label>
          <input
            type="radio"
            value="desktop"
            name="produto"
            onChange={({ target }) => setProduto(target.value)}
          />
          Desktop
        </label>

        <h3>Cor</h3>
        <label>
          <input
            type="radio"
            value="preto"
            checked={cor === "preto"}
            onChange={({ target }) => setCor(target.value)}
          />
          Preto
        </label>
        <label>
          <input
            type="radio"
            value="branco"
            checked={cor === "branco"}
            onChange={({ target }) => setCor(target.value)}
          />
          Branco
        </label>
        <label>
          <input
            type="checkbox"
            value="amarelo"
            checked={handleCheck("amarelo")}
            onChange={handleChange}
          />
          Amarelo
        </label>
        <label>
          <input
            type="checkbox"
            value="azul"
            checked={handleCheck("azul")}
            onChange={handleChange}
          />
          Azul
        </label>
      </form>
      <p>Mensagem: {mensagem.toUpperCase()}</p>
      <p>Opção selecionada: {select}</p>
      <p>Dispositivo: {produto}</p>
      <p>Cor: {cor}</p>
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
