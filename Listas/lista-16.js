//ex1
function mostrarResultados(){
    let numero = parseFloat(document.getElementById("numero").value)

    document.getElementById("teto").textContent = Math.ceil(numero)
    document.getElementById("piso").textContent = Math.floor(numero)
}

//ex2
function transformarLetras(){
    let letras = document.getElementById("letras").value
    let maius = document.getElementById("maius")
    let minus = document.getElementById("minus")

    maius.innerText = (letras.toUpperCase())
    minus.innerText = (letras.toLowerCase())
}
