window.onload = function () {
    //combo llamado modelo ID usando el evento onchange que se usa en combos dinamicos...
    document.getElementById("modelo").onchange = function (e) {
      //destino del valor seleccionado combo 1
      a = e.target.value;
      if (a == "250") {
        var imagen = "img/250duke.png";
      } else if (a == "390") {
        var imagen = "img/390duke.png";
      } else if (a == "Adventure") {
        var imagen = "img/adventure.png";
      }
      //agrega la imagen del carro modelo
      document.getElementById("imagen").src = imagen;
    };
    //combo llamado version ID
    document.getElementById("version").onchange = function (es) {
      //destino del valor seleccionado combo2
      n = es.target.value;
    };
  };
  
  function calcular() {
    if (document.getElementById("modelo").value == "Seleccione un modelo:") {
      swal.fire({
        icon: "info",
        title: "Atencion",
        text: "Seleccionar el modelo y la version del carro",
      });
    }
    if (document.getElementById("version").value == "Seleccione una versión:") {
      swal.fire({
        icon: "info",
        title: "Atencion",
        text: "Seleccionar el modelo y la version del carro",
      });
    }
  
    var montoCuota = 0;
    switch (a) {
      case "250":
        if (n == "2023") montoCuota = 500;
        else montoCuota = 700;
        break;
      case "390":
        if (n == "2023") montoCuota = 500;
        else montoCuota = 700;
        break;
      case "Adventure":
        if (n == "2023") montoCuota = 500;
        else montoCuota = 700;
      default:
        break;
    }
    //variable que almacena la ruta de las imagenes
    let imagenDireccion = "img/" + a.toLowerCase() + ".png";
  
    swal.fire({
      //la variable imageUrl permite cargar la imagen del carro dentro del despegable
      //a es el target modelo y n es el target de la version del carro
      imageUrl: imagenDireccion,
      html:
        "<p> Mira la cuota mensual de la " +
        a +
        " " +
        n +
        "<br><br> <strong>Cuota mensual:</strong></p> " +
        "$" +
        //variable que trae el dato de su monta de cuota mensual
        montoCuota,
      //ancho y altura de la imagen del carro
      imageWidth: 400,
      imageHeight: 250,
      //accesibilidad de la imagen
      imageAlt: "Motocicleta " + a,
    });
  }
  