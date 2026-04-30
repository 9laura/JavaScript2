// Switch Case

let opcao = 1
switch (opcao) {
    case 1: 
        console.log("Cadastrar")
        break;
    case 2:
        console.log("Editar")
        break;
    default: 
    console.log("Opção Inválida")
}
let epoca = prompt("Escolha 1° ou 2° Semestre e saiba quais meses fazem parte")
switch (epoca){
    case "1° Semestre":
        console.log("Janeiro, Feveireiro, Março, Abril, Maio, Junho")
        break;
    case "2° Semestre":
        console.log("Julho, Agosto, Setembro, Outubro, Novembro, Dezembro")
        break;
    default:
    console.log("Inválido")
}
    console.log("------------------------------")

    let tipo = prompt("Digite seu tipo de acessi")
    switch(tipo){
        case "admin":
            console.log("Acesso total")
            break;
        case "professor":
            console.log("Pode lançar notas e atividade")
            break;
        case "aluno":
            console.log("Acesso para visualizar")
            break;
        default:
            console.log("Acesso Negado")
    }
    
    let dia = prompt("Informe o dia da semana")
    switch (dia){
        case "Segunda":
            console.log("Dia de ir para o Sesi")
            break;
        case "Terça":
            console.log("Dia de ir para o Sesi")
            break
        case "Quarta":
            console.log("Dia de ir para o Sesi")
            break
        case "Quinta":
            console.log("Dia de ir para o Senai")
            break
        case "Sexta":
            console.log("Dia de ir para o Senai")
            break
        default:
            console.log("Dia inválido")
    }

    let cardapio = prompt("Informe o número do seu pedido")
    switch(cardapio){
        case 1:
            console.log("Pizza")
            break;
        case 2:
            console.log("Salada")
            break
        case 3:
            console.log("Macarrão")
            break
        case 4:
            console.log("Bebida")
            break
        default:
            console.log("Número inválido")
    }