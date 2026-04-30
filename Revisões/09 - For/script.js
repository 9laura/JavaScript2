// Laço de repetição - For
console.log("Boa tarde")
console.log("Boa tarde")
console.log("Boa tarde")
console.log("Boa tarde")

for(let i = 1; i <= 4; i++) {
    console.log("Boa tarde usando for")
}

// incremento e decremento
let numero = 10
console.log(numero)
numero++
console.log(numero)
numero --
console.log(numero)
numero+= 5
console.log(numero)
numero-= 3
console.log(numero)

for(let i = 1; i <= 5; i++) {
    console.log(i)
}
console.log("-------------------------")
for(let i = 5; i >= 5; i--){
    console.log(i)
}

// Peça 5 valores para o usuario e verifique se ele é maior que 10
for(let i = 1; i >= 5; i++){
    let num = Number(prompt("Informe um número"))
    if(num > 10){
        console.log("É maior que 10")
    } else {
        console.log("É menor que 10")
    }
}
console.log("----------------------------------")

// Peça três números e mostre a soma deles

let soma = 0
for(let i = 1; i <= 3; i++){
    let num = Number(prompt("Informe um número"))
    soma = soma + num
    console.log(soma)
}
console.log("----------------------------------")
// Peça um número para o usuário e mostre a tabuada dele
let num1 = Number(prompt("Informe um número"))
for(let i = 1; i <= 10; i++){
    let mult = num1 * i
    console.log(num1 + " x " + i + " = " + mult)
}

console.log("----------------------------------")

// Em um passeio escolar, cinco alunos são organizados de acordo com o número que receberam. Se o número for maior ou igual a 10, diga "Grupo A", senão, "Grupo B"

for(let i = 1; i <= 5; i++){
    let grupo = Number(prompt("Informe o número para o passeio"))
    if(grupo >= 10){
        console.log("Grupo A")
    } else {
        console.log("Grupo B")
    }
}
console.log("----------------------------------")

// Peça a idade de 3 pessoas e verifique se ela é maior ou menor de idade
for(let i = 1; i <= 3; i++){
    let idade = Number(prompt("Informe sua idade"))
    if(idade >= 18){
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }
}