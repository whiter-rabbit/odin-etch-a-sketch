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
         // INFO: below version that should give darker color - not working properly yet 
        // gridCell[i].style.setProperty('--hover-color', darkerColor() )
    }
)};
}

gridMark();


function randomColor () {
    randomColorCell ='hsl(' + Math.floor(Math.random() * 360) + ', ' + Math.floor(Math.random() * 100) + '%, ' + Math.floor(Math.random() * 100) +'%)' 
    console.log(randomColorCell)
    return randomColorCell;
}


// let darkerColorCell = 'hsl(0,0%,100%)';

// // INFO: below NOT working - color is being read as undefined --- work in progress
// function darkerColor () {
//     let existingColor = gridCell.backgroundColor;
//     console.log(gridCell)
//     console.log(typeof gridCell)
//     console.log(existingColor)
//     console.log(typeof existingColor)
//     let darkerColorPart = existingColor.slice(4, -2);
//     console.log("start color = " + darkerColorPart);
//     let darkerColorArray = darkerColorPart.split(",");
//     let lightness = darkerColorArray[2];
//     lightness -= 10; //the color gets darker by 10%
//     darkerColorArray.pop();
//     darkerColorArray.push(lightness);
//     console.log("final color = " + darkerColorArray);
//     darkerColorArray.toString();
//     darkerColorCell = 'hsl(' + darkerColorArray + '%)'
//     console.log("final color as string = " + darkerColorCell)
//     return darkerColorCell;
// }


// // INFO: works - starting from pale gray, color gets darker, when it reaches black it turns into white again
// function darkerColor () {
//     let darkerColorPart = darkerColorCell.slice(4, -2); // cuts hsl into whatever is inside the brackets, IMPORTANT:-2 cuts also '%' to make it easier later!
//     console.log("start color = " + darkerColorPart);
//     let darkerColorArray = darkerColorPart.split(",") //making an array made of 3 elements 
//     let lightness = darkerColorArray[2]
//         if (darkerColorArray[2] >= 10 && darkerColorArray[2] <= 100){
//         lightness -= 10; //the color gets darker by 10%
//         }
//         else {
//         lightness += 100 ; //the color gets white again  
//         }
//     darkerColorArray.pop();
//     darkerColorArray.push(lightness);
//     console.log("final color = " + darkerColorArray);
//     darkerColorArray.toString();
//     darkerColorCell = 'hsl(' + darkerColorArray + '%)'
//     console.log("final color as string = " + darkerColorCell)
//     return darkerColorCell;
// }
   
    
