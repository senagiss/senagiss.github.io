document.getElementById('menu-button').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', function() {
        var content = this.nextElementSibling;
        if (content.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});

// Función para obtener la fecha y hora actual
function obtenerFechaHoraActual() {
    const fechaHora = new Date();
    const dia = agregarCeroDelante(fechaHora.getDate());
    const mes = agregarCeroDelante(fechaHora.getMonth() + 1);
    const anio = fechaHora.getFullYear();
    const hora = agregarCeroDelante(fechaHora.getHours());
    const minutos = agregarCeroDelante(fechaHora.getMinutes());
    const segundos = agregarCeroDelante(fechaHora.getSeconds());
    return `${dia}/${mes}/${anio} ${hora}:${minutos}:${segundos}`;
}

// Función para agregar un cero delante de números menores a 10
function agregarCeroDelante(numero) {
    return numero < 10 ? '0' + numero : numero;
}
// Obtener el elemento donde se mostrará la fecha y hora de la última actualización
const lastUpdatedElement = document.querySelector('#last-updated span');

// Mostrar la fecha y hora de la última actualización
lastUpdatedElement.textContent = obtenerFechaHoraActual();
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Análisis de Porcentaje</title>
</head>
<body>

<script>
  // Función para generar un porcentaje aleatorio entre 1 y 100
  function generarPorcentaje() {
    var porcentaje = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
    return porcentaje;
  }

  // Función para mostrar el porcentaje en la consola y en el documento
  function mostrarPorcentaje() {
    var porcentaje = generarPorcentaje();
    console.log('Porcentaje: ' + porcentaje + '%'); // Muestra el porcentaje en la consola
    document.body.innerHTML += '<p>Porcentaje: ' + porcentaje + '%</p>'; // Muestra el porcentaje en el documento
  }

  // Llama a la función mostrarPorcentaje cuando se carga la página
  window.onload = mostrarPorcentaje;
</script>

</body>
</html>
