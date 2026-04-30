//1
let num1 = Number(prompt("Digite um numero"))

function dobro(num2) {
    let resultado = num2 * 2
    console.log("O dobro de ", num2, " é ", resultado)
}
dobro(num1)
console.log("-------")

//2
function calcularArea(base, altura) {
    let area = base * altura
    console.log("A área do retângulo é: ", area)
}
let base = Number(prompt("Digite a base do retângulo"))
let altura = Number(prompt("Digite a altura do retângulo"))
calcularArea(base, altura)
console.log("-------")

//3
function converterParaFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32
    console.log(celsius, "°C é igual a ", fahrenheit, "°F")
}
let celsius = Number(prompt("Digite a temperatura em Celsius"))
converterParaFahrenheit(celsius)
console.log("-------")

//4
function verificarNota(nota) {
    if (nota >= 7) {
        console.log("Aprovado")
    } else if (nota >= 5 && nota < 7) {
        console.log("Recuperação")
    } else {
        console.log("Reprovado")
    }
}
let nota = Number(prompt("Digite a nota do aluno"))
verificarNota(nota)
console.log("-------")

//5
function verificarNumero(num) {
    if (num > 0) {
        console.log("Número positivo")
    } else if (num < 0) {
        console.log("Número negativo")
    } else {
        console.log("Número é zero")
    }
}
let num = Number(prompt("Digite um número"))
verificarNumero(num)
console.log("-------")

//6
function contarPares(par) {
    for (let i = 0; i <= par; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}
let par = Number(prompt("Digite um número"))
contarPares(par)
console.log("-------")

//7
function somaIntervalos(inicio, fim) {
    let soma = 0
    for (let i = inicio; i <= fim; i++) {
        soma += i
    }
    console.log("A soma dos números entre ", inicio, " e ", fim, " é: ", soma)
}
let inicio = Number(prompt("Digite o início do intervalo"))
let fim = Number(prompt("Digite o fim do intervalo"))
somaIntervalos(inicio, fim)
console.log("-------")

//8
function repetirNome(nome, numero) {
    for (let i = 0; i < numero; i++) {
        console.log(nome)
    }
}
let nome = prompt("Digite um nome")
let numero = Number(prompt("Digite um número"))
repetirNome(nome, numero)
console.log("-------")

//9
function tabuada(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num, " x ", i, " = ", num * i)
    }
}
let num3 = Number(prompt("Digite um número para a tabuada"))
tabuada(num3)
console.log("-------")

//10
function contagemPersonalizada(num4) {
    for (let i = num4; i >= 0; i--) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}
let impar = Number(prompt("Digite um número"))
contagemPersonalizada(impar)
console.log("-------")

//11
function mediaAluno(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3
    if (media >= 7) {
        console.log("A média do aluno é: ", media,". Aprovado")
    } else if (media >= 5 && media < 7) {
        console.log("A média do aluno é: ", media,". Recuperação")
    } else {
        console.log("A média do aluno é: ", media, ". Reprovado")
    }
}
let nota1 = Number(prompt("Digite a primeira nota do aluno"))
let nota2 = Number(prompt("Digite a segunda nota do aluno"))
let nota3 = Number(prompt("Digite a terceira nota do aluno"))
mediaAluno(nota1, nota2, nota3)