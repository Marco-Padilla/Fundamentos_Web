document.addEventListener("DOMContentLoaded", function () {
  const langSwitch = document.querySelectorAll(".lang-switch button");

  // Función para cambiar el idioma
  function changeLanguage(language) {
    fetch(`locales/${language}.json`)
      .then((response) => response.json())
      .then((data) => {
        // Actualizar las traducciones en la página
        document.querySelectorAll("[data-translate]").forEach((element) => {
          const translationKey = element.getAttribute("data-translate");
          element.textContent = data[translationKey] || element.textContent;
        });
      })
      .catch((error) => {
        console.error("Error al cargar el archivo de idioma:", error);
      });
  }

  // Agregar evento a los botones para cambiar idioma
  langSwitch.forEach((button) => {
    button.addEventListener("click", (e) => {
      const selectedLanguage = e.target.textContent.toLowerCase();
      changeLanguage(selectedLanguage);
    });
  });

  
  changeLanguage("es"); // Idioma inicial en español
});
