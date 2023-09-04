//SOLUÇÃO PARA NUMEROS ACERTADOS!//

const numerosApostados = [2, 5, 10, 22, 36, 43, 49, 55];
const numerosSorteados = [3, 7, 20, 22, 36, 49];

for (let index = 0; index < numerosApostados.length; index += 1) {
  for (
    let indexPremiado = 0;
    indexPremiado < numerosSorteados.length;
    indexPremiado += 1
  ) {
    if (numerosApostados[index] === numerosSorteados[indexPremiado]) {
      console.log(numerosApostados[index]);
    }
  }
}

//CONSULTAR SE É FRUTA OU NAO!//

const listaDeCompras = [
  "maçã",
  "gengibre",
  "miojo",
  "biscoito/bolacha",
  "banana",
  "feijão carioquinha",
  "pasta de dente",
];
const carrinho = [];

for (
  let posicaoNaLista = 0;
  posicaoNaLista < listaDeCompras.length;
  posicaoNaLista = posicaoNaLista + 1
) {
  if (
    listaDeCompras[posicaoNaLista] === "maçã" ||
    listaDeCompras[posicaoNaLista] === "banana"
  ) {
    carrinho.push(listaDeCompras[posicaoNaLista]);
  }
}
console.log(carrinho); // ['maçã', 'banana']

//EXECUTAR CONTAGEM REGRESIVA!//

for (let index = 10; index >= 1; index = index - 1) {
  console.log(index);
}

console.log("UHULLLLLLLLLLLLLLLLLLLL FELIZ ANO NOVOOOOOOOO 🍾🎆🎆✨");

//VERIFICACAO DE AMIZADES EM COMUM EM REDES SOCIAIS!//

const amizadesDaJuliana = [
  "Erickson",
  "Cleyton",
  "Laura",
  "Claudio",
  "Sheila",
  "Vinicius",
  "Leticia",
];
const amizadesDoAdilson = [
  "Leticia",
  "Guilherme",
  "Cleyton",
  "Ivan",
  "Vinicius",
  "Gisele",
];
const amizadesEmComum = [];

for (
  let indexDaJuliana = 0;
  indexDaJuliana < amizadesDaJuliana.length;
  indexDaJuliana = indexDaJuliana + 1
) {
  for (
    let indexDoAdilson = 0;
    indexDoAdilson < amizadesDoAdilson.length;
    indexDoAdilson = indexDoAdilson + 1
  ) {
    if (
      amizadesDaJuliana[indexDaJuliana] === amizadesDoAdilson[indexDoAdilson]
    ) {
      amizadesEmComum.push(amizadesDoAdilson[indexDoAdilson]);
    }
  }
}
console.log(amizadesEmComum);

//CALCULE OS PREÇOS//

const valoresProdutos = [10, 12, 8];
let somaTotal = 0;

for (indextotal = 0; indextotal < valoresProdutos.length; indextotal += 1) {
  somaTotal = somaTotal + valoresProdutos[indextotal];
}
console.log(somaTotal);

//ITEM POR ITEM//

const numeros = [1, 2, 3, 4, 5];

for (let index = 0; index < numeros.length; index += 1) {
  console.log(numeros[index]);
}

//ADICIONANDO PRODUTOS A LISTA//

const listaDeFrutas = ["banana", "maçã", "mamão", "goiaba"];
listaDeFrutas.push("manga");
for (let index = 0; index < listaDeFrutas.length; index += 1) {
  console.log(listaDeFrutas[index]);
}

//TABUADA ANINHADA 3,7//

const multiplicador = [3, 7];
let resultado;

for (let index = 0; index < multiplicador.length; index = index + 1) {
  for (let index2 = 1; index2 <= 9; index2 = index2 + 1) {
    resultado = multiplicador[index] * index2;
    console.log(multiplicador[index] + " x " + index2 + " = " + resultado);
  }
}

//IDENTIFICAR SE É PAR OU ÍMPAR E ADICIONAR AOS SEUS RESPECTIVOS//

const numeros1 = [1, 33, 103, 132, 270, 1320, 75];
const numerosPares = [];
const numerosImpares = [];

for (let index = 0; index < numeros.length; index = index + 1) {
  if (numeros[index] % 2 === 0) {
    numerosPares.push(numeros[index]);
  } else {
    numerosImpares.push(numeros[index]);
  }
}
console.log(numerosPares, numerosImpares);

//IDENTIFICAR CORES IGUAIS//

const coresMarcelo = [
  "azul",
  "vermelho",
  "preto",
  "rosa",
  "dourado",
  "verde",
  "cinza",
];
const coresJulia = ["branco", "marrom", "rosa", "dourado", "verde", "cinza"];

let contador = 0;

for (let indexJ = 0; indexJ < coresJulia.length; indexJ = indexJ + 1) {
  for (let indexM = 0; indexM < coresMarcelo.length; indexM = indexM + 1) {
    if (coresJulia[indexJ] === coresMarcelo[indexM]) {
      contador = contador + 1;
    }
  }
}
console.log(contador);

//APLICANDO FUNÇÃO!//

function imprimeSaudacao() {
  "Olá, Gisele!";
}
console.log(imprimeSaudacao);

function imprimeSaudacao() {
  const saudacao = "Olá, Gisele!";

  console.log("Eu sou um console e vou aparecer!");
  return saudacao;

  console.log("Eu sou um console e não vou aparecer 😭!");
}
imprimeSaudacao();

function imprimeSaudacao() {
  const saudacao = "Olá, Gisele!";
  return saudacao;
}

console.log(imprimeSaudacao());

function mostrarFrase() {
  return "Vamo que vamo!";
}
console, log(mostrarFrase);

function saudacao(nome) {
  return "Olá, " + nome + "!";

  //RESULTADO PEDIDOS DAS PIZZAS!//

  function clientePedido(numeroPedido) {
    if (numeroPedido === 1) {
      return "Pizza de Calabresa";
    } else if (numeroPedido === 2) {
      return "Pizza de Quatro Queijos";
    } else if (numeroPedido === 3) {
      return "Pizza de Frango com Catupiry";
    } else if (numeroPedido === 4) {
      return "Pizza de Brigadeiro";
    } else {
      return "Número do pedido inválido!";
    }
  }
}

//MEDIA DOS NUMEROS//

function mediaDosNumeros(arrayNumeros) {
  let soma = 0;
  let media = 0;

  for (let index = 0; index < arrayNumeros.length; index = index + 1) {
    soma = soma + arrayNumeros[index];
  }

  media = soma / arrayNumeros.length;

  return media;
}
