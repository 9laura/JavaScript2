// Laço de Repetição - While
let contador = 1
while(contador <= 5){
    console.log(contador)
    contador++
}
console.log("----------------------------------")
let resposta = prompt("Deseja continuar?")
while (resposta == "sim"){
    console.log("Bem vindo")
    resposta = prompt("Deseja Continuar?")
}

let contador1 = 1
let soma = 0
while(contador1 <= 3){
    let num = Number(prompt("Informe o número para soma"))
    soma = soma + num
    contador1 ++
}
 console.log("O resultado é: "+soma)
 console.log("----------------------------------")

 let nota = Number(prompt("Informe uma nota entre 0 e 10"))
 while(nota < 0 || nota > 10){
    nota = Number(prompt("Valor Inválido! Informe uma nota entre 0 e 10"))
 } 
 console.log("Nota válida")
 console.log("----------------------------------")

 let senha = prompt("Informe a senha do usuário")
while(senha != "senai2026"){
    senha = prompt("Tente novamente")
}
console.log("Login efetuado")
console.log("----------------------------------")

let login = prompt("Informe as credenciais de login")
let senha1 = prompt("Informe a senha do usuário")
while(login != "TDS2" && senha1 != "senai"){
    login = prompt("Login ou senha incorretos. Tente novamente")
    senha1 = prompt("Login ou senha incorretos. Tente novamente")
}
console.log("Login efetuado")