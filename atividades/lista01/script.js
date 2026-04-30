// Declare duas variáveis númericas e exiba

let numero1 = 23
let numero2 = 18

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let div = numero1 / numero2
let modulo = numero1 % numero2

console.log(soma)
console.log(subtracao)
console.log(div)
console.log(multiplicacao)
console.log(modulo)

// Área de um Retângulo

let largura = Number(prompt("Qual a largura do retângulo?"))
let altura = Number(prompt("Qual a altura do retângulo?"))
let area = largura * altura
console.log("A área total é: "+area)

// Dobro e metade

let numero3 = 14
let dobro = numero3 * 2
let metade = numero3 / 2
console.log("O dobro do número é: "+dobro+ "\nA metade do número é: "+ metade)

// Média Aritmética

let nota1 = 10
let nota2 = 4
let nota3 = 7

let media = (nota1 + nota2 + nota3) / 3
console.log("A média total é: "+media)

// Conversão de Temperatura

let temp = 25
let conversao = (temp * 9/5) + 32
console.log("A temperatura em graus Fahrenheit é igual a: "+conversao)

// Valor da compra

let preco = Number(prompt("Qual o valor do produto?"))
let quantidade = Number(prompt("Qual a quantidade do produto?"))
let total = preco * quantidade
console.log("O total a pagar é: R$"+total)

// Divisão da Conta

let conta = Number(prompt("Qual o valor total da conta? "))
let amigos = Number(prompt("Quantos repartiram a conta?"))
let totalConta = conta / amigos
console.log("O total da conta a ser pago é R$: "+totalConta)

// Idade em Meses

let idade = Number(prompt("Qual a idade?"))
let idadeMeses = idade * 12
console.log("A idade em meses é igual a: "+idadeMeses)

// Divisão Exata

let num1 = Number(prompt("Informe o primeiro número: "))
let num2 = Number(prompt("Informe o segundo número: "))

let divisao = num1 / num2
let resto = num1 % num2
console.log("O resultado da divisão é: "+divisao+"\nO resto da divisão é: "+resto)

// Horas em Minutos
let hora = Number(prompt("Informe as horas: "))
let minutos = hora * 60
console.log("O valor em horas convertido para minutos é igual a: "+minutos)
