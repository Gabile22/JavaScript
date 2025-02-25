// Jogo Pedra, Papel e Tesoura
//Variáveis para armazenar os pontos do jogador e pc
let placarJogador = 0
let placarPC = 0

//Variáveis para armazenar as rodadas
let rodadas = Number(prompt("Quantas vezes deseja jogar?"))

//Laço de repetição que fará as rodadas
for (let i = 0; i < rodadas; i++) {

    const escolhaJogador = prompt("Escolha pedra, papel ou tesoura:")
    // Solicita que o usuário informe qual ele quer

    const escolhaPC = ["pedra", "papel", "tesoura"][Math.floor(Math.random() * 3)]
    // Gera uma escolha aleatória para o computador
    // Criamos um array com as opções e usamos o random para escolhe uma de forma aleatoria

    alert(`Você escolheu ${escolhaJogador}`)
    alert(`O computador escolheu ${escolhaPC}`)
    // Mostrando qual foi a nossa escolha e qual foi a escolha do computador

    // Compaara se a nossa escolha foi igual a do computador
    if (escolhaJogador == escolhaPC) {
        alert("Empate")
    } else if (escolhaJogador == "pedra" && escolhaPC == "tesoura") {
        // Criamos a primeira verificação de vitoria
        alert("Você venceu")
        placarJogador++
    } else if (escolhaJogador == "tesoura" && escolhaPC == "papel") {
        // criamos a segunda verificação
        alert("Você venceu")
        placarJogador++
    } else if (escolhaJogador == "papel" && escolhaPC == "pedra") {
        //Criamos a terceira verificação
        alert("Você venceu")
        placarJogador++
    } else {
        alert("Você perdeu")
        placarPC++
    }
    //Exibe o placar no console
    console.log("Placar Jogador: ", placarJogador)
    console.log("Placar Computador: ", placarPC)

    //Placar final
    alert(`Fim de jogo! Placar final: Jogador ${placarJogador} x ${placarPC} Computador`)
}
//Placar final
alert(`Fim de jogo! Placar final: Jogador ${placarJogador} x ${placarPC} Computador`)