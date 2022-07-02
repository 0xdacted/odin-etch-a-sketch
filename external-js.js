const container = document.querySelector('.container');
const grid = document.createElement("grid");
container.appendChild(grid);


const content = document.querySelector(".content");
const button = document.createElement("button");
content.appendChild(button);



for (i = 0; i <= 256; i++) {
    let cell = document.createElement("cell");
    cell.id = i;
    grid.appendChild(cell);
}


let cell = document.querySelectorAll("cell");
let cellArray = Array.from(cell);


cell.forEach(cell => {cell.addEventListener('mouseenter', () => {
    cell.classList.add("color");
})});



button.textContent = "Resize grid";

button.addEventListener('click', () => {
    let response = prompt('How many squares per side would you like the grid to contain?');
    let size = parseInt(response);
    removeSquares(i);
    createSquares(size);

});

function removeSquares() {
    for (let i = 0; len = cellArray.length, i < len; i++) {
        cell[i].remove();
    }
    }


function createSquares(size) {
    for (i = 0; i <= (size * size); i++) {
        let newCell = document.createElement("newCell");
        newCell.id = i;
        grid.appendChild(newCell);
    }
    }

    let newCell = document.querySelectorAll("newCell");

    newCell.forEach(newCell => {newCell.addEventListener('mouseenter', () => {
        newCell.classList.add("color");
    })});
    