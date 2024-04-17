const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Londres", "París", "Madrid", "Berlín"],
        answer: "París"
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Nilo", "Amazonas", "Misisipi", "Yangtsé"],
        answer: "Amazonas"
    },
    // Agrega más preguntas aquí
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = "option";
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(button) {
    const selectedAnswer = button.innerText;
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
        score++;
        document.getElementById("score").innerText = score;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("¡Juego terminado! Puntuación final: " + score);
        // Aquí puedes agregar lógica adicional después de que se terminen todas las preguntas
    }
}

showQuestion();


