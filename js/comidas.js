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
    aux += `    <a href="${lista[i].enlaceMenu}" title="Menu"><img src="${lista[i].imagen}"></a>`;
    aux += "    <h2>" + lista[i].titulo + "</h2>";
    aux += `    <p> ${lista[i].descripción}</p>`;
    aux += "    <a href=" + lista[i].enlaceMenu + ">Ver " + lista[i].titulo + "</a>";
    aux += "</div>";
  }
  comidas.innerHTML = aux;
}







