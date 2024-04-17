const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = 800;
canvas.height = 400;

// Character properties
const characterWidth = 50;
const characterHeight = 50;
let characterX = 50;
let characterY = canvas.height - characterHeight;
let jumping = false;

// Obstacle properties
const obstacleWidth = 20;
const obstacleHeight = 20;
let obstacleX = canvas.width;
let obstacleY = canvas.height - obstacleHeight;

// Game status
let gameStarted = false;
let score = 0;
let level = 1;
const maxLevels = 10;

// Function to draw character
function drawCharacter() {
  ctx.fillStyle = "blue";
  ctx.fillRect(characterX, characterY, characterWidth, characterHeight);
}

// Function to draw obstacle
function drawObstacle() {
  ctx.fillStyle = "red";
  ctx.fillRect(obstacleX, obstacleY, obstacleWidth, obstacleHeight);
}

// Function to handle jumping
function jump() {
  if (!jumping) {
    jumping = true;
    const jumpInterval = setInterval(() => {
      characterY -= 5;
      if (characterY <= 50) {
        clearInterval(jumpInterval);
        const fallInterval = setInterval(() => {
          characterY += 5;
          if (characterY >= canvas.height - characterHeight) {
            clearInterval(fallInterval);
            jumping = false;
          }
        }, 20);
      }
    }, 20);
  }
}

// Function to handle game logic
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCharacter();
  drawObstacle();

  // Move obstacle
  obstacleX -= 5;

  // Check collision
  if (characterX + characterWidth > obstacleX &&
      characterX < obstacleX + obstacleWidth &&
      characterY + characterHeight > obstacleY) {
    alert("Game over!");
    resetGame();
    return;
  }

  // Increase score and level
  if (obstacleX + obstacleWidth < 0) {
    score++;
    if (score % 5 === 0 && level < maxLevels) {
      level++;
    }
    obstacleX = canvas.width;
    obstacleY = canvas.height - obstacleHeight;
  }

  // Display score and level
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText(`Score: ${score}`, 20, 30);
  ctx.fillText(`Level: ${level}`, canvas.width - 100, 30);

  requestAnimationFrame(gameLoop);
}

// Function to start the game
function startGame() {
  if (!gameStarted) {
    gameStarted = true;
    document.getElementById("startButton").style.display = "none";
    gameLoop();
  }
}

// Function to reset the game
function resetGame() {
  gameStarted = false;
  score = 0;
  level = 1;
  characterX = 50;
  obstacleX = canvas.width;
  document.getElementById("startButton").style.display = "block";
}

// Event listeners
document.getElementById("startButton").addEventListener("click", startGame);
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    jump();
  }
});

