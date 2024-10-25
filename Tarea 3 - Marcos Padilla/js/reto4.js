function mostrarContenido() {
  const selector = document.getElementById("selector").value;
  const imagen = document.getElementById("imagen");
  const descripcion = document.getElementById("descripcion");
  const contenido = document.getElementById("contenido");

  if (selector === "opcion1") {
    imagen.src = "img/gato.jpg";
    descripcion.innerHTML =
      "Un gato relajándose en su ambiente natural. Los gatos son conocidos por ser independientes y curiosos.";
  } else if (selector === "opcion2") {
    imagen.src = "img/perro.jpg"; 
    descripcion.innerHTML =
      "Un perro jugando al aire libre. Los perros son leales y energéticos compañeros de vida.";
  } else if (selector === "opcion3") {
    imagen.src = "img/paisaje.jpg";
    descripcion.innerHTML =
      "Un paisaje hermoso que refleja la serenidad de la naturaleza.";
  }

  contenido.style.display = "block";
}
