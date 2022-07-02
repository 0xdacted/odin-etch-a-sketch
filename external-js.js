const container = document.querySelector('.container');
const grid = document.createElement("grid");
container.appendChild(grid);


const content = document.querySelector(".content");
const button = document.createElement("button");
content.appendChild(button);

let width = container.clientWidth;
console.log(width);



for (i = 0; i <= 256; i++) {
    let cell = document.createElement("cell");
    cell.id = i;
    grid.appendChild(cell);
}


const cell = document.querySelectorAll("cell");


cell.forEach(cell => {cell.addEventListener('mouseenter', () => {
    cell.classList.add("color");
})});

cell.forEach(cell => {cell.addEventListener('mouseleave', () => {
    
})});


button.textContent = "Resize grid";

button.addEventListener('click', () => {
    let response = prompt('How many squares per side would you like the grid to contain?');
    let size = parseInt(response);
    createSquares(size);

});

function createSquares(size) {
    for (i = 0; i <= size * size; i++) {
        let cell = document.createElement("cell");
        cell.id = i;
        grid.appendChild(cell);
    }
    }
