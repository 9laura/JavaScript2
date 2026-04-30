// Estrutura Condicional Encadeada

let nota = 7
if(nota >= 9){
    console.log("Aprovado")
} else if (nota >= 5){
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}
console.log("-------------------------------")

// Classificação de idade

let idade = Number(prompt("Qual sua idade?"))
if(idade >= 12 && idade < 18){
    console.log("Adolescente")
} else if (idade >= 18 && idade <= 50){
    console.log("Adulto")
} else if (idade < 12){
    console.log("Criança")
} else {
    console.log("Idoso")
}
console.log("-------------------------------")

let clima = prompt("Como está o clima (calor/frio)")
if(clima == "calor" || clima == "frio"){
    console.log("Está um clima bom para viajar")
} else {
    console.log("Clima inválido")
}
console.log("-------------------------------")

let n = 5 // Atribui valor
console.log(5 == "5") // compara os valores
console.log(5 === "5") // compara a classe e o valor

// Pergunte o dia da semana, se for sabado ou domingo, mostre "fim de semana", senão, mostre "dia útil"

let dia = prompt("Informe o dia da semana")
if(dia == "sabado" || dia == "domingo"){
    console.log("Fim de semana")
} else {
    console.log("Dia útil")
}

// pergunte a temperatura para o usuário e mostre um destino com base nisso. Se for maior ou igual a 30, "Praia", Se for maior ou igual a 22, "Parque", Se for mair ou igual a 15, "Shopping", se for menor que 15, "ficar em casa"

let temp = Number(prompt("Informe o clima para escolher o destino"))
if(temp >= 30){
    console.log("Praia")
} else if (tempo >= 22){
    console.log("Parque")
} else if (temp >= 15 ){
    console.log("Shopping")
} else {
    console.log("Ficar em casa")
}

// Ao comprar um igresso, o usuário deve informar a idade dele e será direcionado para o filme com base nisso.
//  Se a idade for menor que 10, pode ver filmes com a classificação "livre" e a idade for menor ou igual a 13, pode ver filmes com a classificação "+10"
// Se a idade for maior ou igual a 14 e menor ou igual a 17, pode ver filmes com a classificação "14+"
// Se a idade for maior ou igual a 18, pode ver qualquer categoria de filme

let classi = Number(prompt("Informe a idade para classificar o filme"))
if(classi < 10){
    console.log("Pode assistir filmes com a classificação 'Livre'")
} else if(classi >= 10 || classi <= 13) {
    console.log("Pode assistir filmes com a classificação '10+'")
} else if(classi >= 14 && classi <= 17){
    console.log("Pode assistir filmes com a classificação '14+'")
} else {
    console.log("Pode assistir qualquer filme")
}