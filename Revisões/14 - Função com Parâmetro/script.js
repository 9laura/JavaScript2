//Função sem parâmetro
function saudacao() {
let nome = prompt ("Qual seu nome? ")
console.log("Bem-vindo",nome)
}
saudacao()
console.log("-----")
//Função com parâmetro
function saudacao2(nome2) {
console.log("Bem vindo", nome2)

let nome2 = prompt("Qual seu nome2?")
saudacao2(nome2)
saudacao2("Joanna")
}
console. log("--------")
function somar(num1, num2) {
let soma = num1 + num2
console.log(soma)

somar(5,8)
somar(12,17)
somar(9,651)
let num1 = Number(prompt("informe o primeiro valor"))
let num2 = Number(prompt("informe o segundo valor"))
somar(num1,num2)
console.log(soma)
}

console.log("----------------")
/* peça um número para o usuário, e
mostre a contagem do 1 até
chegar a esse número */

function contagem(num) {
for (let i = 1; i <= num; i++) {
    console.log(i)
}
}
let num = Number(prompt("Digite um número para a contagem"))
contagem(num)
console.log("-------")
/* Peça a idade para o usuário e crie uma função que verifique se
ele é maior ou menor de idade */
let idade = Number(prompt("Digite sua idade"))
function verificarIdade(idade) {
    if (idade >= 18) {
        console.log("Você é maior de idade.")
    } else {
        console.log("Você é menor de idade.")
    }
}

verificarIdade(idade)