// //ARQUIVO DOM.JS
// let imagem = document.getElementById("Imagem")

// imagem.addEventListener("mouseover", function(){
//     imagem.setAttribute("src", "flor2.webp")
// })
// imagem.addEventListener("mouseout", function(){
//     imagem.setAttribute("src", "flor1.jpg")
// })
// ---------------------------------------
let lista = document.getElementById("lista")
let adicionar = document.getElementById("adicionar")
let remover = document.getElementById("remover")

adicionar.addEventListener("click", function(){
    let novoItem = document.createElement("li")
    novoItem.innerText = "Novo item"
    lista.appendChild(novoItem)
})
remover.addEventListener("click", function(){
    if (lista.lastChild){
        lista.removeChild(lista.lastChild)
    }
})