// Laço de repetição Do While
console.log("----------------------------")

let contador = 1

while(contador <= 5){
    console.log("Usando While")
    contador++
}

// Do While
console.log("----------------------------")

let contador2 = 1
do{
    console.log("Usando DoWhile")
    contador2++
} while (contador2<=5)
console.log("----------------------------")

// Verificando  resposta
let resposta = prompt("Deseja continuar?")
do {
    resposta = prompt("Deseja continuar?")
} while (resposta == "sim")
    console.log("----------------------------")

let cont = 1
let n = Number(prompt("Informe o número"))
do {
    if(n >= 10){
        console.log("Maior ou igual a 10")
    } else {
        console.log("Menor que 10")
    }
    cont++
} while (cont <= 3)
    console.log("----------------------------")


let soma = 0
let cont1 = 1
let num 
do {
    num = Number(prompt("Informe um número para soma:"))
    soma = soma + num
    cont1++
} while(cont1 <= 3)
console.log("O resultado da soma é: "+ soma)
console.log("----------------------------")


let num2 = 0
do{
    console.log(num2)
    num2+=3
}while(num2 <= 99)