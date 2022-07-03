const container = document.querySelector('.container');
const grid = document.createElement("grid");
container.appendChild(grid);


const content = document.querySelector(".content");
const button = document.createElement("button");
content.appendChild(button);

let size = 50;

function createSquares(screenSize) {
    for (i = 0; i < (screenSize * screenSize); i++) {
        let cell = document.createElement("cell");
        cell.id = i;
        grid.appendChild(cell);
    }
    grid.style.gridTemplateColumns = `repeat(${screenSize}, auto)`;
    grid.style.gridTemplateRows = `repeat(${screenSize}, auto)`;
    active();
    }

createSquares(size);

button.textContent = "Resize grid";

button.addEventListener('click', () => {
    let response = prompt('How many squares per side would you like the grid to contain? Please input a value less than 100', 50);
    let size = parseInt(response);
    if (size > 100 || size === null) {
        createSquares(100);
    }
    grid.innerHTML = '';
    createSquares(size);
});

function active() {
let cells = document.querySelectorAll("cell");
    cells.forEach(cell => {cell.addEventListener('mouseover', () => {
        cell.classList.add('color');
    })});
}
active();