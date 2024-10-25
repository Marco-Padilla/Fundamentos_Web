function realizarConversion() {
  const tipoCambio = parseFloat(document.getElementById("tipoCambio").value);
  const monto = parseFloat(document.getElementById("monto").value);
  const conversion = document.getElementById("conversion").value;
  const resultadoField = document.getElementById("resultado");

  // Validar si los campos están vacíos
  if (!tipoCambio || !monto || !conversion) {
    Swal.fire({
      icon: "error",
      title: "Campos incompletos",
      text: "Por favor, completa todos los campos antes de realizar la conversión.",
    });
    return;
  }

  let resultado;

  if (conversion === "colonDolar") {
    resultado = monto / tipoCambio;
    resultadoField.value = `$ ${resultado.toFixed(2)}`;
  } else if (conversion === "dolarColon") {
    resultado = monto * tipoCambio;
    resultadoField.value = `₡ ${resultado.toFixed(2)}`;
  }
}

function limpiarCampos() {
  document.getElementById("conversorForm").reset();
  document.getElementById("resultado").value = "";
}
