const lista = [
  {
    imagen: "./imagenes/iconos/iconolacarta.png",
    titulo: "La Carta",
    descripción:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, quam, deleniti quos rem,  ab cumq, earum reprehenderit placeat.",
    enlaceMenu: "./imagenes/imagenesmenu/carta2.jpg",
  },

  {
    imagen: "./imagenes/iconos/menu.png",
    titulo: "Menu",
    descripción:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, quam, deleniti quos rem,  ab cumq, earum reprehenderit placeat.",
    enlaceMenu: "./imagenes/imagenesmenu/menu.jpg",
  },

  {
    imagen: "./imagenes/iconos/iconcocteles.png",
    titulo: "Cocteles",
    descripción:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, quam, deleniti quos rem,  ab cumq, earum reprehenderit placeat.",
    enlaceMenu: "./imagenes/imagenesmenu/cartavinos.png",
  },
];

let comidas = document.getElementsByClassName("comidas")[0];
let aux = "";
for (let i = 0; i < lista.length; i++) {
  aux += '<div class="articulos">';
  aux += `    <a href="${lista[i].enlaceMenu}" title="Menu"><img src="${lista[i].imagen}"></a>`;
  aux += "    <h2>" + lista[i].titulo + "</h2>";
  aux += `    <p> ${lista[i].descripción}</p>`;
  aux += "    <a href=" + lista[i].enlaceMenu + ">Ver Menu</a>";
  aux += "</div>";
}

comidas.innerHTML = aux;

/* aqui empieza la modal*/

let catalogoMenu = "";
fetch("./js/catalogo.json")
  .then((response) => response.json())
  .then((data) => {
    catalogoMenu = data;
    leerCatalogo(catalogoMenu);
  });

function leerCatalogo(catalogoMenu) {
  const productos = document.getElementsByClassName("catalogo")[0];
  let oux = "";
  for (let i = 0; i < catalogoMenu.length; i++) {
    oux += '<div class="carta" >';
    oux += `<img onclick="showDetails(${catalogoMenu[i].id})"  src="${catalogoMenu[i].imagen}" alt="">`;
    oux += "<p>" + catalogoMenu[i].titulo + "</p>";
    oux += "</div> ";
  }
  productos.innerHTML = oux;
}

function showDetails(productId) {
  //const products = catalogoMenu[productId];
  const product = catalogoMenu.find((element) => element.id == productId);
  console.log(product.enlaceMenu);
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
