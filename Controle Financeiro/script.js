// CONTROLE FINANCEIRO - SCRIPT.JS
//Pegando os elemetos do html
const corpoTabela = document.querySelector("tbody")
const campoDescricao = document.querySelector("#descricao")
const campoValor = document.querySelector("#valor")
const campoTipo = document.querySelector("#tipo")
const botaoAdicionar = document.querySelector("#botao-adicionar")

const spanEntradas = document.querySelector(".valor-entradas")
const spanSaidas = document.querySelector(".valor-saidas")
const sapanTotal = document.querySelector(".valor-total")

let listarItens //para listar os itens adicionados

//Função de adicionar nova entrada ou saída
botaoAdicionar.addEventListener("click", () => {
    //Verificando se algum campo está vazio
    if (campoDescricao.value == "" || campoValor.value == "" || campoTipo.value == "") {
        return alert("Preencha todos os campos")
    }
    listarItens.push({
        descricao: campoDescricao.value,
        valor: Math.abs(campoValor.value).toFixed(2),
        tipo: campoTipo.value
    })
    salvarItensBD()
    carregarItens()
    //Deixa os campos em branco novamente
    campoDescricao.value = ""
    campoValor.value = ""
})
//Função para remover item
function removerItens(indice) {
    listarItens.splice(indice, 1)
    salvarItensBD()
    carregarItens()
}
//Função para inserir um item
function inserirItem(item, indice) {
    let linha = document.createElement("tr") //Criando uma linha na tabela

    let iconeTipo = ""
    //Definindo o texto que irá aparecer
    if (item.tipo == "Entrada") {
        iconeTipo = "Entrada"
    } else {
        iconeTipo = "Saída"
    }
    //Criando a linha com os elementos da tabela
    linha.innerHTML = `
        <td>${item.descricao}</td>
        <td>${item.valor}</td>
        <td class="coluna-tipo"><p>${iconeTipo}</p></td>
        <td class="coluna-acao">
            <button onclick="removerItens(${indice})">Remover</button>
        </td>`

    corpoTabela.appendChild(linha) //Adicionando a linha criada na tabela
}
//Carregar a tabela com os itens criados
function carregarItens() {
    listarItens = obterItensBD()
    corpoTabela.innerHTML = ""
    listarItens.forEach((item, indice) => {
        inserirItem(item, indice)
    })
    calcularTotal()
}
//Calcular o total de entrada, saída e quanto restou
function calcularTotal() {
    let totalEntradas = 0
    let totalSaidas = 0

    listarItens.forEach((item) => {
        const valor = Number(item.valor)
        if(item.tipo == "Entrada") {
            totalEntradas += valor
        } else if (item.tipo == "Saída") {
            totalSaidas += valor
        }
    })
    const saldoTotal = (totalEntradas - totalSaidas).toFixed(2)
    const totalEntradaFixado = totalEntradas.toFixed(2)
    const totalSaidaFixado = totalSaidas.toFixed(2)

    spanEntradas.innerHTML = totalEntradaFixado
    spanSaidas.innerHTML = totalSaidaFixado
    sapanTotal.innerHTML = saldoTotal
}
const obterItensBD = () => JSON.parse(localStorage.getItem("bd_itens")) ?? []
const salvarItensBD = () => localStorage.setItem("bd_itens", JSON.stringify(listarItens))

carregarItens()