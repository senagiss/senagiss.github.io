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

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gridSize = 20;
const tileCount = 20;
const snake = [{ x: 10, y: 10 }];
let apple = { x: 15, y: 15 };
let dx = 0;
let dy = 0;

function drawSnake() {
    ctx.fillStyle = "green";
    snake.forEach(segment => {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    });
}

function drawApple() {
    ctx.fillStyle = "red";
    ctx.fillRect(apple.x * gridSize, apple.y * gridSize, gridSize, gridSize);
}

function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);
    if (head.x === apple.x && head.y === apple.y) {
        apple = { x: Math.floor(Math.random() * tileCount), y: Math.floor(Math.random() * tileCount) };
    } else {
        snake.pop();
    }
}

function checkCollision() {
    if (snake[0].x < 0 || snake[0].x >= tileCount || snake[0].y < 0 || snake[0].y >= tileCount) {
        return true;
    }
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    return false;
}

function update() {
    if (checkCollision()) {
        alert("Game Over!");
        document.location.reload();
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    drawApple();
    moveSnake();
}

document.addEventListener("keydown", event => {
    const direction = event.key.replace("Arrow", "");
    if (direction === "Up" && dy === 0) {
        dx = 0;
        dy = -1;
    } else if (direction === "Down" && dy === 0) {
        dx = 0;
        dy = 1;
    } else if (direction === "Left" && dx === 0) {
        dx = -1;
        dy = 0;
    } else if (direction === "Right" && dx === 0) {
        dx = 1;
        dy = 0;
    }
});

setInterval(update, 100);
