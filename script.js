const startButton = document.getElementById('start-btn')
const questionContainer = document.getElementById('question-container')
const answerButtons = document.getElementById('answer-buttons')
const feedback = document.getElementById('feedback')
const title = document.getElementById('title')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    title.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionContainer.innerHTML = `<div class="question">${question.question}</div>`
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtons.appendChild(button)
    })
}

function resetState() {
    feedback.innerText = ''
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if (correct) {
        feedback.innerText = '¡Correcto!'
    } else {
        feedback.innerText = 'Incorrecto. Inténtalo de nuevo.'
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        currentQuestionIndex++
        setNextQuestion()
    } else {
        startButton.innerText = 'Reiniciar'
        startButton.classList.remove('hide')
    }
}

const questions = [
    {
        question: '¿Cuál es el principal objetivo de la salud pública?',
        answers: [
            { text: 'Prevenir enfermedades', correct: true },
            { text: 'Tratar enfermedades', correct: false },
            { text: 'Investigar enfermedades', correct: false },
            { text: 'Curar enfermedades', correct: false }
        ]
    },
    {
        question: '¿Qué es un determinante social de la salud?',
        answers: [
            { text: 'Un factor biológico que afecta la salud', correct: false },
            { text: 'Un aspecto económico que influye en la salud', correct: true },
            { text: 'Una enfermedad contagiosa', correct: false },
            { text: 'Un estilo de vida saludable', correct: false }
        ]
    },
    {
        question: '¿Cuál es el principal objetivo de la vacunación?',
        answers: [
            { text: 'Erradicar todas las enfermedades', correct: false },
            { text: 'Reducir la incidencia de enfermedades infecciosas', correct: true },
            { text: 'Generar inmunidad permanente', correct: false },
            { text: 'Evitar el contagio en personas sanas', correct: false }
        ]
    },
    {
        question: '¿Qué es la epidemiología?',
        answers: [
            { text: 'El estudio de la salud mental', correct: false },
            { text: 'La ciencia que estudia la propagación de enfermedades', correct: true },
            { text: 'La práctica médica basada en evidencia', correct: false },
            { text: 'El estudio de la genética humana', correct: false }
        ]
    },
    {
        question: '¿Qué es un brote epidémico?',
        answers: [
            { text: 'Una enfermedad crónica', correct: false },
            { text: 'Un aumento inesperado de casos de una enfermedad en un área específica', correct: true },
            { text: 'Una enfermedad transmitida por vectores', correct: false },
            { text: 'Un virus mutante', correct: false }
        ]
    }
]

