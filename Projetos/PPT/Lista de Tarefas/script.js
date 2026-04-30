function adicionar() {
    // Trazer o input e a lista
    let tarefa = document.getElementById("tarefa").value
    let tarefaInput = document.getElementById("tarefa")

    let lista = document.getElementById("lista")

    // nao aceitar tarefa vazia
    if (tarefa == "") {
        alert("Digite uma tareefa")
        return //interromper a execução
    } 
     // Criar o li
     let novaTarefa = document.createElement("li")
     novaTarefa.innerText = tarefa

     // Adicionar o li no site
     lista.appendChild(novaTarefa)

     //Limpar o input
     tarefaInput.value=""

     //Apagar a tarefa
     novaTarefa.onclick = function() {
        lista.removeChild(novaTarefa)
     }
}