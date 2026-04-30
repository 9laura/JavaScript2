function arredondar() {
    let numero = document.getElementById("numero").value //input tem o .value

    let round = document.getElementById("round")
    let ceil = document.getElementById("ceil")
    let floor = document.getElementById("floor")

    round.innerText ="round (para o inteiro mais próximo): " + Math.round(numero)
    ceil.innerText ="ceil (para cima): " + Math.ceil(numero)
    floor.innerText ="floor (para baixo): " + Math.floor(numero)
    // round -> para o inteiro mais próximo
    // ceil -> para cima
    // floor -> para baixo

    // 






}

function calcular() {
    let num = document.getElementById("num").value
    let potencia = document.getElementById("potencia").value
    let resultado = document.getElementById("resultado")

    resultado.innerText = Math.pow(num, potencia)
    // 2³ = 2*2*2 = 8
}
//maior e menor num
let n1 = 5
let n2 = 16
let n3 = 9

console.log(Math.max(n1,n2,n3))
console.log(Math.min(n1,n2,n3))

// Raiz quadrada - SQRT
let n4 = 81
let n5 = 100
let n6 = 25

console.log(Math.sqrt(n4))
console.log(Math.sqrt(n5))
console.log(Math.sqrt(n6))
console.log("-------------------------")

// -------------------
// Numero aleatorio 
console.log(Math.random()) // 0 e 1
console.log(Math.random() * 10) // 0 e 10
console.log(Math.random() * 10) + 1 // 1 a 11
console.log(Math.floor(Math.random()*10)+1) // 1 a 10




