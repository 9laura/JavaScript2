// Classificação de Nota 

let nota = Number(prompt("Informe a nota"))
if(nota >= 9 ){
    console.log("Excelente!")
} else if (nota >= 7){
    console.log("Bom")
} else if(nota >= 5){
    console.log("Regular")
} else{
    console.log("Insuficiente")
}
console.log("-----------------------")

// Sistema de Aprovação Escolar

let aprov = Number(prompt("Informe a nota para aprovação escolar"))
let faltas = Number(prompt("Informe o número de faltas"))
if(aprov >= 7 && faltas <= 10 ){
    console.log("Aprovado")
} else if(aprov >= 5 && faltas <= 10){
    console.log("Recuperação")
} else{
    console.log("Demais casos")
}
console.log("-----------------------")

// Verificação de Idade

let idade = Number(prompt("Qual sua idade?"))
if(idade >= 12 && idade < 18){
    console.log("Adolescente")
} else if (idade >= 18 && idade <= 59){
    console.log("Adulto")
} else if (idade < 12){
    console.log("Criança")
} else {
    console.log("Idoso")
}
console.log("-------------------------------")

// Classificação de Temperatura

let temp = Number(prompt("Informe a temperatura atual"))
if (temp >= 35){
    console.log("Muito quente")
} else if(temp >= 25){
    console.log("Quente")
} else if (temp >= 15){
    console.log("Agradável")
} else {
    console.log("Frio")
}
console.log("------------------------")

// Sistema de Descontos

let pro = Number(prompt("Informe o valor da compra"))
if(pro >= 500){
    console.log("20% de desconto")
} else if(pro >= 300){
    console.log("15% de desconto")
} else if (pro >= 100){
    console.log("10% de desconto")
} else{
    console.log("Sem desconto")
}
console.log("------------------------")

// Classificação de Velocidade 

let velocidade = Number(prompt("Informe o número de velocidade"))
if(velocidade <= 60){
    console.log("Dentro do limite")
} else if (velocidade <= 80){
    console.log("Atenção")
} else if (velocidade <= 100){
    console.log("Multa leve")
} else {
    console.log("Multa grave")
}
console.log("------------------------")

// Turno de Estudo

let turno = prompt("Informe o turno (M/V/N)")
if(turno == "M"){
    console.log("Matutino")
} else if (turno == "V"){
    console.log("Vespertino")
} else if (turno == "N"){
    console.log("Noturno")
} else {
    console.log("Turno inválido")
}
console.log("------------------------")

// Avaliação de IMC

let imc = Number(prompt("Informe seu IMC"))
if(imc < 18.5){
    console.log("Abaixo do peso")
} else if(imc < 25){
    console.log("Peso normal")
} else{
    console.log("Sobrepeso")
}
console.log("------------------------")

// Classificação de Pontuação em Jogo

let jogo = Number(prompt("Informe a pontuação no jogo"))
if(jogo >= 1000){
    console.log("Nível Mestre")
} else if (jogo >= 700){
    console.log("Nível Avançado")
} else if (jogo >= 400){
    console.log("Nível Intermediário")
} else {
    console.log("Iniciante")
}
console.log("------------------------")

// Verificação de Horário

let hora = Number(prompt("Informe a hora do dia"))
if(hora >= 6 && hora <= 11){
    console.log("Bom dia")
} else if(hora >= 12 && hora <= 17){
    console.log("Boa tarde")
} else if (hora >=18 && hora <= 23){
    console.log("Boa noite")
} else if (hora >= 0 && hora <= 5){
    console.log("Boa madrugada")
} else {
    console.log("Hora inválida")
}
console.log("------------------------")

// Categoria do produto

let codigo = Number(prompt("Informe o código do produto (1 a 4)"))
if(codigo == 1){
    console.log("Alimento")
} else if(codigo == 2){
    console.log("Eletrônico")
} else if(codigo == 3){
    console.log("Roupas")
} else if(codigo == 4){
    console.log("Livros")
} else {
    console.log("Categoria inválida")
}
console.log("------------------------")

// Situação Financeira

let saldo = Number(prompt("Informe o saldo"))
if(saldo >= 2000){
    console.log("Ótima")
} else if (saldo >= 1000){
    console.log("Boa")
} else if (saldo >= 0){
    console.log("Regular")
} else {
    console.log("Endividado")
}
console.log("------------------------")

// Classificação de Idade para CNH

let cnh = Number(prompt("Informe a idade para CNH"))
if(cnh < 18){
    console.log("Não pode dirigir")
} else if (cnh >= 18 && cnh < 65){
    console.log("Pode dirigir")
} else if (cnh >= 65){
    console.log("Renovação especial")
} else {
    console.log("Idade inválida")
}
console.log("------------------------")

// Avaliação de Atendimento

let feed = Number(prompt("Mande uma avaliação do atendimento (0 a 10)"))
if(feed >= 9){
    console.log("Excelente")
} else if(feed >= 7){
    console.log("Bom")
} else if ( feed >= 5){
    console.log("Regular")
} else {
    console.log("Ruim")
}