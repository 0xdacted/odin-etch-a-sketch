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




cell.forEach(cell => {cell.addEventListener('mouseenter', () => {
    cell.classList.add("color");
})});



button.textContent = "Resize grid";

button.addEventListener('click', () => {
    let response = prompt('How many squares per side would you like the grid to contain?');
    let size = parseInt(response);
    removeSquares();
    createSquares(size);

});

function removeSquares() {
    for (let b = 0; len = cell.length, b < len; b++) {
        if (cell[b].classList.contains('color')) {
            cell[b].classList.remove('color');
        }
    }
    }


function createSquares(size) {
    for (a = 0; a <= (size * size); a++) {
        let cell = document.createElement("cell");
        cell.id = a;
        grid.appendChild(cell);
    }
    }

   
    