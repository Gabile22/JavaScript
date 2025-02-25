//---------------------------------------------
let parag = document.getElementById("parag")
parag.addEventListener("click", function(){
    texto.style.color = "purple"
})
//---------------------------------------------
let corb = document.getElementById("corb")
corb.addEventListener("click", function(){
    corb.style.backgroundColor = "purple"
})
//---------------------------------------------
let aument = document.getElementById("aument")
aument.addEventListener("dblclick", function(){
    texto3.style.fontSize = "20px"
})
//---------------------------------------------
let hover = document.getElementById("hover")
hover.addEventListener("mouseover", function(){
    hover.innerText = "o mouse está aqui"
    hover.style.backgroundColor = "blue"
})
hover.addEventListener("mouseout", function(){
    hover.innerText = "passe o mouse aqui"
    hover.style.backgroundColor = ""
})
//--------------------------------------------
let branca = document.getElementById("branca")
branca.addEventListener("click", function(){
    img.style.width = "200px"
    img.style.height = "200px"
})
//--------------------------------------------
let merida = document.getElementById("merida")
merida.addEventListener("click", function(){
    imgg.style.borderRadius = "100px"
    imgg.style.width = "200px"
    imgg.style.height = "200px"
})
//--------------------------------------------
let bt1 = document.getElementById("bt1")
bt1.addEventListener("click", function(){
    para1.style.backgroundColor = "pink"
    para1.style.color = "purple"
})
let bt2 = document.getElementById("bt2")
bt2.addEventListener("click", function(){
    para2.style.backgroundColor = "purple"
    para2.style.color = "red"
    para2.style.fontSize = "18px"
})
let bt3 = document.getElementById("bt3")
bt3.addEventListener("click", function(){
    para3.style.backgroundColor = "violet"
    para3.style.color = "blue"
    para3.style.fontSize = "20px"
    para3.style.borderRadius = "20px"
})