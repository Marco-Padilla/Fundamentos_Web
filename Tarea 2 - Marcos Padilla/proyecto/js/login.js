//Microinteracciones JSON
//https://lottiefiles.com/featured

//inicio en el que aparece una imagen antes del contenido
window.addEventListener("load", function () {
  const inicio = document.getElementById("inicio");
  const content = document.getElementById("content");

  // Define un tiempo mínimo de 2 segundos (2000 milisegundos)
  setTimeout(function () {
    // Oculta la pantalla de carga
    inicio.style.display = "none";
    
    // Muestra el contenido de la página
    content.style.display = "block";
    contentuno.style.display = "block";
  }, 3000); // 2000 milisegundos = 2 segundos
});

/*conexion con HTML usando el id btn-login y cargando la funcion llamada login*/
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
  //identificadores de los campos username y password
  let input = [user_input, pass_input];
  let input_id = ["in-txt-user", "in-txt-pass"];
  let error_count = 0;
  let text = "";
  //ciclo FOR que hace un recorrido con la clase llamada error que permite poner la franja roja del error
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

  //validacion si los campos username y password son iguales
  if (error_count == 0) {
    if (user_input == username && pass_input == password) {
      Swal.fire({
        //icon: "success",
        title: "Credenciales correctas",
        showConfirmButton: false,
        //milisegundos equivalen a 5seg
        timer: 4000,
        html: '<iframe src="https://lottie.host/embed/25da9216-938c-4d01-9a16-fc92f4400082/KjIZ7qLU6C.json"></iframe> <br><br><p>Un momento!</p>',
      }).then(() => {
        (window.location.href = "../proyecto/landing.html"), "blank";
      });
    } else {
      text = "Usuario o contraseña incorrecta.";
      //carga la funcion de arriba
      validation_alert(text);
    }
  }
}
