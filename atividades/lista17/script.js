function mudarTexto() {

document.getElementById("mudar").innerText =
"Aprendendo DOM com JavaScript"
}

function boasVindas() {
let nome = document.getElementById("nome").value
document.getElementById("bemVindo").innerText =
"Bem-vindo ao sistema, " + nome
}

function mudarFrase() {
document.getElementById("frase").innerText =
"Manipulando HTML com JavaScript"
}

function verificarNome() {
let nome =
document.getElementById("nomeEnvio").value
let mensagem =
document.getElementById("mensagemNome")

if (nome === "") {
mensagem.innerText = "Digite um nome primeiro!"
} else {
mensagem.innerText = "Olá, " + nome
}
}

function modoEscuro() {
document.body.style.backgroundColor = "black"

document.body.style.color = "white"
}

function verificarNota() {
let nota =
parseFloat(document.getElementById("nota").value)
let resultado =
document.getElementById("resultadoNota")

if (nota >= 7) {
resultado.innerText = "Aluno aprovado"
} else {
resultado.innerText = "Aluno reprovado"
}
}

function mostrarSurpresa() {

document.getElementById("mensagemSurpresa").innerTe
xt = "Você encontrou a mensagem secreta!"
}

function destacarTexto() {
let texto = document.getElementById("texto")
texto.style.color = "red"
texto.style.fontWeight = "bold"
}

function contarCaracteres() {

let texto =
document.getElementById("textoDigitado").value
document.getElementById("contador").innerText =
"Você digitou " + texto.length + " caracteres"
}

function mudarCor() {
document.getElementById("texto2").style.color = "blue"
}

function sumir() {
document.getElementById("sumirTexto").style.display =
"none"
}

function calcularMeses() {
let idade =
parseInt(document.getElementById("idadeMeses").value)

document.getElementById("mensagemMeses").innerText
= "Você já viveu " + (idade * 12) + " meses"
}

function verificarMaioridade() {
let idade =
parseInt(document.getElementById("idadeMaior").value)
let msg =
document.getElementById("mensagemMaior")

if (idade >= 18) {

msg.innerText = "Você é maior de idade"
} else {
msg.innerText = "Você é menor de idade"
}
}