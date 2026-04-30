let a = 10
let b = 5
console.log(a + b)

function mensagem(){
    console.log("Olá, mundo!")
}
mensagem()
mensagem()
mensagem()
mensagem()

function saudacao(){
    let nome = prompt("Informe seu nome")
    console.log("Olá, " + nome)
}
saudacao()
saudacao()
saudacao()

console.log("-------")
function soma () {
let n1 = Number (prompt("Digite um número") )
let n2 = Number (prompt("Digite um número") )
let soma = n1+n2
console.log(soma)
}
soma ()
soma ()

console.log("-------")

function sistema () {
let pontos = Number (prompt("Digite a pontuação") )
if (pontos >= 3000) {
    console.log("vencedor")
} else if (pontos >= 2200) {
    console.log("segundo lugar")
} else if (pontos >= 1800) {
    console.log("terceiro lugar")
} else {
    console.log("não foi dessa vez")
}

}
sistema ()