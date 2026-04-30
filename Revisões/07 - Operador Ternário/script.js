let idade = 18
let situacao

if (idade >= 18){
    situacao = "Maior de idadde"
} else {
    situacao = "Menor de idade"
}

console.log(situacao)
console.log("--------------------------")
let idade2 = 18
let situacao2 = idade2 >= 18? "Maior de idade" : "Menor de idade"
console.log(situacao2)
console.log("----------------------")

let senha = prompt("Qual a senha")
let acesso = senha == "1234" ? "Acesso permitido" : "Acesso negado"
console.log(acesso)

console.log("----------------------")

let num = Number(prompt("Informe um número"))
let resultado = num % 2 ? "Número impar" : "Número par"
console.log(resultado)

console.log("----------------------")

let temp = Number(prompt("Qual a temperatura atual?"))
let calor = temp >= 30 ? "Está calor" : "Não está calor"
console.log(calor)

console.log("----------------------")

let num1 = Number(prompt("Informe um número"))
let pos = num1 > 0 ? "Número positivo" :  num1 == 0 ? "Esse número é igual a zero" : "Esse número é negativo"
console.log(pos)
console.log("-----------------------")

let nota = Number(prompt("Informe a nota"))
let classi = nota >= 9 ? "Excelente!" : nota >= 7 ? "Bom!" : nota >= 5 ? "Regular" : "Reprovado"
console.log(classi)