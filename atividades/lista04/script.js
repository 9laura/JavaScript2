// Filmes favoritos

let filmes = ["About Time", "Diario de uma paixão", "Lala Land"]
console.log(filmes[1])
console.log("-----------------------------------------------")

// Criando e acessando um array

let frutas = ["Banana", "Maçã", "Abacate", "Melão", "Morango"]
console.log(frutas[3])
console.log("-----------------------------------------------")

// Adicionando elementos

let cores = ["Vermelho", "Verde", "Azul"]
cores.push("Roxo", "Preto")
for(let i = 0; i < 5; i++){
    console.log(cores[i])
}
console.log("-----------------------------------------------")

// Removendo elementos

let num = ["1", "2", "3","4"]
num.pop()
for(let i = 0; i < 4; i++){
    console.log(num[i])
}
console.log("-----------------------------------------------")

// Adicionando no início

let cidade = ["Poá", "Suzano"]
cidade.unshift = ("Mogi")
for(let i = 0; i < 3; i++){
    console.log(cidade)
}
console.log("-----------------------------------------------")

// Removendo do início

let animais = ["Robson", "Cachorro","Gato"]
animais.shift()
for(let i = 0; i < 2; i++){
    console.log(animais)
}
console.log("-----------------------------------------------")

// Verificando o tamanho

let carros = ["BYD", "Fusca 2.0", "Onix","Ford KÁ"]
console.log(carros.length)
console.log("-----------------------------------------------")

// Operações Combinadas
let num2 = ["501","502","503"]

// Vetor Vazio
let numeros= []
for(let i = 0; i < 6; i++){
    let num = Number(prompt("Informe a nota"))
    numeros.push(num)
}
for(let i = 0; i < 6; i++){
    console.log(numeros)
}

