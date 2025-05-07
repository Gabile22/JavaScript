//Chamando os elementos do HTML
const letras = document.querySelector(".container-letras")
const linhaBackspaceEnter = document.querySelector("#linhaBackspaceEnter")
const linhaTeclado1 = document.querySelector("#linhaTeclado1")
const linhaTeclado2 = document.querySelector("#linhaTeclado2")
const linhaTeclado3 = document.querySelector("#linhaTeclado3")

//Definido as letras de cada linha
const teclasLinha1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
const teclasLinha2 = ["A", "S", "D", "F", "G", "H", "I", "J", "K", "L", "Ç"]
const teclasLinha3 = ["Z", "X", "C", "V", "B", "N", "M"]

//Define o número de tentativas (linhas) e o tamanho das palavras (colunas)
const linhas = 6
const colunas = 5

//Variavel que guarda onde o jogador esta atualmente
let linhaAtual = 0
let colunaAtual = 0

//Define as palavras que podem ser
const palavrasSecretas = ["SENAI", "LIVRO", "PLANO", "NORTE", "TREVO"]
let mapaPalavra = {}
let palavrasSecreta = palavrasSecretas[Math.floor(Math.random() *palavrasSecretas.length)]

for(let i = 0; i < palavrasSecreta.length; i += 1){
    mapaPalavra[palavrasSecreta[i]] = i
}

//Matriz onde as tentativas serão armazendas
const palpites = []

//Cria as linhas
for(let l = 0; l < linhas; l += 1){ //letra l minuscula
    palpites[l] = new Array(colunas)
    const linhasLetras = document.createElement("div")
    linhasLetras.setAttribute("id", "linha" + l)
    linhasLetras.setAttribute("class", "linha-letras")
    //Cria as colunas
    for(let c = 0; c < colunas; c += 1) {
        const colunaLetra = document.createElement("div")
        colunaLetra.setAttribute("id", "linha" + l + "coluna" + c)
        colunaLetra.setAttribute("class", l == 0 ? "coluna-letra digitando":"coluna-letra")
        linhasLetras.append(colunaLetra)
        palpites[l][c] = "" //inicia vazio
    }
    //Adiciona a linha criada ao site
    letras.append(linhasLetras)
}
//Verifica se a palavra digitada está correta
function verificarPalpite() {
    //Junta as letras digiadas
    const palpite = palpites[linhaAtual].join("")
    if(palpite.length !== colunas) {
        return //se o palpite estiver incompleto ele não verifica
    }
    const colunaAtuais = document.querySelectorAll(".digitando")
    for(let i = 0; i < colunas; i += 1) {
        const letra = palpite[i]

        if(mapaPalavra[letra] == undefined) {
            colunaAtuais[i].classList.add("errada")
        } else if (mapaPalavra[letra] == i) {
            colunaAtuais[i].classList.add("certa")
        } else {
            colunaAtuais[i].classList.add("deslocada")
        }
    }
    if(palpite == palavrasSecreta) {
        window.alert("Acertou! Parabéns") //se acertar a palavra
    }else if(linhaAtual == linhas - 1) {
        //se errar a palavra e acabar as tentativas
        window.alert("Errou")
    } else {
        //se errar a palavra mas ainda tiver tentativas
        moverParaProximaLinha()
    }
}
//Move para a proxima linha
function moverParaProximaLinha(){
    const colunaDigitando = document.querySelectorAll(".digitando")
    colunaDigitando.forEach(col => {
        col.classList.remove("digitando")
    })
    linhaAtual += 1 //Avança para a proxima linha
    colunaAtual = 0 //Reinicia a posição da coluna
    //Adiciona a classe digitando na proxima linha
    const novaLinha = document.querySelector("#linha"+linhaAtual)
    const novaColunas = document.querySelectorAll(".coluna-letra")
    novaColunas.forEach(col => {
        col.classList.add("digitando")
    })
}
//Função que insere uma letra no palpite ao clicar na tela
function clicarTecla(tecla) {
    if(colunaAtual == colunas) {
        return //limita o numero de linhas por letra
    }
    const letraAtual = document.querySelector("#linha" + linhaAtual + "coluna" + colunaAtual)
    letraAtual.textContent = tecla //mostra a letra clicada
    palpites[linhaAtual][colunaAtual] = tecla //salva a tecla escolhida
    colunaAtual += 1 //vai para o proximo espaço
}
//criando os botões do teclado virtual
function criarLinhaTeclado(teclas, container) {
    teclas.forEach(tecla => {
        const botao = document.createElement("button")
        botao.textContent = tecla
        botao.setAttribute("id", tecla)
        //ao clicar adiciona a letra
        botao.addEventListener("click", () => clicarTecla(tecla))
        container.append(botao) //adiciona o botao
    })
}
//cria as tres linhas do teclado
criarLinhaTeclado(teclasLinha1, linhaTeclado1)
criarLinhaTeclado(teclasLinha2, linhaTeclado2)
criarLinhaTeclado(teclasLinha3, linhaTeclado3)

//Função para apagar a ultima letra digitada
function apagarLetra(){
    if(colunaAtual == 0) {
        //se tiver no primeiro bloquinho da linha, não vai apagar nada
        return
    }
    colunaAtual -= 1
    palpites[linhaAtual][colunaAtual] = "" //remove a letra
    const letra = document.querySelector("#linha" + linhaAtual + "coluna" + colunaAtual)
    letra.textContent = ""
}
//cria o botão para apagar "<"
const botaoApagar = document.createElement("button")
botaoApagar.textContent = "<"
botaoApagar.addEventListener("click", apagarLetra) //quando clica apaga
linhaBackspaceEnter.append(botaoApagar) //adiciona na tela
//cria o botao do enter
const botaoEnter = document.createElement("button")
botaoEnter.textContent = "Enter"
botaoEnter.addEventListener("click", verificarPalpite) //quando clica apaga
linhaBackspaceEnter.append(botaoEnter) //adiciona na tela
//cria o botao do enter

//Permite digitação pelo teclado fisico
document.onkeydown = function(evt) {
    evt = evt || window.event
    if(evt.key == "Enter") {
        verificarPalpite()
    }else if (evt.key == "Backspace") {
        apagarLetra()
    } else {
        clicarTecla(evt.key.toUpperCase())
    }
}