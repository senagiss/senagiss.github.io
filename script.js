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
    const container = document.getElementById('container');

    for (let i = 0; i < 17; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        const column1 = document.createElement('div');
        column1.classList.add('column');
        column1.textContent = `Celda ${i + 1} - Columna 1`;

        const column2 = document.createElement('div');
        column2.classList.add('column');
        column2.textContent = `Celda ${i + 1} - Columna 2`;

        row.appendChild(column1);
        row.appendChild(column2);

        container.appendChild(row);
    }
});


