import { useState } from 'react';

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

function App() {
  const [dados, setDados] = useState(luana);
  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  const [tema, setTema] = useState(0);
  const estilo0 = {
    backgroundColor: 'darkblue',
    color: 'whitesmoke',
  };

  const estilo1 = {
    backgroundColor: 'black',
    color: 'white',
  };

  function changeTheme() {
    setTema(!tema);
  }

  const changeProfile = () => {
    dados == luana ? setDados(mario) : setDados(luana);
  };

  function meuNome() {
    return 'Ebraim Carvalho';
  }

  function quadrado(x) {
    return x * x;
  }

  const carro = {
    make: 'Toyota',
    model: 'Corolla',
  };

  return (
    <div style={tema ? estilo1 : estilo0}>
      <p title="Este é um parágrafo">Hello World</p>
      <p>{meuNome()}</p>
      <p>{quadrado(4)}</p>
      <p>
        {carro.make} - {carro.model}
      </p>
      <p>{'minha empresa'.toUpperCase()}</p>
      <p>{(() => 'Função executada')()}</p>
      <p>{quadrado(2) === 4 ? 'Fórmula Correta' : 'Incorreto'}</p>
      <p>{quadrado(2) && 'Acertou' && 'Acertou de novo'}</p>
      <p>{new Date().getFullYear()}</p>
      <button onClick={changeTheme}>Mudar cores</button>

      <div>
        <p>Nome: {dados.cliente}</p>
        <p>Idade: {dados.idade}</p>
        <p>
          Situação:{' '}
          <span style={{ color: dados.ativa ? 'green' : 'red' }}>
            {dados.ativa ? 'Ativo' : 'Inativo'}
          </span>
        </p>
        <p>Total gasto: R$ {total}</p>
        {total > 10000 && <p>Você está gastando muito.</p>}
        <button onClick={changeProfile}>Trocar conta</button>
      </div>

      <hr />

      <div>
        {produtos
          .filter((item) => Number(item.preco.replace('R$ ', '') > 1500))
          .map((item) => (
            <div key={item.id}>
              <h3>{item.nome}</h3>
              <p>Preço: {item.preco}</p>
              <ul style={{ listStyle: 'none' }}>
                {item.cores.map((cor) => (
                  <li
                    style={{ backgroundColor: cor, color: 'white' }}
                    key={cor}
                  >
                    {cor}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
