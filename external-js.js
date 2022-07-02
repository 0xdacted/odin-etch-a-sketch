const container = document.querySelector('.container');
const grid = document.createElement("grid");
container.appendChild(grid);


for (i = 0; i <= 256; i++) {
    let cell = document.createElement("cell");
    cell.id = i;
    grid.appendChild(cell);
}

let cell = document.querySelectorAll("cell");

cell.forEach(cell => {cell.addEventListener('mouseenter', e => {
    console.log(cell.id);
})});

cell.forEach(cell => {cell.addEventListener('mouseleave', e => {
    console.log(cell.id);
})});
