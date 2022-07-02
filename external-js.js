const container = document.querySelector('.container');
const grid = document.createElement("grid");
container.appendChild(grid);


for (i = 0; i <= 256; i++) {
    let cell = document.createElement("cell");
    cell.id = i;
    grid.appendChild(cell);
}
