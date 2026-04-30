// Filmes favoritos
let filmes = ["Little Women", "Aftersun", "Florida Project"];
console.log("1 - Primeiro filme:", filmes[0]);

// Criando e acessando um array
let frutas = ["Maçã", "Banana", "Uva", "Laranja", "Manga"];
console.log("2 - Terceira fruta:", frutas[2]);

// Adicionando elementos
let cores = ["Azul", "Verde", "Vermelho"];
cores.push("Amarelo");
console.log("3 - Cores atualizadas:");
for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}

// Removendo elementos
let numeros = [10, 20, 30, 40];
numeros.pop();
console.log("4 - Números atualizados:");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// Adicionando no início
let cidades = ["São Paulo", "Rio de Janeiro"];
cidades.unshift("Belo Horizonte");
console.log("5 - Cidades atualizadas:");
for (let i = 0; i < cidades.length; i++) {
    console.log(cidades[i]);
}

// Removendo do início
let animais = ["Cachorro", "Gato", "Coelho"];
animais.shift();
console.log("6 - Animais atualizados:");
for (let i = 0; i < animais.length; i++) {
    console.log(animais[i]);
}

// Verificando o tamanho
let carros = ["Fusca", "Civic", "Fox", "Ferrari"];
console.log("7 - Quantidade de carros:", carros.length);

// Operações Combinadas
let num2 = []
for (let i = 0; i < 3; i ++){
    let nomeNum2 = prompt("Informe um número")
    num2.push(nomeNum2)
}
num2.unshift("333")
num2.pop()
num2.shift()
console.log(num2.length)

// Vetor Vazio
let notas= []
for(let i = 0; i < 6; i++){
    let nota = Number(prompt("Informe a nota"))
    notas.push(nota)
}
for(let i = 0; i < notas.length; i++){
    console.log(notas[i])
}