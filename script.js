document.addEventListener("DOMContentLoaded", function() {
    const maze = document.getElementById("maze");
    const startButton = document.getElementById("startButton");
    const messageDiv = document.getElementById("message");

    // Definir el tamaño del laberinto
    const LAB_SIZE = 10;

    // Definir el símbolo del jugador, la salida y los objetos de salud
    const PLAYER_SYMBOL = "P";
    const EXIT_SYMBOL = "E";
    const HEALTH_SYMBOL = "H";

    // Variables de estado
    let playerPos = { x: 0, y: 0 };
    const exitPos = { x: LAB_SIZE - 1, y: LAB_SIZE - 1 };
    let healthPos = [];
    let gameStarted = false;

    // Generar el laberinto
    function generateMaze() {
        maze.innerHTML = ""; // Limpiar el laberinto anterior
        healthPos = [];
        for (let y = 0; y < LAB_SIZE; y++) {
            for (let x = 0; x < LAB_SIZE; x++) {
                const cell = document.createElement("div");
                cell.className = "cell";
                maze.appendChild(cell);
            }
        }
        // Colocar al jugador y la salida
        document.querySelector(`#maze .cell:nth-child(${playerPos.y * LAB_SIZE + playerPos.x + 1})`).classList.add("player");
        document.querySelector(`#maze .cell:nth-child(${exitPos.y * LAB_SIZE + exitPos.x + 1})`).classList.add("exit");
        // Colocar objetos de salud
        healthPos = generateHealth();
        healthPos.forEach(pos => {
            document.querySelector(`#maze .cell:nth-child(${pos.y * LAB_SIZE + pos.x + 1})`).classList.add("health");
        });
    }

    // Generar posiciones aleatorias para los objetos de salud
    function generateHealth() {
        const positions = [];
        while (positions.length < 3) {
            const pos = { x: Math.floor(Math.random() * LAB_SIZE), y: Math.floor(Math.random() * LAB_SIZE) };
            if (!positions.some(p => p.x === pos.x && p.y === pos.y) &&
                !(pos.x === playerPos.x && pos.y === playerPos.y) &&
                !(pos.x === exitPos.x && pos.y === exitPos.y)) {
                positions.push(pos);
            }
        }
        return positions;
    }

    // Mover al jugador
    function movePlayer(direction) {
        if (!gameStarted) return;
        let newX = playerPos.x;
        let newY = playerPos.y;
        if (direction === "up" && playerPos.y > 0) {
            newY--;
        } else if (direction === "down" && playerPos.y < LAB_SIZE - 1) {
            newY++;
        } else if (direction === "left" && playerPos.x > 0) {
            newX--;
        } else if (direction === "right" && playerPos.x < LAB_SIZE - 1) {
            newX++;
        }

        // Verificar si hay un objeto de salud en la nueva posición
        const healthIndex = healthPos.findIndex(pos => pos.x === newX && pos.y === newY);
        if (healthIndex !== -1) {
            // Remover el objeto de salud de la lista y de la celda
            healthPos.splice(healthIndex, 1);
            document.querySelector(`#maze .cell:nth-child(${newY * LAB_SIZE + newX + 1})`).classList.remove("health");
        }

        // Mover al jugador si la nueva posición está vacía
        if (!healthPos.some(pos => pos.x === newX && pos.y === newY)) {
            document.querySelector(`#maze .cell:nth-child(${playerPos.y * LAB_SIZE + playerPos.x + 1})`).classList.remove("player");
            playerPos.x = newX;
            playerPos.y = newY;
            document.querySelector(`#maze .cell:nth-child(${playerPos.y * LAB_SIZE + playerPos.x + 1})`).classList.add("player");

            // Verificar si el jugador llegó a la salida
            if (playerPos.x === exitPos.x && playerPos.y === exitPos.y) {
                messageDiv.textContent = "¡Felicidades! ¡Has encontrado la salida!";
                gameStarted = false;
            }
        }
    }

    // Manejar las teclas presionadas para mover al jugador
    document.addEventListener("keydown", function(event) {
        if (gameStarted) {
            switch (event.key) {
                case "ArrowUp":
                    movePlayer("up");
                    break;
                case "ArrowDown":
                    movePlayer("down");
                    break;
                case "ArrowLeft":
                    movePlayer("left");
                    break;
                case "ArrowRight":
                    movePlayer("right");
                    break;
            }
        }
    });

    // Botón de iniciar juego
    startButton.addEventListener("click", function() {
        gameStarted = true;
        messageDiv.textContent = "";
        playerPos = { x: 0, y: 0 };
        generateMaze();
    });

    // Generar el laberinto al cargar la página
    generateMaze();
});

