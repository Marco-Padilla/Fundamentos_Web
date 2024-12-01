document.getElementById("text-search").addEventListener("input", function () {
  let query = this.value.toLowerCase();
  let items = document.querySelectorAll(".gallery-item");

  items.forEach(function (item) {
    let title = item
      .querySelector("a")
      .getAttribute("data-title")
      .toLowerCase();
    let classes = item.classList;

    // Verificar si el término de búsqueda está presente en el título o en las clases
    if (
      title.includes(query) ||
      Array.from(classes).some((cls) => cls.toLowerCase().includes(query))
    ) {
      item.style.display = "block"; // Mostrar el item si coincide
    } else {
      item.style.display = "none"; // Ocultar el item si no coincide
    }
  });
});

// Relación de categorías y subcategorías
const subcategories = {
  polo: ["Polo Jik", "Polo Waffit", "Polo Piqué"],
  redondo: [],
  sueter: ["Jacket", "Con Gorro", "Sin Gorro"],
  gorras: [],
  productos: ["Tazas", "Botellas"],
};

const categoryFilter = document.getElementById("simple-filter");
const subcategoryFilter = document.getElementById("double-filter");

// Cambia subcategorías según la categoría seleccionada
categoryFilter.addEventListener("change", function () {
  const selectedCategory = this.value;

  // Limpia y actualiza el filtro de subcategorías
  subcategoryFilter.innerHTML =
    '<option value="" disabled selected>Filtrar por subcategoría</option>';

  if (subcategories[selectedCategory]) {
    subcategories[selectedCategory].forEach((subcategory) => {
      const option = document.createElement("option");
      option.value = subcategory.toLowerCase().replace(/\s+/g, "-");
      option.textContent = subcategory;
      subcategoryFilter.appendChild(option);
    });
    subcategoryFilter.disabled = false;
  } else {
    subcategoryFilter.disabled = true;
  }

  // Ejecuta el filtro inmediatamente después de seleccionar una categoría
  filterItems();
});

// Filtro por categoría y subcategoría
document
  .querySelectorAll("#simple-filter, #double-filter")
  .forEach((filter) => {
    filter.addEventListener("change", filterItems);
  });

// Función para filtrar los elementos
function filterItems() {
  const category = categoryFilter.value;
  const subcategory = subcategoryFilter.value;

  document.querySelectorAll(".gallery-item").forEach((item) => {
    const matchesCategory =
      !category || item.classList.contains("category-" + category);
    const matchesSubcategory =
      !subcategory || item.classList.contains("category-" + subcategory);

    item.style.display = matchesCategory && matchesSubcategory ? "" : "none";
  });
}

// Activar el filtro de subcategorías por defecto cuando la página cargue
document.addEventListener("DOMContentLoaded", () => {
  const selectedCategory = categoryFilter.value;
  if (selectedCategory) {
    categoryFilter.dispatchEvent(new Event("change"));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item a");
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImage = document.createElement("img");
  const closeBtn = document.createElement("button");

  closeBtn.textContent = "X";
  closeBtn.classList.add("close-btn");

  lightboxModal.appendChild(lightboxImage);
  lightboxModal.appendChild(closeBtn);

  galleryItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const imageSrc = item.getAttribute("href");

      lightboxImage.src = imageSrc;
      lightboxModal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", function () {
    lightboxModal.style.display = "none";
  });

  // Cerrar el modal si haces clic fuera de la imagen
  lightboxModal.addEventListener("click", function (e) {
    if (e.target === lightboxModal) {
      lightboxModal.style.display = "none";
    }
  });
});
