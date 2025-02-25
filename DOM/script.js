let titulo = document.getElementById("titulo")
// document= HTML
//getElementById = pegue o elemento pelo id
//logo, quando fizemos isso guardamo o que estava no HTML em uma variavel no js
console.log(titulo.innerText)
// -------------------------------------------
let texto = document.getElementById("texto")
texto.innertext = "Texto Alterado"
// Desse jeito trocamos o texto de uma tag
texto.style.color = "purple"
// Usando o style podemos mexer no css
// -------------------------------------------
let botao = document.getElementById("botao")

botao.addEventListener("click", function(){
    alert("botão clicado")
})
// ------------------------------------------
let duplo = document.getElementById("duplo")
duplo.addEventListener("dblclick", function(){
    duplo.style.backgroundColor = "purple"
})
// Só acontece quando clica duas vezes
// ------------------------------------------
let passe = document.getElementById("passe")
passe.addEventListener("mouseover", function(){
    passe.innerText = "o mouse está aqui"
    passe.style.backgroundColor = "pink"
})
passe.addEventListener("mouseout", function(){
    passe.innerText = "passe o mouse aqui"
    passe.style.backgroundColor = "yellow"
    passe.style.fontSize = "16px"
})
// o mouse é quando o mouse está fora dp elemento