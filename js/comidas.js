let lista = "";
fetch("./js/comidas.json")
.then((response) => response.json())
.then((data) => { 
  lista = data;
  leerComidas(lista);
});
function leerComidas(lista) {
  let comidas = document.getElementsByClassName("comidas")[0];
  let aux = "";
  for (let i = 0; i < lista.length; i++) {
    aux += '<div class="articulos">';
    aux += `    <img onclick="showDetail(${lista[i].id})" src="${lista[i].imagen}">`;
    aux += "    <h2>" + lista[i].titulo + "</h2>";
    aux += `    <p> ${lista[i].descripción}</p>`;
    aux += `    <a onclick="showDetail(${lista[i].id})">Ver ${ lista[i].titulo}</a>`;
    aux += "</div>";
  }
  comidas.innerHTML = aux;
}

function showDetail(productId) {
  
  const product = lista.find((element) => element.id == productId);
  //console.log(product.enlaceMenu);
  if (product) {
    const imagen = document.getElementById("detailImage");
    imagen.src = product.enlaceMenu;
    imagen.alt = product.titulo;
    // document.getElementById('detailTitle').textContent = product.titulo;
    // document.getElementById('detailDescription').textContent = product.description;
    // document.getElementById('productDetails').style.display = 'block';
    document.querySelector(".modal").style.display = "block";
  }
}

function closeDetails() {
  document.getElementById("productDetails").style.display = "none";
}







