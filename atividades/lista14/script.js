//1
function dobro(num) {
    return num * 2
}
let num1 = Number(prompt("Digite um número: "))
let resultadoDobro = dobro(num1)
console.log("O dobro de ", num1, " é: ", resultadoDobro)
console.log("-------")

//2

function somar (num1, num2) {
    return num1 + num2
}
let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))
let resultadoSoma = somar(num1, num2)
console.log("A soma de ", num1, " e ", num2, " é: ", resultadoSoma)
console.log("-------")

//3
function areaQuadrado(lado) {
    return lado * lado
}
let lado = Number(prompt("Digite o lado do quadrado: "))
let resultadoArea = areaQuadrado(lado)
console.log("A área do quadrado é: ", resultadoArea)
console.log("-------")

//4
function antecessor(num) {
    return num - 1
}
let num = Number(prompt("Digite um número: "))
let resultadoAntecessor = antecessor(num)
console.log("O antecessor de ", num, " é: ", resultadoAntecessor)
console.log("-------")

//5
function tamanhoTexto(texto){
    return texto.length
}
let texto = prompt("Digite um texto: ")
let resultadoTamanho = tamanhoTexto(texto)
console.log("Esse texto tem ", resultadoTamanho, " caracteres.")
console.log("-------")

//6
function maiorNumero(num1, num2) {
    if (num1 > num2) {
        return num1
    } else if (num2 > num1) {
        return num2
    } else {
        return "Os números são iguais"
    }
}
let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))
let resultadoMaior = maiorNumero(num1, num2)
console.log("O maior número é: ", resultadoMaior)
console.log("-------")

//7
function verificarIdade (idade) {
    if (idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}
let idade = Number(prompt("Digite a idade: "))
let resultadoIdade = verificarIdade(idade)
console.log("A pessoa é: ", resultadoIdade)
console.log("-------")

//8
function parOuImpar(num) {
    if (num % 2 === 0) {
        return "Par"
    } else {
        return "Ímpar"
    }
}
let num = Number(prompt("Digite um número: "))
let resultadoParImpar = parOuImpar(num)
console.log("O número ", num, " é: ", resultadoParImpar)
console.log("-------")

//9
function media (num1, num2, num3) {
    return num1 + num2 + num3 / 3
}

let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))
let num3 = Number(prompt("Digite o terceiro número: "))
let resultadoMedia = media(num1, num2, num3)
console.log("A média dos números é: ", resultadoMedia)
console.log("-------")

//10
function calcularDesconto(preco, desconto) {
    return preco - (preco * 10 / 100)
}
let preco = Number(prompt("Digite o preço do produto: "))
let resultadoDesconto = calcularDesconto(preco, 10)
console.log("O valor com desconto é: ", resultadoDesconto)