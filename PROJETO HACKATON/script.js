const formulario = document.getElementById("item");
const lista = document.getElementById("lista");
const limpar = document.getElementById("limpar");

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault(); 

  const nitem = document.getElementById("input").value;
  const quant = document.getElementById("quant").value;

  const item = document.createElement("li");

  // INNER HTML NÃO PRÓPRIO
  item.innerHTML = `
    <input type="checkbox" class="checkbox" />
    <span >${nitem} (${quant})</span>
    <button class="botao-remover">Remover</button>
  `;

  item.querySelector(".checkbox").addEventListener("change", function () {
    item.classList.toggle("comprado");
  });

  item.querySelector(".botao-remover").addEventListener("click", function () {
    item.remove();
  });

  lista.appendChild(item);

  formulario.reset();
});


limpar.addEventListener("click", function () {
  lista.innerHTML = "";
});