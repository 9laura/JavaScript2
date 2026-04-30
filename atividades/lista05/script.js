// 1 - Contador Simples

let cont1 = 1
do {
    console.log(cont1)
    cont1++
} while(cont1 <= 20)
console.log("---------------------------------------")

// 2 - Resposta do usuário

let usuario
do {
    usuario = prompt("Deseja continuar? (s ou n)")
}while(usuario != "s")
    
console.log("---------------------------------------")

// Sequência numérica definida pelo usuário

let nFinal = Number(prompt("Informe o número final da sequência"))
let cont = 1
do{
    console.log(cont)
    cont++
} while(cont <= nFinal)

console.log("---------------------------------------")

// 4 - Contador com salto

let aux = 1
do{
    console.log(aux)
    aux+=2
} while (aux <= 31)

console.log("---------------------------------------")

// 5 - Classificação Numérica

let num
let cont2 = 1
do{
    num = Number(prompt("Informe um número"))
    if (num > 0){
        console.log("Número Positivo")
    } else if (num < 0){
        console.log("Número negativo")
    } else {
        console.log("O numero é 0")
    }
    cont2++
} while(cont2 <= 5)

console.log("-----------------------------------------")

// 6 - Operações matemáticas

let conta 
do{
    conta = prompt("Deseja criar uma conta? (s ou n)")
    if(conta == "s"){
    let n1 = Number(prompt("Informe o primeiro número"))
    let n2 = Number(prompt("Informe o segundo número"))
    let soma1 = n1 + n2
    console.log("O resultado da soma é: "+soma1)
    }
} while (conta == "s")

// 7 - Repetição de mensagem

let cont3 = 1
do {
    console.log("Estudando JavaScript")
    cont3++
} while(cont3 <= 10)
console.log("---------------------------------------")

// 8 - Validação de número positivo

let n3 
do {
    n3 =  Number(prompt("Informe um número"))
} while(n3 <= 0)

// 9 - Controle de tentativas

let senha 
do{
    senha = prompt("Informe a senha")
} while(senha != "senai2026")
console.log("Acesso liberado")

// 10 - Soma de números

let soma = 0
let resposta 
let num4 
do {
    num4 = Number(prompt("Informe um número para soma:"))
    soma = soma + num4
    resposta = prompt("Deseja realizar uma soma? (s ou n)")

} while(resposta == "s")

console.log("O resultado da soma é: "+ soma)
console.log("----------------------------")
