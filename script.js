const preguntas = [
  {
    pregunta: "¿Cuál es la principal causa de muerte en el mundo?",
    respuestas: ["Enfermedades cardiovasculares", "Cáncer", "Accidentes automovilísticos"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Cuál es la principal vía de transmisión del VIH/SIDA?",
    respuestas: ["Transfusión sanguínea", "Contacto sexual", "Picadura de mosquito"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Cuál es la vacuna que previene la poliomielitis?",
    respuestas: ["BCG", "Triple Viral", "OPV"],
    respuestaCorrecta: 2
  },
  // Agrega más preguntas aquí
];

const preguntasContainer = document.getElementById('preguntas-container');
const resultadoContainer = document.getElementById('resultado');
const submitBtn = document.getElementById('submit-btn');

function mostrarPreguntas() {
  preguntas.forEach((pregunta, index) => {
    const div = document.createElement('div');
    div.classList.add('pregunta');
    div.innerHTML = `
      <p>${index + 1}. ${pregunta.pregunta}</p>
      <div class="respuestas">
        ${pregunta.respuestas.map((respuesta, i) => `
          <input type="radio" name="pregunta${index}" value="${i}" required>
          <label>${respuesta}</label><br>
        `).join('')}
      </div>
    `;
    preguntasContainer.appendChild(div);
  });
}

function calcularResultado() {
  const respuestas = document.querySelectorAll('input[type="radio"]:checked');
  let puntuacion = 0;
  respuestas.forEach(respuesta => {
    const preguntaIndex = respuesta.name.slice(-1);
    const pregunta = preguntas[preguntaIndex];
    if (parseInt(respuesta.value) === pregunta.respuestaCorrecta) {
      puntuacion++;
    }
  });
  resultadoContainer.textContent = `¡Has obtenido ${puntuacion} puntos de ${preguntas.length} posibles!`;
}

submitBtn.addEventListener('click', () => {
  calcularResultado();
});

mostrarPreguntas();


