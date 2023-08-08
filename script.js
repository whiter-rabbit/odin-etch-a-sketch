console.log("test")

const gridGrandparent = document.querySelector(".grid-grandparent");
// let gridParent = document.querySelector(".grid-parent");
// let gridCell = document.querySelector(".grid-cell");
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
        gridCell.style.setProperty('--cell-size', (961 - gridSizeChosen) / gridSizeChosen + "px");      
    }
}

gridSizeBtn.addEventListener('click', function(e){
    playerSelection();
});

function playerSelection () {
    gridParent.remove();
    gridSizeChosen = Math.floor(Number(prompt("Choose the desired size of the square grid - type an integer between 2 and 100")));
    if (gridSizeChosen < 2 || gridSizeChosen > 100){
        alert("The number should be between 2 and 100");
        gridSizeChosen = 16;
        createGrid();
    }
    else{
        createGrid();
        }
}


let gridCells = (Array.from(document.querySelectorAll(".grid-cell")));
for (let i=0; i<(gridSizeChosen ** 2); i++) {
    gridCells[i].addEventListener("click", function(e){
            console.log("hover");
            gridCells[i].classList.add("grid-cell-click");
}
)};


// // INFO: below random not working stuff
// }
// if (typeof gridSizeChosen ==="NaN"){
//     console.log("NaN");
//     alert("This is not a number - try again")
// }
// if (gridSizeChosen === ""){
//     console.log("empty")
//     alert("Empty")
// }

// }
// if(prompt.value == " "){
//     console.log("empty")
// }

// if (Number.gridSizeChosen === "") {
        //     alert("Please enter a number");
        //     gridSizeChosen = 16;
        //     createGrid();
        // }