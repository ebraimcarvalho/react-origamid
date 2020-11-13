import React from "react";

const formFields = [
  {
    id: "nome",
    label: "Nome",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "senha",
    label: "Senha",
    type: "password",
  },
  {
    id: "cep",
    label: "Cep",
    type: "text",
  },
  {
    id: "rua",
    label: "Rua",
    type: "text",
  },
  {
    id: "numero",
    label: "Número",
    type: "text",
  },
  {
    id: "bairro",
    label: "Bairro",
    type: "text",
  },
  {
    id: "cidade",
    label: "Cidade",
    type: "text",
  },
  {
    id: "estado",
    label: "Estado",
    type: "text",
  },
];

const App = () => {
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return { ...acc, [field.id]: "" };
    }, {})
  );

  const [response, setResponse] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {formFields.map(({ id, label, type }) => (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              id={id}
              value={form[id]}
              onChange={handleChange}
            />
          </div>
        ))}

        {/* <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={form.nome}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          value={form.senha}
          onChange={handleChange}
        />

        <label htmlFor="cep">Cep</label>
        <input type="text" id="cep" value={form.cep} onChange={handleChange} />

        <label htmlFor="rua">Rua</label>
        <input type="text" id="rua" value={form.rua} onChange={handleChange} />

        <label htmlFor="numero">Número</label>
        <input
          type="text"
          id="numero"
          value={form.numero}
          onChange={handleChange}
        />

        <label htmlFor="bairro">Bairro</label>
        <input
          type="text"
          id="bairro"
          value={form.bairro}
          onChange={handleChange}
        />

        <label htmlFor="cidade">Cidade</label>
        <input
          type="text"
          id="cidade"
          value={form.cidade}
          onChange={handleChange}
        /> */}

        {response && response.ok && <p>Usuário Criado com sucesso</p>}
        <button>Enviar Dados</button>
      </form>
    </>
  );
};

export default App;
