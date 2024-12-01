// EmailJS
emailjs.init("faqqdFSbu3G2VwmhW");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_hvpprk7", "template_whrel5f", templateParams).then(
      function (response) {
        // Éxito
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Tu petición se ha enviado correctamente.",
          confirmButtonText: "Aceptar",
        });
      },
      function (error) {
        // Error
        Swal.fire({
          icon: "error",
          title: "Error al enviar",
          text: "Hubo un problema al enviar tu petición. Por favor, inténtalo de nuevo más tarde.",
          confirmButtonText: "Aceptar",
        });
      }
    );
  });
