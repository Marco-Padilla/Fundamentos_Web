const shirt = document.getElementById("shirt");
const designDiv = document.getElementById("design");
const sizeRange = document.getElementById("size");
const colorCircles = document.querySelectorAll(".color-circle");
const designItems = document.querySelectorAll(".design-item");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

colorCircles.forEach((circle) => {
  circle.addEventListener("click", () => {
    const selectedImage = circle.getAttribute("data-image");
    shirt.style.backgroundImage = `url(${selectedImage})`;
    shirt.style.backgroundSize = "contain";
    shirt.style.backgroundRepeat = "no-repeat";
    shirt.style.backgroundPosition = "center";
  });
});


designItems.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedDesign = item.getAttribute("data-design");
    switch (selectedDesign) {
      case "star":
        designDiv.style.backgroundImage = "url('img/boo.png')";
        break;
      case "circle":
        designDiv.style.backgroundImage = "url('img/bulma.png')";
        break;
      case "stripes":
        designDiv.style.backgroundImage = "url('img/cabeza.png')";
        break;
      default:
        designDiv.style.backgroundImage = "";
    }
  });
});

// Cambiar tamaño del diseño
sizeRange.addEventListener("input", (e) => {
  const newSize = e.target.value + "px";
  designDiv.style.width = newSize;
  designDiv.style.height = newSize;
});

// Mover el diseño manualmente
designDiv.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - designDiv.offsetLeft;
  offsetY = e.clientY - designDiv.offsetTop;
  designDiv.style.cursor = "grabbing";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  designDiv.style.cursor = "grab";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Mantener el diseño dentro de la camisa
    const shirtRect = shirt.getBoundingClientRect();
    const designRect = designDiv.getBoundingClientRect();

    let left = mouseX - offsetX;
    let top = mouseY - offsetY;

    // Restringir el movimiento dentro del área de la camisa
    if (left < 0) left = 0;
    if (top < 0) top = 0;
    if (left + designRect.width > shirtRect.width)
      left = shirtRect.width - designRect.width;
    if (top + designRect.height > shirtRect.height)
      top = shirtRect.height - designRect.height;

    designDiv.style.left = left + "px";
    designDiv.style.top = top + "px";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-button");
  const panels = document.querySelectorAll(".tab-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs and panels
      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));

      // Add active class to the clicked tab and the corresponding panel
      tab.classList.add("active");
      const panelId = tab.getAttribute("data-tab");
      document.getElementById(panelId).classList.add("active");
    });
  });
});

function menu() {
  let seleccion = document.getElementById("opciones").value;


  switch (seleccion) {
    case "A":
      Swal.fire({
        icon: "success",
        title: "Ejemplo 1",
        text: "Redireccionando.",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        window.location.href = "ejemplo1.html";
      });
      return;

    case "B":
      Swal.fire({
        icon: "success",
        title: "Ejemplo 2",
        text: "Redireccionando.",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        window.location.href = "ejemplo2.html";
      });
      return;
  
  }
}
