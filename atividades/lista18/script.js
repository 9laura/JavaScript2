//1
function arredondarRound() {
    let numRound = document.getElementById("numRound").value //input tem o .value

    let round = document.getElementById("round")

    round.innerText ="round (para o inteiro mais próximo): " + Math.round(numRound)
}

//2
function arredondarFloor() {
    let numFloor = document.getElementById("numFloor").value //input tem o .value

    let floor = document.getElementById("floor")

    floor.innerText ="floor (para o menor): " + Math.floor(numFloor)
}

//3
function arredondarCeil() {
    let numCeil = document.getElementById("numCeil").value //input tem o .value

    let ceil = document.getElementById("ceil")

    ceil.innerText ="ceil (para o maior): " + Math.ceil(numCeil)
}

// 4
function fazerRaiz() {
    let numRaiz = document.getElementById("numRaiz").value //input tem o .value

    let raiz = document.getElementById("raiz")

    raiz.innerText ="raiz: " + Math.sqrt(numRaiz)

}

// 5
function fazerPot() {
    let numPot = document.getElementById("numPot").value
    let potencia = document.getElementById("potencia").value
    let potencia2 = document.getElementById("potencia2")


    potencia2.innerText ="potência: " + Math.pow(numPot,potencia)

}

//6
function maiorNum() {

    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let n3 = document.getElementById("n3").value
    let max = document.getElementById("max")

    max.innerText="Maior número: " +(Math.max(n1,n2,n3))
}

//7
function menorNum() {

    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let num3 = document.getElementById("num3").value
    let min = document.getElementById("min")

    min.innerText="Menor número: " +(Math.min(num1,num2,num3))
}

//8
function sorteio() {
    let resul = document.getElementById("resultadoSorteio")

    let numero = Math.floor(Math.random() * 11) // 0 a 10

    resul.innerText = "Número sorteado: " + numero
}

//9
function lancarDado() {
    let resultado = document.getElementById("resultadoDado")

    let dado = Math.floor(Math.random() * 6) + 1 // 1 a 6

    resultado.innerText = "Resultado do dado: " + dado
}