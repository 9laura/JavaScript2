//Funçao sem parametro e retorno
function soma() {
let num1 = Number(prompt("Informe o primeiro número: ") )
let num2 = Number(prompt("Informe o segundo numero: ") )
let soma = num1 + num2
console.log(soma)
}
soma ( )
//Funçao com parâmetro
function soma2(num3, num4){
let soma2 = num3 + num4
console.log(soma2)
}
let num3 = Number(prompt("Informe o primeiro número: ") )
let num4 = Number(prompt("Informe o segundo numero: ") )
soma2(num3, num4)
//Funcao com Retorno
function soma3(num5, num6) {
let soma3 = num5 + num6
return soma3

}
let num5 = Number(prompt ("Informe o primeiro numero: ") )
let num6 = Number(prompt("Informe o segundo numero: ") )
let resultado = soma3(num5,num6)
console.log(resultado)

console.log("-------")

function triplo (num) {
    return num * 3
}
let num = Number(prompt("Digite um número: "))
let resul = triplo(num)
console.log("O triplo de ", num, " é: ", resul)
truplo(num)
console.log("-------")

function contadorDeLetras(palavra) {
    if( palavra.length > 10) {
        console.log("A palavra é muito grande")
    } else {
        console.log("A palavra é pequena")
    }
}
let palavra = prompt("Digite uma palavra")
let quantidade = contadorDeLetras(palavra)
console.log("A palavra ", palavra, " tem ", quantidade, " letras")
contadorDeLetras(palavra)
console.log("-------")