let multiplicar = function(num1, num2) {
    return num1 * num2
}
let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))
let total = multiplicar(num1, num2)
console.log("A multiplicação de ", num1, " e ", num2, " é: ", total
)

/* Uma empresa solicitou um sistema de desconto, crie um função
que recebe quanto um usuário pagou em uma compra, se for maior
que 300 de 15% de desconto e mostre o novo valor a ser pago,
senao, mostre, "sem desconto" */

let desconto = function(valorCompra) {
        if (valorCompra > 300) {
            let valorDesconto = valorCompra - (valorCompra * 0.15)
        return valorCompra
    } else {
        return "Sem desconto"
    }
    }
let valorCompra = Number(prompt("Digite o valor da compra"))
console.log(desconto(valorCompra))
console.log("-------")

/* Crie uma função, com um laço de repetição do 1 ao 50 e mostre
apenas os numeros pares */

let numerosPares = function() {
    for (let i = 1; i <= 50; i++) {
        let resto = i % 2
        if (resto === 0) {
            return i //2
        }
   }
 } console.log(numerosPares())

/* Crie uma função que pede a idade de um usuário e mostra
quantos meses e dias ele viveu (coloque isso em um único return,
considere dias como 365) */

let idade = function(){
    let idadeUser = Number(prompt("Digite a idade: "))
    let meses = idadeUser * 12
    let dias = idadeUser * 365
    return "Você viveu " + meses + " meses e " + dias + " dias"
}
console.log(idade())
