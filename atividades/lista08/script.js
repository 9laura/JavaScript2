// 1 – Contador

for(let i = 1; i <= 30; i++){
    console.log(i)
}
console.log("---------------------")

// 2 – Contagem Regressiva

for(let i = 30; i >= 1; i--){
    console.log(i)
}
console.log("---------------------")

// 3 – Classificação de Números

for(let i = 1; i <= 5; i++){
    let num = Number(prompt("Informe um número"))
    if(num >= 50){
        console.log("Acima de Média")
    } else{
        console.log("Abaixo da Média")
    }
}
console.log("---------------------")

// 4 – Tabuada

let num1 = Number(prompt("Informe um número"))
for(let i = 1; i <= 10; i++){
    let mult = num1 * i
    console.log(num1 + " x " + i + " = " + mult)
}

console.log("---------------------")

// 5 – Canção dos Patinhos 🐤

let num2 = Number(prompt("Informe o número de patinhos"))
for(let i = num2; i >= 1; i--){
    console.log(num2-- + " patinhos foram passear")
    console.log("Além das montanhas para brincar")
    console.log("A mamãe gritou: ")
    console.log("Quá, quá, quá, quá ")
    console.log("Mas só " + num2 + " patinhos voltaram de lá")
    console.log("\n")
}
console.log("---------------------")

//6 – Classificação de Idades

for(let i = 1; i<=10;i++){
    let idd = Number(prompt("Informe a idade: "+i))
    if (idd >= 18){
        console.log("Maior de idade")
    } else{
        console.log("Menor de idade")
    }
}

console.log("---------------------")

// 7 – Eleição

for(let i = 1; i <= 5;i++){
    let voto = Number(prompt("Informe o voto (1 a 6)"))
    if(voto == 1 || voto == 2 || voto == 3 || voto == 4){
        console.log("Você votou em um candidato")
    } else if(voto == 5){
        console.log("Voto nulo")
    } else if(voto == 6){
        console.log("Voto em branco")
    } else{
        console.log("Voto inválido")
    }
}

console.log("---------------------")

// 8 – Soma dos Números

for(let i = 1; i <= 5;i++){
     let num3 = Number(prompt("Informe um número"))
    soma = soma + num3
    console.log(soma)
}

console.log("---------------------")

// 9 – Números Pares
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// 10 - Contador Personalizado

let nInicial = Number(prompt("Informe o número inicial"))
let nFinal = Number(prompt("Informe o número final"))
for(i  = nInicial; i <= nFinal; i++){
    console.log(i)
}