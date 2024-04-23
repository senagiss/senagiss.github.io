// Obtener el contador de visitas del almacenamiento local si existe
let visitCount = localStorage.getItem('visitCount');
if (!visitCount) {
  visitCount = 0;
}
document.getElementById('visitCount').innerText = visitCount;

// Incrementar el contador de visitas y guardar en el almacenamiento local
function incrementVisitCount() {
  visitCount++;
  localStorage.setItem('visitCount', visitCount);
  document.getElementById('visitCount').innerText = visitCount;
}

// Manejar clics en el botón de buena página
document.getElementById('goodButton').addEventListener('click', function() {
  incrementVisitCount();
  alert('¡Gracias por calificar la página como buena!');
});

// Manejar clics en el botón de mala página
document.getElementById('badButton').addEventListener('click', function() {
  incrementVisitCount();
  alert('¡Lamentamos que hayas encontrado la página como mala!');
});

