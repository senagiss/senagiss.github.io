// Inicializar los contadores desde el almacenamiento local
let goodCount = parseInt(localStorage.getItem('goodCount')) || 0;
let badCount = parseInt(localStorage.getItem('badCount')) || 0;

// Mostrar los contadores iniciales en la página
document.getElementById('goodCount').innerText = goodCount;
document.getElementById('badCount').innerText = badCount;

// Incrementar el contador de "Buena" y guardar en el almacenamiento local
document.getElementById('goodBtn').addEventListener('click', function() {
    goodCount++;
    document.getElementById('goodCount').innerText = goodCount;
    localStorage.setItem('goodCount', goodCount);
});

// Incrementar el contador de "Mala" y guardar en el almacenamiento local
document.getElementById('badBtn').addEventListener('click', function() {
    badCount++;
    document.getElementById('badCount').innerText = badCount;
    localStorage.setItem('badCount', badCount);
});


document.addEventListener('DOMContentLoaded', function() {
  var saludo = document.getElementById('saludo');
  
  // Mostrar el saludo
  saludo.style.opacity = '1';

  // Desaparecer después de 3 segundos
  setTimeout(function() {
    saludo.style.opacity = '0';
  }, 3000);
});
