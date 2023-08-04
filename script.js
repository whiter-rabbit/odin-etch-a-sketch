console.log("test")

const gridGrandparent = document.querySelector(".grid-grandparent");
const gridSizeBtn = document.querySelector(".grid-size-btn");
let gridParent;

let gridSizeChosen = 16;
createGrid();

function createGrid (){
    gridParent = document.createElement("div");
    gridParent.classList.add("grid-parent");
    gridGrandparent.append(gridParent);
    let gridCell; 
    for (let i=0; i<(gridSizeChosen ** 2); i++) {
        gridCell = document.createElement("div");
        gridCell.classList.add("grid-cell");
        gridParent.append(gridCell);
        gridCell.style.setProperty('--cell-size', (961 - gridSizeChosen) / gridSizeChosen + "px");
        }
}

gridSizeBtn.addEventListener('click', function(e){
    playerSelection();
});


function playerSelection () {
    gridParent.remove();
    gridSizeChosen = Number(prompt("Choose the desired size of the square grid - type an integer between 2 and 100"));
    createGrid()
}


