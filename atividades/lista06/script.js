// 01 - Verificação de maioridade

let idade = Number(prompt("Qual sua idade"))
if(idade >= 18){
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}
console.log("----------------------------------------------")
// 02 - Verificação de Paridade

let par = Number(prompt("Informe um número"))
let resto = par % 2
if(resto == 0){
    console.log("O número é par")
} else {
    console.log("O número é impar")
}
console.log("----------------------------------------------")

// 03 - Verificação de aprovado
let aluno = Number(prompt("Qual foi sua nota?"))
if(aluno >= 7 ){
    console.log("Você foi aprovado")
} else {
    console.log("Você reprovou.")
}
console.log("----------------------------------------------")

// 04 - Comparar Idade para Entrada em Evento

let idade1 = Number(prompt("Qual sua idade"))
if(idade1 >= 18){
    console.log("Entrada permitida")
} else {
    console.log("Entrada proibída")
}
console.log("----------------------------------------------")

// 05 - Verificar Senha

let senha = Number(prompt("Informe a senha"))
if(senha == 1234){
    console.log("Senha correta!")
} else {
    console.log("Senha incorreta")
}
console.log("----------------------------------------------")

// 06 - Verificar Temperatura

let temp = Number(prompt("Informe a temperatura atual"))
if(temp > 30){
    console.log("Está calor")
} else{
    console.log("Está frio")
}
console.log("----------------------------------------------")

// 07 - Verficar se Número é Positivo ou Negativo

let num = Number(prompt("Informe um número"))
if(num > 0){
    console.log("Número positivo")
} else {
    console.log("Número negativo")
}
console.log("----------------------------------------------")

// 08 - Verificar Saldo Bancário

let saldo = Number(prompt("Informe seu saldo bancário"))
let saque = Number(prompt("Informe o valor do qual quer sacar"))
if(saldo >= saque){
    console.log("Saque realizado")
} else {
    console.log("Saldo insuficiente")
}
console.log("----------------------------------------------")

// 09 - Verificar Desconto 

let valor = Number(prompt("Informe o valor da compra"))
if(valor >= 200){
    console.log("Desconto aplicado")
} else {
    console.log("Sem desconto")
}
console.log("----------------------------------------------")

// 10 - Verificar Número Maior

let n1 = Number(prompt("Informe um número"))
let n2 = Number(prompt("Informe outro número"))
if(n1 > n2){
    console.log("O primeiro número é maior")
} else {
    console.log("O segundo número é maior ou são iguais")
}
console.log("----------------------------------------------")

// 11 - Verificar Login

let nome = prompt("Informe o nome do usuário")
if(nome == "admin"){
    console.log("Acesso permitido")
} else {
    console.log("Pode melhorar")
}
console.log("----------------------------------------------")

// 12 - Classificação de Nota

let nota1 = Number(prompt("Informe uma nota"))
if(nota1 >= 9 ){
    console.log("Excelente!")
} else {
    console.log("Pode melhorar")
}
console.log("----------------------------------------------")

// 13 - Verificar horário

let hora = Number(prompt("Informe a hora (0 a 23)"))
if(hora >= 8 && hora < 18){
    console.log("Horário de funcionamento")
} else {
    console.log("Fora do horário")
} 
console.log("----------------------------------------------")

// 14 - Verificar Cadastro

let cadastro = prompt("Já possuí cadastro? (true or false)")
if(cadastro == "true"){
    console.log("Usuário cadastrado")
} else {
    console.log("Cadastro necessário")
}