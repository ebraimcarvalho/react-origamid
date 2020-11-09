import quadrado from './quadrado.js';
import numeroAleatorio from './aleatorio.js';

const menu = {
  seletor: '.principal',
};

console.log(menu.seletor.toUpperCase());

const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];

const [lados, perimetro] = useQuadrado;

console.log(lados);
console.log(perimetro(10));

function showClient(empresa, ...clientes) {
  clientes.map((cliente) => {
    console.log(cliente, empresa);
  });
}

showClient('Google', 'Ebraim', 'Brenda', ['teste', 'item']);

console.log(quadrado.areaQuadrado(7));
console.log(quadrado.perimetroQuadrado(7));
console.log(numeroAleatorio());

// fetch('http://openlibrary.org/authors/OL1A.json')
//   .then((response) => response.json())
//   .then((json) => {
//     let response = json;
//     console.log(response);
//     var h1 = document.createElement('h1');
//     h1.textContent = response.name;
//     document.querySelector('html').appendChild(h1);
//   });

async function getApi(url) {
  const response = await fetch(url);
  const json = await response.json();
  var h1 = document.createElement('p');
  h1.textContent = json.name;
  document.querySelector('html').appendChild(h1);
}

const api = getApi('http://openlibrary.org/authors/OL1A.json');

const api2 = getApi('http://openlibrary.org/authors/OL1A.json');

const active = true;
const button = active && 'Botão ativo' && 'passou';

console.log(button);
