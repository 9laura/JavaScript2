//1
let dobro = (num) => {
let dobroNum = num * 2
return dobroNum
}
let num = Number(prompt("Informe um número e receba o dobro: "))
console.log (dobro(num))
console.log("-------------------")
//2
let soma = (n1,n2) => {
let aSoma = n1 + n2
return aSoma
}
let n1 = Number(prompt("Informe um número: "))
let n2 = Number(prompt("Informe outro número e receba a soma: "))
console.log (soma(n1,n2))
console.log("-------------------")
//3
let quadrado = (quad) => {
let numQuad = quad * quad
return numQuad
}
let quad = Number(prompt("Informe um número e receba seu quadrado: "))
console.log (quadrado(quad))
console.log("-------------------")
//4
let sucessor = (nSuc) => {
let sucess = nSuc + 1
return sucess
}
let nSuc = Number(prompt("Informe um número e receba seu sucessor: "))
console.log (sucessor(nSuc))
console.log("-------------------")
//5
let maiorNumero = (n3,n4) => {
if (n3>n4) {
return "O número "+n3+" é maior que o número "+n4
} else if (n3<n4) {
return "O número "+n4+" é maior que o número "+n3

} else {
return "Número invalido"
}
}
let n3 = Number(prompt("Informe um número: "))
let n4 = Number(prompt("Informe outro número e receba o maior: "))
console.log (soma(n3,n4))
console.log("-------------------")
//6
let parOuImpar = (parImpar) => {
if (parImpar % 2 == 0) {
return "Par"
} else {
return "Impar"
}
}
let parImpar = Number(prompt("Informe um número e descubra se é par ouimpar: "))
console.log(parOuImpar(parImpar))
console.log("-------------------")
//7
let verificarNumero = (num3) => {
if (num3 > 0) {
return "Positivo"
} else if (num3 < 0) {
return "Negativo"
} else {
"Zero"
}
}
let num3 = Number(prompt("Informe um número e descubra se é positivo,negativo ou zero"))
console.log(verificarNumero(num3))
console.log("-------------------")
//8
let media = (numMed1, numMed2, numMed3) => {
let media2 = (numMed1+numMed2+numMed3)/3
return "A média desses números é: "+media2
}
let numMed1 = Number(prompt("Informe o primeiro número: "))

let numMed2 = Number(prompt("Informe o segundo número: "))
let numMed3 = Number(prompt("Informe o terceiro número: "))
console.log (media(numMed1, numMed2, numMed3))
console.log ("-----------------------")
//9
let calcularDesconto = (preco) => {
let desc = (preco / 100)*20
return "Com um desconto de 20%, esse produto passará a custar"+desc
}
let preco = Number(prompt("Qual o preço do produto? "))
console.log(calcularDesconto(preco))
console.log("-------------------")
//10
let verificarAprovacao = (nota1,nota2) => {
let media = (nota1 + nota2) / 2
if (media >= 7) {
return "Aprovado"
} else if (media >=5 && media < 7) {
return "Recuperação"
} else if (media < 5) {
return "Reprovado"
}
}
let nota1 = Number(prompt("Informe a primeira nota: "))
let nota2 = Number(prompt("Informe a segunda nota: "))
console.log(verificarAprovacao(nota1,nota2))