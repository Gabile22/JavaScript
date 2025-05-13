//Cada pergunta tem:
//- A pergunta
//- as opções
//- a alternativa certa (começa no 0)
const perguntas = [
    {
        pergunta: "Como imprimir (Olá, Mundo!) no console em JavaScript?",
        opcoes: ["console.log(''Olá, Mundo!'');", "print(''Olá, Mundo!'');", "echo(''Olá, Mundo!'');", "log.console(''Olá, Mundo!'');"],
        correta: 0
    },
    {
        pergunta: "Como declarar uma variável que armazena a idade de uma pessoa?",
        opcoes: ["var idade: 25;", "idade := 25;", "int idade = 25;", "let idade = 25;"],
        correta: 3
    },
    {
        pergunta: "Como somar dois números e mostrar o resultado no console?",
        opcoes: ["console.log(5 . 3);", "console.log(5, 3);", "console.log(5 + 3);", "console.log(''5 + 3'');"],
        correta: 2
    },
    {
        pergunta: "Como verificar se um número é par em JavaScript?",
        opcoes: ["if (numero % 2 === 0) { console.log(''Par''); }", "if (numero // 2 === 0) { console.log(''Par''); }", "if (numero = 2) { console.log(''Par''); }", "if (numero % 2 = 0) { console.log(''Par''); }"],
        correta: 0
    },
    {
        pergunta: "Como fazer um loop que conte de 1 a 5?",
        opcoes: ["for (i = 1; i <= 5; i--) { console.log(i); }", "for (let i = 1; i < 5; i++) { console.log(i); }", "for (i = 1; i == 5; i++) { console.log(i); }", "for (let i = 1; i <= 5; i++) { console.log(i); }"],
        correta: 3
    },
    {
        pergunta: "Como criar uma função que retorna o maior de dois números?",
        opcoes: ["function maior(a, b) { return a + b; }", "function maior(a, b) { return Math.max(a, b); }", "function maior(a, b) { return Math.min(a, b); }", "function maior(a, b) { console.log(a > b); }"],
        correta: 1
    },
    {
        pergunta: "Como criar uma lista com três frutas e exibir no console?",
        opcoes: ["let frutas = [''maçã'', ''banana'', ''uva'']; console.log(frutas);", "let frutas = (''maçã'', ''banana'', ''uva''); console.log(frutas);", "let frutas = {maçã, banana, uva}; console.log(frutas);", "let frutas = maçã, banana, uva; console.log(frutas);"],
        correta: 0
    },
    {
        pergunta: "Como pedir o nome do usuário e mostrar uma saudação?",
        opcoes: ["prompt(''Digite seu nome'') + alert(''Olá'');", "console.log(''Olá, '' + prompt);", "alert(''Olá, '' + prompt(''Digite seu nome:''));", "prompt(''Digite seu nome:'') + ''Olá'';"],
        correta: 2
    },
    {
        pergunta: "Como verificar se um número está entre 1 e 100?",
        opcoes: ["if (1 < numero < 100) { console.log(''Válido''); }", "if (numero => 1 && <= 100) { console.log(''Válido''); }", "if (numero in 1..100) { console.log(''Válido''); }", "if (numero >= 1 && numero <= 100) { console.log(''Válido''); }"],
        correta: 3
    },
    {
        pergunta: "Como calcular a média de três notas?",
        opcoes: ["let media = (n1 + n2 + n3) / 3;", "let media = (n1 + n2 + n3) * 3;", "let media = n1 + n2 + n3;", "let media = (n1 + n2 + n3) / 2;"],
        correta: 0
    },


]
//variaveis para controlar o quiz
let perguntaAtual = 0 //Qual pergunta está sendo mostrada
let pontuacao = 0 //Quantidade dos acertos
let erros = 0 //Quantidade dos erros
let opcaoSelecionada = null //Qual opção o usuario selecionou

const pergunta = document.getElementById("pergunta")
const opcoes = document.getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document.getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById("erros")
const acertos = document.getElementById("acertos")

//função que atualiza o placar
function atualizarPlacar() {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}
//função que mostra a pergunta atual
function mostrarPergunta() {
    //Pega a pergunta atual
    const perguntaAtualObj = perguntas[perguntaAtual]
    //Mostra o texto da pergunta
    pergunta.textContent = perguntaAtualObj.pergunta
    opcoes.textContent = "" //limpa as opcoes anteriores
    //Cria um botão para cada opção de resposta
    perguntaAtualObj.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button")
        botao.textContent = opcao
        botao.classList.add("opcao")
        botao.addEventListener("click", () => selecionarOpcao(indice))
        opcoes.appendChild(botao)
    })
    opcaoSelecionada = null
    botaoProxima.disabled = true //desabilita o botao proxima
}
//para quando o usuario escolher uma opção
function selecionarOpcao(indice) {
    opcaoSelecionada = indice
    //Atualiza o visual da opçao selecionada
    const opcoes = document.querySelectorAll(".opcao")
    opcoes.forEach((opcao, i) => {
        opcao.classList.toggle("selecionada", i == indice)
    })
    botaoProxima.disabled = false //habilita o botao de proxima
}
function mostrarPontuacao() {
    quiz.classList.add("esconder")
    pontuacaoFinal.classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}
//função para ir para a proxima pergunta 
botaoProxima.addEventListener("click", () => {
    //verifica se a resposta esta correta
    if(opcaoSelecionada == perguntas[perguntaAtual].correta) {
        pontuacao++
    } else {
        erros++
    }
    atualizarPlacar()

    perguntaAtual++
    if(perguntaAtual < perguntas.length) {
        mostrarPergunta()
    }else {
        mostrarPontuacao()
    }
})
//botao para reiniciar o quiz
botaoReiniciar.addEventListener("click", () => {
    //reseta todas as váriaveis
    perguntaAtual = 0
    pontuacao = 0
    erros = 0
    //o quiz aparece e a pontuação final some
    quiz.classList.remove("esconder")
    pontuacaoFinal.classList.add("esconder")

    atualizarPlacar()
    mostrarPergunta()
})
//inicia o quiz com a primeira pergunta
mostrarPergunta()