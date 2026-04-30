

/*1 - Nome em Minúsculo
Crie:
um input para digitar um nome
um botão "Converter"
um parágrafo para mostrar o resultado
Quando clicar no botão, o programa deve mostrar o nome todo em letras minúsculas.*/

function converter() {
console.log("1- Nome em Minúsculo")
let nome = document.getElementById("nome").value
let resultado = document.getElementById("resultado")
resultado.innerText = nome.toLowerCase()
}


/*2 - Quantidade de Letras do Nome
Crie um programa que:
receba um nome digitado
ao clicar no botão "Contar letras", mostre:*/

function contar() {
console.log("2- Quantidade de Letras do Nome")
let nome2 = document.getElementById("nome2").value
let resultado2 = document.getElementById("resultado2")
resultado2.innerText = "O nome " + nome2 + " tem " + nome2.length + " letras."
}

//3
function ultimaLetra() {
console.log("3- Última letra do nome")
let nome3 = document.getElementById("nome3").value
let resultado3 = document.getElementById("resultado3")
resultado3.innerText = "A última letra do nome " + nome3 + " é: " + nome3[nome3.length-1]
}

function primeirasQuatro() {
console.log("4- Primeiras letras do nome")
   let nome4 = document.getElementById("nome4").value
let resultado4 = document.getElementById("resultado4")
resultado4.innerText = "As primeiras 4 letras do nome " + nome4 + " são: " + nome4.substring(0, 4)
}

    function ultimasTres() {
console.log("5- Últimas letras do nome")
let nome5 = document.getElementById("nome5").value
let resultado5 = document.getElementById("resultado5")
resultado5.innerText = "As últimas 3 letras do nome " + nome5 + " são: " + nome5.slice(-3)
}

function nomeSobrenome() {
  let nome6 = document.getElementById("nome6").value
     let sobrenome6 = document.getElementById("sobrenome6").value
    let resultado6 = document.getElementById("resultado6")
    resultado6.innerText = "O nome é: " + nome6 + " " + sobrenome6
}

function primeiraDestaque() {
    let nome7 = document.getElementById("nome7").value
    let resultado7 = document.getElementById("resultado7")
    resultado7.innerText = "A primeira letra do nome " + nome7 + " é: " + nome7[0].toUpperCase()
}
function nomeFormatadoo() {
    let nome8 = document.getElementById("nome8").value
    let resultado8 = document.getElementById("resultado8")
    resultado8.innerText = "Olá, " + nome8.toUpperCase() + "! Seja bem-vinda ao sistema."
}

function curtoOuLongo() {
    let nome9 = document.getElementById("nome9").value
    let resultado9 = document.getElementById("resultado9")
if (nome9.length <= 5) {
 resultado9.innerText = "O nome " + nome9 + " é curto."
    }
    else {
        resultado9.innerText = "O nome " + nome9 + " é longo."
    }
}