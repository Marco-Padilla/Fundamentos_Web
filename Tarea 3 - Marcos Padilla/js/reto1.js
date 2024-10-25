function calcularFactura() {
  // Capturar los valores ingresados
  const nombre = document.getElementById("nombre").value;
  const articulo = document.getElementById("articulo").value;
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const precio = parseFloat(document.getElementById("precio").value);

  // Verificar si los campos están vacíos
  if (!nombre || !articulo || !cantidad || !precio) {
    // SweetAlert
    Swal.fire({
      icon: "error",
      title: "Campos incompletos",
      text: "Por favor, completa todos los campos antes de generar la factura.",
    });
    return;
  }

  // Calcular los valores
  const subtotal = cantidad * precio;
  const iva = subtotal * 0.13;
  const servicio = subtotal * 0.05;
  const total = subtotal + iva + servicio;

  // Mostrar los resultados
  document.getElementById("resNombre").innerText = nombre;
  document.getElementById("resArticulo").innerText = articulo;
  document.getElementById("resCantidad").innerText = cantidad;
  document.getElementById("resPrecio").innerText = precio.toFixed(2);
  document.getElementById("resSubtotal").innerText = subtotal.toFixed(2);
  document.getElementById("resIVA").innerText = iva.toFixed(2);
  document.getElementById("resServicio").innerText = servicio.toFixed(2);
  document.getElementById("resTotal").innerText = total.toFixed(2);
}
