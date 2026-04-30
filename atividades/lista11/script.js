// 1 - Dias da Semana
let num1 = Number(prompt("Informe um dia da semana de acordo com o número (1 a 7)"))
switch(num1){
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda-feira")
        break
    case 3:
        console.log("Terça-feira")
        break
    case 4:
        console.log("Quarta-feira")
        break
    case 5:
        console.log("Quinta-feira")
        break
    case 6:
        console.log("Sexta-feira")
        break
    case 7:
        console.log("Sábado")
        break
    default:
        console.log("Número inválido. Insira um valor entre 1 e 7")
}
console.log("-------------------")

// Classificação de Idade

let idade = Number(prompt("Informe uma dessas idades: 5, 10, 15, 20 ou 30"))
switch(idade){
    case 5:
        console.log("Infantil A")
        break
    case 10:
        console.log("Infantil B")
        break
    case 15:
        console.log("Juvenil A")
        break
    case 20: 
        console.log("Juvenil B")
        break
    case 30: 
        console.log("Adulto")
        break
    default:
        console.log("Idade inválida. Insira 5, 10, 15, 20 ou 30.")
}
console.log("----------------------")

// Turno de Trabalho 

    let turno = prompt("Informe o turno de trabalho (M, V ou N)")
    switch(turno){
        case "M":
            console.log("Bom dia!")
            break
        case "V":
            console.log("Boa tarde!")
            break
        case "N":
            console.log("Boa noite!")
            break
        default:
            console.log("Turno inválido. Insira M, V ou N.")
    }
console.log("-----------------------")

// Números e Mensagens

    let num = Number(prompt("Informe um número de 1 a 5"))
    switch(num){
        case 1:
            console.log("Olá mundo")
            break
        case 2:
            console.log("Garrafas de água")
            break
        case 3:
            console.log("Sem ideias do que colocar nos números")
            break
        case 4:
            console.log("Você selecionou o número 4")
            break
        case 5:
            console.log("Você escolheo o ultimo número")
            break
        default:
            console.log("Número fora do intervalo. Insira um valor entre 1 e 5")
    }
console.log("---------------------------")

// Estações do Ano

    let estacoes = Number(prompt("Informe um número de 1 a 4"))
    switch (estacoes){
        case 1:
            console.log("Primavera")
            break
        case 2:
            console.log("Verão")
            break
        case 3:
            console.log("Outono")
            break
        case 4:
            console.log("Inverno")
            break
        default:
            console.log("Estação inválida. Insira um número entre 1 e 4")
    }
console.log("-------------------------")

// Menu de Operações Matemáticas
    let num2 = Number(prompt("Informe um número e depois escolha a operação:"))
    let num3 = Number(prompt("Informe o outro número"))
    let menu = Number(prompt("Escolha uma operação: 1 - Somar || 2 - Subtrair || 3 - Multiplicar || 4 - Dividir"))
    switch (menu){
        case 1:
            let soma = num2 + num3
            console.log("Soma: "+soma)
            break
        case 2:
            let sub = num2 - num3
            console.log("Subtração: "+sub)
            break
        case 3:
            let mult = num2 * num3
            console.log("Multiplicação: "+mult)
            break
        case 4:
            let div = num2 / num3
            console.log("Divisão: "+div)
            break
        default:
            console.log("Operação Inválida")

    }
    console.log("------------------------------")

    // 7 - Código de Produto

    let codigo = Number(prompt("Informe o código do produto (100, 200, 300 ou 400)"))
    switch (codigo){
        case 100:
            console.log("Caneta")
            break
        case 200:
            console.log("Lápis")
            break
        case 300:
            console.log("Borracha")
            break
        case 400:
            console.log("Caderno")
            break
        default:
            console.log("Produto não encontrado")
    }
    console.log("-------------------------")

    // 8 - Nota por Conceito

        let nota = prompt("Informe a letra de acordo com o desempenho (A, B, C, D ou F)")
        switch (nota){
            case "A":
                console.log("Excelente!")
                break
            case "B":
                console.log("Bom")
                break
            case "C":
                console.log("Regular")
                break
            case "D":
                console.log("Ruim")
                break
            case "F":
                console.log("Reprovado")
                break
            default:
                console.log("Conceito inválido")
        }
    console.log("--------------------------")

    // 9 - Jogo: Escolha sua Ação

    let acao = Number(prompt("Escolha a ação: (1 a 4)"))
    switch (acao){
        case 1:
            console.log("Atacar")
            break
        case 2:
            console.log("Defender")
            break
        case 3:
            console.log("Curar")
            break
        case 4:
            console.log("Fugir")
            break
        default:
            console.log("Opção inválida. Você perdeu a vez")
    }
    console.log("--------------------------")

    // 10 - Conversor Simples de Moeda

    let conv = Number(prompt("Escolha um conversor de números: 1- Real para Dólar || 2- Dólar para Real || 3 - Real para Euro"))
    let valor = Number(prompt("Informe o valor para converter: "))
    switch(conv){
        case 1:
            let conversao = (valor / 5)
            console.log("Resultado: "+ conversao)
            break;
        case 2:
            let conversao1 = valor * 5
            console.log("Resultado: "+ conversao1) 
            break
        case 3:
            let conversao2 = valor / 6.25
            console.log("Resultado: "+conversao2)
            break
        default: 
        console.log("Opção Inválida")
    }
    console.log("-----------------------------")
    
    // 11 - Tipo de Atendimento

    let atendimento = Number(prompt("Escolha um atendimento: (1 a 4)"))
    switch (atendimento){
        case 1:
            console.log("Suporte Técnico")
            break
        case 2:
            console.log("Financeiro")
            break
        case 3:
            console.log("Comercial")
            break
        case 4:
            console.log("Cancelamento")
            break
        default:
            console.log("Setor inválido")
    }
    console.log("--------------------------")

    // 12 - Cardápio de Lanchonete

    let lanchonete = Number(prompt("Escolha o Menu do cardápio: (1 a 4)"))
    switch (lanchonete){
        case 1:
            console.log("Hambúrguer")
            break
        case 2:
            console.log("Pizza")
            break
        case 3:
            console.log("Suco")
            break
        case 4:
            console.log("Cancelamento")
            break
        default:
            console.log("Pedido inválido")
    }
    console.log("--------------------------")

    // 13 - Avaliação do Atendimento

    let avaliacao = Number(prompt("Escolha a ação: (1 a 5)"))
    switch (avaliacao){
        case 1:
            console.log("Péssimo")
            break
        case 2:
            console.log("Ruim")
            break
        case 3:
            console.log("Regular")
            break
        case 4:
            console.log("Bom")
            break
        case 5:
            console.log("Excelente")
            break
        default:
            console.log("Nota inválida")
    }
    console.log("--------------------------")

    // Tipo de Usuário 

    let usuario = Number(prompt("Escolha a ação: (1 a 4)"))
    switch (usuario){
        case 1:
            console.log("Administrador")
            break
        case 2:
            console.log("Professor")
            break
        case 3:
            console.log("Aluno")
            break
        case 4:
            console.log("Visitante")
            break
        default:
            console.log("Usuário inválido")
    }
    console.log("--------------------------")

    // Categoria de Filme

    let filme = Number(prompt("Escolha a ação: (1 a 5)"))
    switch (filme){
        case 1:
            console.log("Ação")
            break
        case 2:
            console.log("Comédia")
            break
        case 3:
            console.log("Drama")
            break
        case 4:
            console.log("Terror")
            break
        case 5:
            console.log("Animação")
            break
        default:
            console.log("Categoria inválida")
    }
    console.log("--------------------------")