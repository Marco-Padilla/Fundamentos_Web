// EmailJS
emailjs.init("faqqdFSbu3G2VwmhW"); 

document
  .getElementById("subscription-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
    };

    emailjs.send("custom-msg", "template_xob9yjb", templateParams).then(
      function (response) {
        // Éxito
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Tu suscripción se ha enviado correctamente.",
          confirmButtonText: "Aceptar",
        });
      },
      function (error) {
        // Error
        Swal.fire({
          icon: "error",
          title: "Error al enviar",
          text: "Hubo un problema al enviar tu suscripción. Por favor, inténtalo de nuevo más tarde.",
          confirmButtonText: "Aceptar",
        });
      }
    );
  });

function calculateTimeLeft() {
  const today = new Date(); // Fecha y hora actual
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const day30 = 30; // Día de la caja sorpresa

  // Determinar si el día 30 está en este mes o el próximo
  let nextBoxDate;
  if (today.getDate() > day30) {
    // Si ya pasó el 30, calcular el siguiente mes
    nextBoxDate = new Date(currentYear, currentMonth + 1, day30, 0, 0, 0);
  } else {
    // Si aún no llega el 30 de este mes
    nextBoxDate = new Date(currentYear, currentMonth, day30, 0, 0, 0);
  }

  // Calcular la diferencia en milisegundos
  const timeDiff = nextBoxDate - today;

  if (timeDiff > 0) {
    // Convertir la diferencia a días, horas, minutos y segundos
    const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Actualizar los elementos del DOM
    document.getElementById("days-left").textContent = daysLeft;
    document.getElementById("hours-left").textContent = hoursLeft;
    document.getElementById("minutes-left").textContent = minutesLeft;
    document.getElementById("seconds-left").textContent = secondsLeft;
  } else {
    // Si ya es día 30, mostrar que ha llegado
    document.querySelector(".next-box-countdown h3").textContent =
      "¡Hoy es el día de tu caja sorpresa!";
  }
}

// Ejecutar la función cada segundo
setInterval(calculateTimeLeft, 1000);
