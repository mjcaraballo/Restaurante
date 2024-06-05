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
    enlaceMenu: "./imagenes/imagenesmenu/cartavinos.jpg",
  },
];

let comidas = document.getElementsByClassName("comidas")[0];
let aux = "";
for (let i = 0; i < lista.length; i++) {
  aux += '<div class="articulos">';
  aux += `    <a href="${lista[i].enlaceMenu}" title="Menu"><img src="${lista[i].imagen}"></a>`;
  aux += "    <h2>" + lista[i].titulo + "</h2>";
  aux += `    <p> ${lista[i].descripción}</p>`;
  aux += "    <a href=" + lista[i].enlaceMenu + ">Ver "+ lista[i].titulo +"</a>";
  aux += "</div>";
}

comidas.innerHTML = aux;





