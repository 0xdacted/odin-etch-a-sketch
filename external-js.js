const container = document.querySelector('.container');
const grid = document.createElement("grid");
container.appendChild(grid);


for (i = 0; i <= 256; i++) {
    let cell = document.createElement("cell");
    cell.id = i;
    grid.appendChild(cell);
}

const cell = document.querySelectorAll("cell");
const button = document.querySelector("resize")

cell.forEach(cell => {cell.addEventListener('mouseenter', () => {
    console.log(cell.id);
    cell.classList.add("color");
})});

cell.forEach(cell => {cell.addEventListener('mouseleave', () => {
    console.log(cell.id);
})});


