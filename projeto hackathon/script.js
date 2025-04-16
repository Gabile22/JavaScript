
const tarefas = document.querySelectorAll(".tarefa")
const colunas = document.querySelectorAll(".tarefas")
let botao = document.querySelectorAll(".botao")
document.querySelectorAll(".pendentes")

tarefas.forEach(tarefa => {
    tarefa.addEventListener("dragstart", () => {
        tarefa.classList.add("arrastando")
    })
    tarefa.addEventListener("dragend", () => {
        tarefa.classList.remove("arrastando")
    })
})

colunas.forEach(coluna => {
    coluna.addEventListener("dragover", (e) => {
        e.preventDefault()
        const tarefaArrastando = document.querySelector(".arrastando")
        coluna.appendChild(tarefaArrastando)
    })
})

botao.addEventListener("click", function(){
    const item = document.getElementById('input').value;
    document.getElementById('resultado').textContent = `${valor}`;
    lista.appendChild(item)
})