document.getElementById("btn-login").addEventListener("click", login);

/*funcion que valida el login*/
function validation_alert(ptext) {
  swal.fire({
    /* icon: "error",*/
    title: "Verificar los datos.",
    text: ptext,
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#eb610a",
    html:
      '<iframe src="https://lottie.host/embed/366ad93e-252d-4e46-8465-4cdeea3c0129/kS6Km8m92e.json"></iframe> <br><p>' +
      ptext +
      " </p>",
  });
}

//funcion login
function login() {
  let user_input = document.getElementById("in-txt-user").value;
  let pass_input = document.getElementById("in-txt-pass").value;
  //declaracion de los datos usuario y password respectivamente
  let username = "cenfo";
  let password = "123";

  let input = [user_input, pass_input];
  let input_id = ["in-txt-user", "in-txt-pass"];
  let error_count = 0;
  let text = "";

  for (let i = 0; i < input.length; i++) {
    document.getElementById(input_id[i]).classList.remove("error");
    if (input[i] == "") {
      //este es el texto que llevar el parametro de la funcion validación_alert
      text = "Ninguno de los campos puede estar vacío.";
      validation_alert(text);
      document.getElementById(input_id[i]).classList.add("error");
      error_count++;
    }
  }

  if (error_count == 0) {
    if (user_input == username && pass_input == password) {
      Swal.fire({
        title: "Credenciales correctas",
        showConfirmButton: false,
        timer: 4000,
        html: '<iframe src="https://lottie.host/embed/25da9216-938c-4d01-9a16-fc92f4400082/KjIZ7qLU6C.json"></iframe> <br><br><p>Un momento!</p>',
      }).then(() => {
        (window.location.href = "/landing.html"), "blank";
      });
    } else {
      text = "Usuario o contraseña incorrecta.";

      validation_alert(text);
    }
  }
}
