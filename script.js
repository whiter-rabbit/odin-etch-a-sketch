console.log("Play the game")

const gridGrandparent = document.querySelector(".grid-grandparent");
let gridCell = document.querySelector(".grid-cell");
const gridSizeBtn = document.querySelector(".grid-size-btn");

let gridSizeChosen = 16;
createGrid();


function createGrid (){
    gridParent = document.createElement("div");
    gridParent.classList.add("grid-parent");
    gridGrandparent.append(gridParent);
    
    for (let i=0; i<(gridSizeChosen ** 2); i++) {
        gridCell = document.createElement("div");
        gridCell.classList.add("grid-cell");
        gridParent.append(gridCell);
        //INFO-below: adding property for css (--cell-size) that calculates the size of the cell based on the number chosen by the user
        gridCell.style.setProperty('--cell-size', 960 / gridSizeChosen + "px"); 
    }
}

gridSizeBtn.addEventListener('click', function(e){
    playerSelection();
    gridMark();
});

function playerSelection () {
    gridParent.remove();
    gridSizeChosen = Math.floor(Number(prompt("Choose the desired size of the square grid - type an integer between 2 and 100")));
    if (Number.isNaN(gridSizeChosen)) {
        alert("This is not a number. Please type a number between 2 and 100");
        gridSizeChosen = 16;
        createGrid();
    }
    else {
        if (gridSizeChosen < 2 || gridSizeChosen > 100){
            if (gridSizeChosen == 0 && gridSizeChosen !== " ") {
                alert("Please type a number between 2 and 100"); 
                gridSizeChosen = 16;
                createGrid();
            }
            else {
                alert("The number should be between 2 and 100");
                gridSizeChosen = 16;
                createGrid();
            }
        }
        else {
            createGrid();     
            }
    }
}

function gridMark () {
gridCell = (Array.from(document.querySelectorAll(".grid-cell")));
for (let i=0; i<(gridSizeChosen ** 2); i++) {
    gridCell[i].addEventListener("mouseover", function(e){
        gridCell[i].classList.add("grid-cell-hover");
        gridCell[i].style.setProperty('--hover-color', randomColor() )
    }
)};
}

gridMark();


function randomColor () {
    randomColor1 ='rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) +')' 
    console.log(randomColor1);
    return randomColor1;
}


