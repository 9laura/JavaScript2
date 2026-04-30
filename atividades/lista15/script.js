//1
let triplo = function(num) {
    return num * 3
}
let num = Number(prompt("Digite um número: "))
let resultadoTriplo = triplo(num)
console.log("O triplo de ", num, " é: ", resultadoTriplo
)
console.log("-------")

//2
let multiplicar = function(num1, num2) {
    return num1 * num2
}
let num1 = Number(prompt("Informe um número: "))
let num2 = Number(prompt("Informe outro número: "))
let resul = multiplicar(num1,num2)
console.log ("O resultado da multiplicação é: "+resul)
console.log("-------")

//3
let metade = function (num03) {
    return num03 / 2
}
let num03 = Number(prompt("Informe um número: "))
let met = metade(num03)
console.log("A metade de "+num03+" é "+met)
console.log("-------")

//4
let sucessor = function (num04) {
    return num04++
}
let num04 = Number(prompt("Informe um número: "))
let numSucessor = sucessor (num04)
console.log("O número sucessor de "+num04+" é "+numSucessor)
console.log("-------")

//5
let maiorNumero = function (num1, num2) {
    if (numero1>numero2){
        return numero1
    } else {
        return numero2
    }
}
let numero1 = Number(prompt("Informe um número: "))
let numero2 = Number(prompt("Informe outro número: "))
let maior = maiorNumero(numero1,numero2)
console.log("O número "+maior+" é maior")
console.log("-------")

//6
let verificarNumero = function (num06) {
    if (num06>0){
        return "Positivo"
    } else if (num06<0){
        return "Negativo"
    } else {
        return "Zero"
    }
}
let num06 = Number(prompt("Informe um número: "))
let definicao = verificarNumero(num06)
console.log("O número "+num06+" é "+definicao)
console.log("--------")

//7
let parImpar = function (num07) {
    if (num07 % 2 ==0) {
        return "Par"
    } else {
        return "Impar"
    }
}
let num07 = Number(prompt("Informe um número: "))
let def = parImpar(num07)
console.log("O número "+num07+" é "+def)
console.log("---------")

//8
let media = function (numb1,numb2,numb3) {
    return numb1+numb2+numb3/3
}
let numb1 = Number(prompt("Informe um número: "))
let numb2 = Number(prompt("Informe outro número: "))
let numb3 = Number(prompt("Informe outro número: "))
let mediaResul = media  (numb1, numb2, numb3)
console.log("A média desses números é "+mediaResul)
console.log("---------")

//9
let calcularDesconto = function (prod){
    return prod * 0.85
}
let prod = Number(prompt("Qual o valor do produto? "))
let desconto1 = calcularDesconto(prod)

console.log ("Com desconto de 15%, o valor do produto passa a ser "+desconto1)
console.log("-------")

//10
let verificarAprovacao = function (nota1, nota2) {
    let mediaNota = nota1 + nota2 / 2
    if (mediaNota>=7) {
        return "Aprovado"
    } else if (mediaNota>=5 && mediaNota<7) {
        return "Recuperação"
    } else {
        return "Reprovado"
    }
}
let nota1 = Number(prompt("Informe a primeira nota: "))
let nota2 = Number(prompt("Informe a segunda nota: "))
let definir = verificarAprovacao(nota1,nota2)
console.log("Seu status é: "+definir)