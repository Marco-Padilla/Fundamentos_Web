// Enundiado
/* Un profesor desea ingresar el nombre, apellidos y las 3 notas de los estudiantes y conocer cual fue el promedio final
Cada estudiante tiene un nombre y tres notas, y se debe calcular el promedio de estas notas. La aplicación debe permitir ingresar la información de tantos estudiantes como sea necesario. Además, el profesor quiere que cada vez que ingrese un nuevo estudiante, este se añada a una lista desplegable (select). 
También, desea un botón que le permita seleccionar un estudiante de la lista y calcular su promedio*/



// Declaracion del arreglo  vacio para añadir estudiantes conforme se llenan los inputs
const estudiantes = [];

function agregarEstudiante() {
    const nombre = document.getElementById('nombre').value,
        apellidoEstudiante = document.getElementById('apellidos').value,
        // Obtener el valor del campo de entrada 'nota1,2,3' y convertirlo a un número de punto flotante
        nota1 = parseFloat(document.getElementById('nota1').value),
        nota2 = parseFloat(document.getElementById('nota2').value),
        nota3 = parseFloat(document.getElementById('nota3').value);


    /* La validación isNan dice que si nota1,2,3 no es un número válido
     (por ejemplo, si es una cadena no numérica o si está vacía), entonces isNaN devuelve true */
if (nombre === '' || apellidoEstudiante === '' || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {

    Swal.fire({
        icon: "error",
        title: "Debe llenar todos los campos",
        showClass: {
            popup: `
                animate__animated
                animate__fadeIn
                `
        },
        hideClass: {
            popup: `
                animate__animated
                animate__fadeOut
                `
        }
    });

} else {
    const promedio = (nota1 + nota2 + nota3) / 3;

    // Agregar estudiante al arreglo
    estudiantes.push({ nombre, apellidoEstudiante, promedio });

    // Actualizar el select de estudiantes
    const selectEstudiantes = document.getElementById('seleccionarEstudiante');

    //Se crear una etiqueta, en este caso el option
    const option = document.createElement('option');
    // Se accede a la variable que almacena la etiqueta creada y se le agrega, nombre y apellido
    option.value = nombre + ' ' + apellidoEstudiante;

    // Se establece el texto visible en la etiqueta <option> con la concatenación de nombre y apellido
    option.text = nombre + ' ' + apellidoEstudiante;




    // Se agrega la etiqueta option al elemento select en el documento mediante el appendChild
    selectEstudiantes.appendChild(option);



    // Se llama a la función para limpiar los campos una vez registrados
    limpiarDatos();

    Swal.fire({
        icon: "success",
        title: "Empleado agregado",
        showClass: {
            popup: `
                animate__animated
                animate__fadeIn
                `
        },
        hideClass: {
            popup: `
                animate__animated
                animate__fadeOut
                `
        }
    });
}
}

// Función que almacena el código para calcular el promedio
function calcularPromedioSeleccionado() {
    // Se obtiene el valor seleccionado en el elemento select con el id 'seleccionarEstudiante'
    const nombreSeleccionado = document.getElementById('seleccionarEstudiante').value;

    // Se obtiene el id del elemento 'resultado'
    const resultado = document.getElementById('resultado');


    // Busca el estudiante seleccionado en el arreglo 'estudiantes'
    // Inicializa la variable 'estudianteSeleccionado' con el valor null 
    let estudianteSeleccionado = null;

    // Inicia un bucle for que recorre cada elemento en el arreglo 'estudiantes'
    for (let i = 0; i < estudiantes.length; i++) {
        // Obtiene el estudiante en la posición 'i' del arreglo
        const estudiante = estudiantes[i];

        // Concatena el nombre y el apellido del estudiante para obtener el nombre completo
        const nombreCompleto = estudiante.nombre + ' ' + estudiante.apellidoEstudiante;

        // Compara si el 'nombreCompleto' es igual al 'nombreSeleccionado'
        if (nombreCompleto === nombreSeleccionado) {
            // Si hay una coincidencia, asigna el objeto del estudiante a 'estudianteSeleccionado'
            estudianteSeleccionado = estudiante;

            // Sale del bucle 'for' porque ya se encontró una coincidencia
            break;
        }
    }

    // Verifica si se ha encontrado un estudiante seleccionado (si 'estudianteSeleccionado' no es null o undefined)
    if (estudianteSeleccionado) {
        // Obtiene el promedio del estudiante seleccionado
        const promedioEstudiante = estudianteSeleccionado.promedio;
        /* Actualiza el contenido del elemento con id 'resultado' concatenando el mensaje sobre el
         promedio del estudiante seleccionado*/
        resultado.textContent = 'El promedio de: ' + nombreSeleccionado + '  es de: ' + promedioEstudiante;
    } else {
        // Si no se ha encontrado un estudiante seleccionado, borra el contenido del elemento con id 'resultado'
        resultado.textContent = '';
    }
}

// Función que almacena código para limpiar los campos
function limpiarDatos() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
}

