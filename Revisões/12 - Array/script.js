//Array
let frutas = [" Maça", "Banana", "Laranja"]
console.log("------------------------------------")
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log("-------------------------------------")
console.log(frutas.length)
frutas.push("Uva") // Adiciona no final
console.log(frutas)
frutas.unshift("Morango") // Adiciona no começo
console.log(frutas)

frutas.pop() // remove o ultimo
console.log(frutas)
frutas.shift() // remove o primeiro
console.log(frutas)

let amigos = ["Felipe", "Joana" , "Luana", "Washington","Rebeca"]
for(let i = 0; i < amigos.length; i++){
    console.log("Amigos N°",i+1,": ",amigos[i])
}

console.log("-----------------------------------------")
let aluno = ["Mariana","Lucas","Lana","Rafael", "Marcelo"]
for(let i = 0; i<alunos.length; i++){
    if(alunos[i].length > 5){
        console.log("Tem mais de 5 letras")

    } else {
        console.log("Tem 5 letras ou menos")
    }
}

let nome = "Juliana"
console.log(nome.length)
console.log("-----------------------------------------------")
let numeros = []
for(let i = 0; i < 5; i++){
    let num = Number(prompt("Digite um número"))
    numeros.push(num)
}
console.log(numeros)

console.log("------------------------------------------")
//Crie um vetor de 4 posições para nome de páises, e mostre ele usando for
 
let paises = ["França","Brasil","Russia","Países Baixos"]
for(let i = 0; i < 3; i++){
    console.log(paises[i])
}
console.log("------------------------------------------")

//Crie um vetor de 3 posições para cores, adicione duas no final, remova a primeira e mostre o vetor com for
let cores = ["Vermelho", "Azul", "Amarelo"]
cores.push = ("Branco","Preto")
cores.shift()
for(let i = 0; i < cores.length; i++){
    console.log(cores[i])
}
console.log("------------------------------------------")

let notas = []
for(let i = 0; i < 6; i++){
    [notas] = Number(prompt("Informe a nota"))
}
for(let i = 0; i < 6; i++){
    console.log(notas)
}

console.log("------------------------------------------")

let num = []
for(let i = 0; i < 5; i++){
    let num2 = Number(prompt("Informe o número"))
    num.push(num2)
}
for(let i = 0; i < 6; i++){
    if(num.length > 50){
        console.log("Número maior que 50:",num)
    } else {
        console.log("Menor que 50")
    }
}