// Recuperar el contador de visitas desde el almacenamiento local
let visitCount = localStorage.getItem('visitCount');

// Verificar si el contador existe en el almacenamiento local
if (visitCount === null) {
    // Si no existe, inicializarlo a 0
    visitCount = 0;
} else {
    // Si existe, convertirlo a entero
    visitCount = parseInt(visitCount);
}

// Incrementar el contador en 1
visitCount++;

// Actualizar el contador en la página web
document.getElementById('counter').innerText = visitCount;

// Guardar el nuevo valor del contador en el almacenamiento local
localStorage.setItem('visitCount', visitCount);

