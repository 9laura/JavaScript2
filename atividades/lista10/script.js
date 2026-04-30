// 1 - Verificação de Maioridade

let idade = Number(prompt("Informe a idade"))
let verificacao = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log(verificacao.at)
console.log("--------------------")

// 2 - Par ou Ímpar

let num = Number(prompt("Informe um número"))
let par = num % 2 ? "Numero impar" : "Numero par"
console.log(par)
console.log("-------------------")

// 3 - Resultado Escolar

let media = Number(prompt("Informe o resultado escolar"))
let resultado = media >= 6 ? "Aprovado" : "Reprovado"
console.log(resultado)
console.log("-------------------")

// 4 - Saldo Bancário

let saldo = Number(prompt("Informe o saldo"))
let variavelSaldo = saldo > 0 ? "Saldo positivo" : "Saldo negativo"
console.log(variavelSaldo)
console.log("-------------------")

// 5 - Desconto na Compra

let valor = Number(prompt("Informe o valor da compra"))
let desc = valor >= 100 ? "Desconto de 10% Aplicado":"Você não receberá desconto"
console.log(desc)
console.log("-------------------")

// 6 - Entrada em Evento

let idade1 = Number(prompt("Qual sua idade"))
let evento = idade1 >= 18 ? "Entrada permitida" : "Entrada proibida" 
console.log(evento)
console.log("-------------------")

// 7 - Login Simples

let login = prompt("Informe o usuário")
let verifi = login == "admin" ? "Acesso liberado" : "Acesso negado"
console.log(verifi)
console.log("-------------------")

// 8 - Temperatura

let temp = Number(prompt("Informe a temperatura"))
let classTemp = temp > 30 ? "Está quente" : "Temperatura normal"
console.log(classTemp)
console.log("-------------------")

// 9 - Numbero positivo

let positivo = Number(prompt("Informe um número"))
let pos = positivo > 0 ? "Número postivo" : "Numero negativo ou zero"
console.log(pos)
console.log("-------------------")

// 10 - Faixa etária

let idade2 = Number(prompt("Informe a idade"))
let situacao2 = idade2 < 12? "Criança" : idade2 < 18 ? "Adolescente" : idade2 < 60 ? "Adulto" : "Idoso"
console.log(situacao2)
console.log("----------------------")

// 11 - Velocidade do veículo

let velocidade = Number(prompt("Informe a velocidade"))
let multa = velocidade > 80 ? "Multado" : "Dentro do limite"
console.log(multa)
console.log("----------------------")

// 12 - Compra Aprovada

let compra = Number(prompt("Qual o valor da compra?"))
let limite = Number(prompt("Informe o limite do cartão"))
let resultado3 = compra <= limite ? "Compra aprovada" : "Compra recusada"
console.log(resultado3)
console.log("----------------------")

// 13 - Sistema de Pontuação de Jogo

let pontuacao  = Number(prompt("Informe a pontuação do jogo"))
let rank = pontuacao < 100 ? "Iniciante" : pontuacao < 500 ? "Intermediário" : pontuacao < 1000 ? "Avançado" : "Mestre"
console.log(rank)