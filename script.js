const words = ["La salud es la verdadera riqueza.", "Tu cuerpo es tu templo.","La verdadera felicidad comienza con una buena salud"]; // Aquí puedes agregar tus palabras
const colors = ["red", "blue", "green"]; // Colores para cambiar

let index = 0;

function changeWord() {
  document.getElementById("carousel").innerText = words[index];
  document.getElementById("carousel").style.color = colors[index];
  
  index = (index + 1) % words.length;
}

setInterval(changeWord, 2000); // Cambia la palabra cada 2 segundos

