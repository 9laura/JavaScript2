let texto = "Juliana"
let maiuscula = texto.toUpperCase()
let minuscula = texto.toLowerCase()

console. log(maiuscula)
console.log(minuscula)
//equalsIgnoreCase - Java
//if(nome.toLowerCase() == "juliana")

//
function mudar() {
let texto = document.getElementById("texto").value
let maiusculo = document.getElementById("maiusculo")
let minusculo = document.getElementById("minusculo")

maiusculo. innerText = texto. toUpperCase()
minusculo. innerText = texto. toLowerCase()
}



function parte() {
let palavra = document.getElementById("palavra").value
let palavra2 = document.getElementById("palavra").value
let resultado = document.getElementById("resultado")

// SLICE(INICIO, FIM)
let parte = palavra.šlice(1,5)
//C A N E T A
//0 1 2 3 4 5
resultado.innerText = parte
palavra1.value = "" //para apagar o input

let final = document.getElementById("final")
//S E N A I
//0 1 2 3 4
// LENGTH = 5
final. innerText = palavra[palavra.length-1] // palavra[4] -> último caractere da palavra // palavra[0] -> primeiro caractere da palavra
}

/* Crie dois inputs cada um pedindo uma palavra para o usuário, crie um
botao "juntar" que mostra as duas palavras juntas em um <p> */

function juntar() {
let palavra1 = document.getElementById("palavra1").value
let palavra2 = document.getElementById("palavra2").value
let resultado = document.getElementById("resultado")
resultado.innerText = palavra1 + " " + palavra2
palavra1.value = ""
palavra2.value = ""
}