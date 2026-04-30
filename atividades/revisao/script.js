/* Peça dois numeros ao usuario e crie uma função que mostre qual é o maior numero entre eles. */

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

/* Uma empresa deseja fazer um sistema de aumento de salario com
base em alguns requisitos, pergunte qual o salario e a quantos
anos trabalha na empresa. Se o salario for menor que 3000 e 05
anos forem maior que 3, de 500 reais de aumento e mostre o novo
salario, senao, mostre, "sem aumento" */

function aumentoSalario(salario, anosTrabalho) {
    if (salario < 3000 && anosTrabalho > 3) {
        return salario + 500
    } else {
        return "Sem aumento"
    }
}
let salario = Number(prompt("Digite o salário: "))
let anosTrabalho = Number(prompt("Digite os anos de trabalho: "))
let resultadoAumento = aumentoSalario(salario, anosTrabalho)
console.log("O novo salário é: ", resultadoAumento)
console.log("-------")

