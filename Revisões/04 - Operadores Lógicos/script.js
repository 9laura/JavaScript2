// Operadores Lógicos
// || ou apenas um prcisa ser verdadeiro
// ! não inverte o true para false e vice-versa

let idade = 20
let convite = false
console.log(idade >= 18 && convite == true) // true
console.log("----------------------------------")

let ingresso = "sim"
let nomeLista = "sim"
console.log(ingresso == "sim " || nomeLista == "sim")
console.log("----------------------------------")

let calor = true
console.log(calor)
console.log(!calor)

//Para assistir um filme de terror no cinema é preciso ter idade maior ou igual a 14 ou estar acompanhado do responsável

let idade1 = Number(prompt("Informe sua idade"))
let responsavel = prompt("Está acompanhado de um responvsável?")
console.log(idade1 >= 14 || responsavel == "Sim")

// Para ser aprovado no Senai o aluno precisa ter nota maior ou igual a 50 e ter frequência maior ou igual a 75

let nota = Number(prompt("Qual sua nota?"))
let freq = Number(prompt("Qual foi sua frequência"))
console.log(nota >= 50 && freq >= 75)

// Para fazer login no computador, o aluno deve colocar o usuário igual a TDS2 e a senha igual a senai2026

let login = prompt("Informe o usuário")
let senha = Number(prompt("Informe a senha"))
console.log(login == "TDS2" && senha == "senai2026")
