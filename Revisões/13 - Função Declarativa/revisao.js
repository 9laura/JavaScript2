//Revisão - Função Declarativa
function saudacao () {
console.log("Boa tarde")

}

saudacao() //chamar funçao
saudacao()

console.log("-------")

function mult () {
let n1 = Number (prompt("Digite um número") )
let n2 = Number (prompt("Digite um número") )
let mult = n1*n2
console.log(mult)
}

mult()
mult()
console.log("-------")
/* Uma loja solicitou um sistema para o caixa. Crie uma função,
onde pede o valor da compra e o valor pago e mostre: Caso tenha
troco de quanto ele seral, senao, mostre, sem troco. Chame a
função duas vezes */
function sistema () {
    let valor = Number (prompt("Digite o valor da compra") )
    let valorPago = Number (prompt("Digite quanto você pagou") )
    if (valorPago > valor) {
        console.log("Troco: " + (valorPago - valor))
    } else {
        console.log("Sem troco")
    }
}
sistema()
sistema()

function pedido() {
let menu = Number(prompt("Qual opcao deseja:") )
switch(menu){
case 1:
console.log("Mostrando o cardápio")
break
case 2:
console.log("Chamando o garçom")
break
case 3:
console.log("Encerrando a conta")
break

}}