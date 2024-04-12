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
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.toggle-btn');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var content = this.nextElementSibling;
            if (content.style.display === 'none') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
