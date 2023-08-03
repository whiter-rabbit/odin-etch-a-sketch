console.log("test")

const gridGrandparent = document.querySelector(".grid-grandparent");
const gridSizeBtn = document.querySelector(".grid-size-btn");
let gridSizeForCss = document.querySelector(".grid-size-for-css");

let gridSizeChosen = 16;


gridSizeBtn.addEventListener('click', function(e){
    playerSelection();
});

gridSizeForCss = document.createElement("div");


function playerSelection () {
    gridSizeChosen = Number(prompt("Type the desired size of the square grid. Eg.:'16' means 16x16"));
    gridGrandparent.style.setProperty('--size', gridSizeChosen * 10 + "px");
    console.log(typeof gridSizeChosen + gridSizeChosen);
    createGrid()
}

function createGrid (){
    const gridParent = document.createElement("div");
    gridParent.classList.add("grid-parent");
    gridGrandparent.append(gridParent);
    let grid; 
    for (let i=0; i<(gridSizeChosen ** 2); i++) {
        grid = document.createElement("div");
        grid.classList.add("grid");
        gridParent.append(grid);
        }
}