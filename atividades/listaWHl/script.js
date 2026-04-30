// 1 - Contador:

let cont = 1;
while (cont <= 10){
    console.log(cont)
    cont++
}
console.log("----------------------------------")

// 2 - Tabuada:

let n = Number(prompt("Informe o número"))
let cont1 = 1
while (cont1 <= 10){
    let mult = n * cont1
    console.log(n + " x " + cont1 + " = " +mult)
    cont1++
}
console.log("----------------------------------")

// 3 - Contagem Regressiva:
let cont2 = 10
while (cont2 >= 1){
    console.log(cont2)
    cont2--
}
console.log("----------------------------------")

// 4 - Verificação de senha:

let senha = Number(prompt("Informe a senha numérica"))
while (senha != 12345){
    console.log("Senha incorreta. Tente novamente")
    senha = Number(prompt("Informe a senha numérica"))
} console.log("Senha correta!")

console.log("----------------------------------")

// 5 - Contador: 

let cont4 = 50
while(cont4 <= 100){
    console.log(cont4)
    cont4++
}

console.log("----------------------------------")

// 6 - Sequência numérica:

let cont3 = 0
while (cont3 <= 100){
    console.log(cont3)
    cont3+= 5
}

console.log("----------------------------------")

// 7 - Mostrando mensagem:

let cont5 = 1
while(cont5 <= 5){
    console.log("Eu gosto de JavaScript")
    cont5++
}

console.log("----------------------------------")

// 8 - Exibindo o nome:

let nome = prompt("Informe seu nome")
let n1 = Number(prompt("Informe um número"))
let cont6 = 1
while(cont6 <= n1){
    console.log(nome)
    cont6++
}

console.log("----------------------------------")

// 9 - Validação de Nota

let nota = Number(prompt("Informe a nota (0 a 10)"))
while(nota > 10 || nota < 0){
    console.log("Valor Inválido. Tente novamente")
    nota = Number(prompt("Informe a nota (0 a 10)"))
} console.log("Nota Registrada com sucesso")

console.log("----------------------------------")

// 10 - Soma de Números

let soma = 0
let n2 = Number(prompt("Informe um número para soma"))
while(n2 > 0){
    soma = soma + n2
    n2 = Number(prompt("Informe um número para soma"))
} console.log("O resultado final é: "+soma)

console.log("----------------------------------")

// 11 - Menu Simples

console.log("Menu: \n1- Cadastrar\n2- Consultar\n3- Sair")
let menu = Number(prompt("Informe o número para onde deseja ser direcionado"))
while(menu != 3){
    console.log("Menu: \n1- Cadastrar\n2- Consultar\n3- Sair")
    menu = Number(prompt("Informe o número para onde deseja ser direcionado"))
} console.log("Você saiu do sistema")

console.log("----------------------------------")

// 12 - Contador de Pares 

let n3 = 1;
while (n3 <= 50) {
    if (n3 % 2 === 0) {
        console.log(n3);
    }
    n3++;
}

console.log("----------------------------------")


// 13 - Login
let usuario = prompt("Informe o usuário para o login")
let senha1 = Number(prompt("Informe a senha")) 
while (usuario != "admin" && senha1 != 123){
    console.log("Usuário ou senha incorretos. Tente novamente")
    usuario = prompt("Informe o usuário para o login")
    senha1 = Number(prompt("Informe a senha")) 
} console.log("Login realizado com sucesso")

console.log("----------------------------------")
// 14 - Jogo do Número 

let secreto = Number(prompt("Tente advinhar o número secreto"))
while (secreto != 7){
    if(secreto > 7){
        console.log("Tente um número menor")
    } else if(secreto < 7){
        console.log("Tente um número maior")
    }
    secreto = Number(prompt("Tente advinhar o número secreto"))
} console.log("Parabéns você acertou!")