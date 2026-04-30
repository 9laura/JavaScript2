//Operadores Relacionais
// > maior    >= maior ou igual
// < menor    <= menor ou igual
// == igual   != diferente

console.log(5>10) // false
console.log(10>5) // true
console.log ("--------------------------------")
let idade = Number(prompt("Qual sua idade?"))
console.log(idade >= 18)
console.log ("--------------------------------")
let numero1 = Number(prompt("Informe um número"))
let numero2 = Number(prompt("Informe um número"))
console.log(numero1 > numero2)
console.log (numero1 < numero2)
console.log(numero1 == numero2)
console.log ("--------------------------------")

// Uma loja dá descontos nos produtos direto no caixa. Faça um programa que receba o valor pago pelo usuário, dê R$ 20,00 de desconto e mostre se o valor que será pago é maior ou igual a R$ 50,00

let valorPago = Number(prompt("Qual valor pago?"))
let desconto =  valorPago - 20
console.log(desconto >= 50)

// Pergunte o NIF de um funcionário, e verifique se:
// - é igual a SN1048630
// é diferente de SN1048630

console.log ("--------------------------------")
let funcionario = (prompt("Informe seu NIF"))
let nif = "SN1048630"
console.log(funcionario == nif)
console.log(funcionario != nif)