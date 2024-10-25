let conte1 = document.getElementById("conte1");
let conte2 = document.getElementById("conte2");
let conte3 = document.getElementById("conte3");

function contenido1() {
  let dato1 = document.querySelector('input[name="r"][value="dato1"]');
  if (dato1.checked) {
    conte1.style.display = "block";
    conte2.style.display = "none";
    conte3.style.display = "none";
  }
}

function contenido2() {
  let dato2 = document.querySelector('input[name="r"][value="dato2"]');
  if (dato2.checked) {
    conte1.style.display = "none";
    conte2.style.display = "block";
    conte3.style.display = "none";
  }
}

function contenido3() {
  let dato3 = document.querySelector('input[name="r"][value="dato3"]');
  if (dato3.checked) {
    conte1.style.display = "none";
    conte2.style.display = "none";
    conte3.style.display = "block";
  }
}
