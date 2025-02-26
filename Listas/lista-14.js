// -----------------ex1----------------
let botton = document.getElementById("botton")

botton.addEventListener("click", function(){
   if(botton.style.backgroundColor == "purple"){
    botton.style.backgroundColor = "violet"
   }else{
    botton.style.backgroundColor = "purple"
   }
})
// -----------------ex2-----------------
let bt1 = document.getElementById("bt1")
let texto = document.getElementById("texto")
let like = 0
bt1.addEventListener("click", function(){
    like++
    texto.innerText = like
})
// ------------------ex3-----------------
let frase1 = document.getElementById("frase1")
let frase2 = document.getElementById("frase2")
let frase3 = document.getElementById("frase3")
let frase4 = document.getElementById("frase4")
let frase5 = document.getElementById("frase5")
let bt2 = document.getElementById("bt2")
bt2.addEventListener("click", function(){
    frase1.innerText = "Eu gosto de JavaScript"
    frase2.innerText = "Eu gosto de JavaScript"
    frase3.innerText = "Eu gosto de JavaScript"
    frase4.innerText = "Eu gosto de JavaScript"
    frase5.innerText = "Eu gosto de JavaScript"
})
// -----------------ex4-------------------
let enviar = document.getElementById("enviar")
let mensagem = document.getElementById("mensagem")
mensagem.addEventListener("click", function(){
    if (enviar.lastChild){
        enviar.removeChild(enviar.lastChild)
        mensagem.innerText = "Mensagem enviada"
    }
})
// -----------------ex5--------------------
let tex = document.getElementById("tex")
let botao = document.getElementById("botao")
botao.addEventListener("click", function(){
    tex.style.display = "flex"
})
// -----------------ex6--------------------
let divi = document.getElementById("divi")
let bot = document.getElementById("bot")
let bot1 = document.getElementById("bot1")
bot.addEventListener("click", function(){
    divi.style.borderRadius = "100px"
})
bot1.addEventListener("click", function (){
    divi.style.borderRadius = "0px"
})