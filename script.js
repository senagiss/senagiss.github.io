const words = ["La salud es la verdadera riqueza, una inversión en ti mismo que siempre tiene el mejor rendimiento.", "Tu cuerpo es tu templo; cuídalo con amor y atención, y te llevará a lugares que nunca imaginaste.", "La verdadera felicidad comienza con una buena salud: nutre tu cuerpo, mente y espíritu, y verás florecer la alegría en tu vida."]; // Aquí puedes agregar tus palabras
const colors = ["red", "blue", "green"]; // Colores para cambiar

let index = 0;

function changeWord() {
  document.getElementById("carousel").innerText = words[index];
  document.getElementById("carousel").style.color = colors[index];
  
  index = (index + 1) % words.length;
}

setInterval(changeWord, 2000); // Cambia la palabra cada 2 segundos

