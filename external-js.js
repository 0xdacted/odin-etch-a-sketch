const container = document.querySelector('.container');
const grid = document.createElement("grid");
container.appendChild(grid);


const content = document.querySelector(".content");
const button = document.createElement("button");
content.appendChild(button);

let size = 50;

function createSquares(screenSize) {
    for (i = 0; i <= (screenSize ** 2); i++) {
        let cell = document.createElement("cell");
        cell.id = i;
        grid.appendChild(cell);
    }
    grid.style.gridTemplateColumns = `repeat(${screenSize}, auto)`;
    grid.style.gridTemplateRows = `repeat(${screenSize}, auto)`;

    }

createSquares(size);


let cell = document.querySelectorAll("cell");



button.textContent = "Resize grid";

button.addEventListener('click', () => {
    removeSquares();
    let response = prompt('How many squares per side would you like the grid to contain? Please input a value less than 100', 50);
    let size = parseInt(response);
    if (size > 100) {
        let response = prompt('How many squares per side would you like the grid to contain? Please input a value less than 100', 50)
        let size = parseInt(response);
        if (size <= 100) {
            createSquares(size);
        }
        else {
            createSquares(50);
        }
    }
    else {
    createSquares(size);
    }
});

function removeSquares() {
    for (let b = 0; len = cell.length, b < len; b++) {
            cell[b].remove();
    }
    }


    cell.forEach(cell => {cell.addEventListener('mouseenter', () => {
        cell.classList.add("color");
    })});