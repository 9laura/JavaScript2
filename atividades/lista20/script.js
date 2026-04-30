// 1
let botao = document.getElementById("botao")
botao.addEventListener("click", function() {
    let p1 = document.getElementById("p1")
    p1.innerText = "Você clicou no botão!"
})

// 2
let botao2 = document.getElementById("botao2")
botao2.addEventListener("click", function() {
document.body.style.backgroundColor = "lightblue"})

// 3
let botao3 = document.getElementById("botao3")
let numero = document.getElementById("numero")
let cliques = 0
botao3.addEventListener("click", function() {

 cliques++
 numero.innerText = cliques
})

// 4
let botao4 = document.getElementById("botao4")
let p4 = document.getElementById("p4")
botao4.addEventListener("click", function() {

if (p4.style.display == "none") {
        p4.style.display = "block"
} else {
        p4.style.display = "none"
    }
})

// 5
let input5 = document.getElementById("input5")
let espelho = document.getElementById("espelho")
input5.addEventListener("input", function() {
    espelho.innerText = input5.value
})

// 6
let input6 = document.getElementById("input6")
let maiusculo = document.getElementById("maiusculo")
input6.addEventListener("input", function() {
 maiusculo.innerText = input6.value.toUpperCase()
})

// 7
let input7 = document.getElementById("input7")
let contadorChar = document.getElementById("contadorChar")
input7.addEventListener("input", function() {

contadorChar.innerText = "Você digitou " + input7.value.length + " caracteres"
})

// 8
let input8 = document.getElementById("input8")
let validacao = document.getElementById("validacao")
input8.addEventListener("input", function() {
if (input8.value.length < 5) {
validacao.innerText = "Texto muito curto"
        validacao.style.color = "red"
} else {
validacao.innerText = "Texto válido"
    validacao.style.color = "green"
}
})
// 9
let corMouse = document.getElementById("corMouse")
corMouse.addEventListener("mouseover", function() {
corMouse.style.color = "blue"
})
corMouse.addEventListener("mouseout", function() {
corMouse.style.color = "black"
})
// 10
let botao10 = document.getElementById("botao10")
let mensagem10 = document.getElementById("mensagem10")
botao10.addEventListener("mouseover", function() {
  mensagem10.style.display = "block"
})
botao10.addEventListener("mouseout", function() {
 mensagem10.style.display = "none"
})

// 11
let surpresa = document.getElementById("surpresa")
surpresa.addEventListener("mouseover", function() {
 surpresa.innerText = "SURPRESA! O texto mudou."
})

// 12
let inputDesafio = document.getElementById("inputDesafio")
let textoDesafio = document.getElementById("textoDesafio")
let limpar = document.getElementById("limpar")

inputDesafio.addEventListener("input", function() {
 textoDesafio.innerText = inputDesafio.value
})
textoDesafio.addEventListener("mouseover", function() {
textoDesafio.style.color = "orange"
})

textoDesafio.addEventListener("mouseout", function() {
textoDesafio.style.color = "black"
})

limpar.addEventListener("click", function() {
 inputDesafio.value = ""
 textoDesafio.innerText = "Apareço aqui e mudo de cor"
})