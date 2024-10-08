var botao_adicionar = document.querySelector('.botao_adicionar')
var posTarefas = 0
var quantTaredas = 0

function adicionarTarefa() {

    if (quantTaredas >= 0) {
        document.querySelector('.tarefas_disponiveis').classList.add('tarefas_disponiveis_style')
    }

    tarefa = document.getElementById('campoTexto').value
    document.getElementById('campoTexto').value = ""

    var novoParagrafo = document.createElement('p')
    novoParagrafo.setAttribute('class', 'texto_tarefa')
    novoParagrafo.textContent = tarefa;


    var novoBotao = document.createElement('button')
    novoBotao.setAttribute('class', 'botao_apagar')
    novoBotao.textContent = 'Apagar'


    var campoTarefa = document.createElement('div')
    campoTarefa.setAttribute('class', 'campo_tarefa')
    campoTarefa.setAttribute('id', 'tarefa' + posTarefas)
    campoTarefa.appendChild(novoParagrafo)
    campoTarefa.appendChild(novoBotao)

    document.querySelector('.tarefas_disponiveis').appendChild(campoTarefa)

    novoBotao.addEventListener('click', function () {

        
        console.log('O id do botão é: ' + campoTarefa.id)
        campoApagar = campoTarefa.id
        campoApagar = document.getElementById(campoApagar)
        campoApagar.remove()
        
        quantTaredas -= 1

        if (quantTaredas == 0) {
            document.querySelector('.tarefas_disponiveis').classList.remove('tarefas_disponiveis_style')
        }
    })

    posTarefas += 1
    quantTaredas += 1

}

botao_adicionar.onclick = adicionarTarefa