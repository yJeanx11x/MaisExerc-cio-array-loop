// Revisão de JavaScript Básico

// Lista de tarefas
// Inicialize um array vazio para representar uma lista de tarefas.

// Crie uma função para adicionar novas tarefas ao array.

// Depois, use um loop para exibir todas as tarefas armazenadas no arraya

const listaDeTarefas = [];
function addtarefas(add) {
  listaDeTarefas.push(add);
}
addtarefas("tomar banho");
console.log(listaDeTarefas);

// Verifique se um número é par ou ímpar
// Crie uma função que receba um número como argumento e retorne uma mensagem dizendo se ele é par ou ímpar.
// Use uma condicional para checar o resultado da divisão por 2.
function imparPar(n1) {
  if (n1 % 2 == 0) console.log(`O número ${n1} é Par`);
  else console.log(`O número ${n1} é Impar`);
}
imparPar(2);

// Desenvolva um jogo onde o computador sorteia um número entre 1 e 10.
// O usuário deve tentar adivinhar o número. Para cada tentativa, exiba uma mensagem se ele acertou ou errou.

// Use um loop para permitir que o usuário continue tentando até acertar e uma condicional para validar a resposta.

const numero1a10 = 8;
const tentativa = 8;
for (let i = 1; i < 2; i++) {
  if (tentativa != numero1a10) {
    console.log("Tente Novamente");
  }
  if (tentativa == numero1a10) {
    const numero1a10 = Math.random().toFixed(1) * 10;
    console.log("Você acertou Parabéns");
  }
}

//  Calcule a idade de uma pessoa

// Crie uma função que receba o ano de nascimento de uma pessoa e calcule a idade com base no ano atual.

// Use variáveis para armazenar o ano atual e o ano de nascimento e uma condicional para verificar se o valor inserido é válido.
// Jogo de adivinhação de número

function anoDeNacimento(ano) {
  const suaIdade = 2024 - ano;
  console.log(`Sua Idade é : ${suaIdade}`);
}
anoDeNacimento(2001);

// Manipulação de Arrays e Objetos

// 1 Contador de palavras

// Peça para o usuário inserir uma frase e conte quantas palavras ela possui.

// Divida a frase em palavras e use um método de array para contar a quantidade.

const palavra = "A curiosidade é o primeiro passo para grandes descobertas";

console.log(`A Palvra ${palavra} tem ${palavra.split(" ").length} palavras `);

// 2 Filtragem de notas
// Crie um array de objetos onde cada objeto representa um aluno com nome e nota.

// Crie uma função que filtre os alunos aprovados, com nota maior ou igual a 7.

// Exiba uma lista de aprovados.

const aluno = [
  { nome: "Jean", nota: 8 },
  { nome: "Lucas", nota: 3 },
  { nome: "Maria", nota: 10 },
  { nome: "Olivia", nota: 7 },
];
const aprovado = aluno.filter((obj) => obj.nota >= 7);

console.log(`Esses alunos forao aprovados`, aprovado);

// 3  Ordenação de produtos por preço

//  Crieum array de objetos para representar produtos, cada um com um nome e um preço.

// Ordene os produtos pelo preço (do menor para o maior) usando um método de array.

const produtos = [
  { nome: "Camiseta", preco: 29.99 },
  { nome: "Calça", preco: 79.99 },
  { nome: "Tênis", preco: 149.99 },
  { nome: "Boné", preco: 19.99 },
  { nome: "Mochila", preco: 99.99 },
  { nome: "Jaqueta", preco: 199.99 },
  { nome: "Relógio", preco: 249.99 },
  { nome: "Óculos de sol", preco: 89.99 },
];
const ordena = produtos.sort((a, b) => a.preco - b.preco);
console.log(ordena);

// 4 Lista de compras

// Crie uma lista (array) com itens de compras.

// Peça ao usuário para adicionar ou remover itens e exiba a lista atualizada a cada modificação.

const listaDeCompras = [
  "Leite",
  "Pão",
  "Ovos",
  "Arroz",
  "Feijão",
  "Frutas",
  "Vegetais",
  "Macarrão",
  "Café",
  "Açúcar",
];
console.log(listaDeCompras)
function addocompra(produtoss){
        listaDeCompras.push(produtoss)
        console.log(`${produtoss} Foi Adicionado na Sua Lista`)

}
addocompra('coca-cola')
console.log(listaDeCompras)

function removercompra(numerop){
        listaDeCompras.indexOf(numerop)
console.log(`${listaDeCompras[numerop]} Foi Removido da Sua Lista`)
}
removercompra(4)
