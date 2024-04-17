
const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Londres", "París", "Madrid", "Roma"],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Nilo", "Amazonas", "Misisipi", "Yangtsé"],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es el símbolo químico del oro?",
        options: ["Au", "Ag", "Fe", "Cu"],
        correctAnswer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionDiv = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const nextButton = document.getElementById("nextButton");
const resultDiv = document.getElementById("result");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionDiv.textContent = currentQuestion.question;
    optionsDiv.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.addEventListener("click", function() {
            checkAnswer(index);
        });
        optionsDiv.appendChild(optionButton);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].correctAnswer) {
        score++;
        resultDiv.textContent = "¡Respuesta correcta!";
    } else {
        resultDiv.textContent = "Respuesta incorrecta";
    }
    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        resultDiv.textContent = "";
        nextButton.disabled = true;
    } else {
        endGame();
    }
}

function endGame() {
    questionDiv.textContent = `Fin del juego. Puntuación: ${score} / ${questions.length}`;
    optionsDiv.innerHTML = "";
    nextButton.style.display = "none";
    resultDiv.textContent = "";
}

nextButton.addEventListener("click", nextQuestion);

displayQuestion();
