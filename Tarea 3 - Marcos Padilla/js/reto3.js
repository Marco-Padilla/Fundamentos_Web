function menu() {
  let seleccion = document.getElementById("opciones").value;

  //usamos switch de js para eligir las opciones deseadas
  //window.open() es un metodo al que se pasa una url para abrir en una nueva ventana
  //window.location.href = "servicios.html";

  switch (seleccion) {
    case "A":
      Swal.fire({
        icon: "success",
        title: "Bootstrap",
        text: "Espera",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        window.open('https://getbootstrap.com/');
      });
      return;
    //window.open("","_self");
    case "B":
      Swal.fire({
        icon: "success",
        title: "Unsplash",
        text: "Espera",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        window.open('https://unsplash.com/ess');
      });
      return;
    //window.open("","_self");
    case "C":
      Swal.fire({
        icon: "success",
        title: "Pinterest",
        text: "Espera",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        window.open('https://es.pinterest.com/');
      });
      return;
    //window.open("","_self");
    case "D":
      Swal.fire({
        icon: "success",
        title: "Klipartz",
        text: "Espera",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        window.open('https://www.klipartz.com/');
      });
      return;
    //window.open("","_self");
  }
}
