////////////////////////////////////
// VARIABLES
////////////////////////////////////

const gridContainer = document.querySelector(".grid-container");
const gridSlider = document.querySelector(".grid-range");
const gridRangeValue = document.querySelector(".grid-range-value");
const eraserBtn = document.querySelector(".eraser-btn");
const rainbowBtn = document.querySelector(".rainbow-btn");
const clearBtn = document.querySelector(".clear-btn");
let gridDivs;
// let coloredGridElement;
let gridRange = gridSlider.value;
let gridSize = Math.pow(gridSlider.value, 2);

////////////////////////////////////
// FUNCTIONS
////////////////////////////////////

const generateGrid = function (size, color) {
  for (i = 0; i < size; i++) {
    const gridDiv = gridContainer.appendChild(document.createElement("div"));
    gridDiv.classList.add("grid-element");
  }

  gridDivs = document.querySelectorAll(".grid-element");

  gridDivs.forEach((div) => {
    div.style.width = `${350 / gridRange}px`;
    div.style.height = `${350 / gridRange}px`;
    // div.addEventListener("mouseover", function (e) {
    //   div.classList.add("grid-element-painted");
    // });
  });

  paintDivs(color);
  gridRangeValue.textContent = `${gridRange}X${gridRange}`;
};

const paintDivs = function (color) {
  gridDivs.forEach((div) => {
    div.addEventListener("mouseover", function (e) {
      div.style.backgroundColor = `${color}`;
    });
  });
};

const eraseGrid = function () {
  gridDivs.forEach((div) => {
    div.remove();
  });
};

generateGrid(gridSize); // default grid size 16x16
paintDivs("black"); // default painting color
// coloredGridElement = document.querySelectorAll(".grid-element-painted");

const changeColorEraser = function () {
  // change div background to white
  //   coloredGridElement.forEach((div) => (div.style.backgroundColor = "white"));
  //   coloredGridElement.forEach((div) => {});
  paintDivs("white");
};

const changeColorRainbow = function () {
  // change div background to random
};

const changeColorSelected = function () {
  // change div background to selected color in a selector
};

const clearGrid = function () {
  eraseGrid();
  generateGrid(gridSize);
};

////////////////////////////////////
// EVENTS
////////////////////////////////////

gridSlider.addEventListener("input", function (e) {
  eraseGrid();
  gridRange = gridSlider.value;
  gridSize = Math.pow(e.target.value, 2);
  generateGrid(gridSize, "black");
});

eraserBtn.addEventListener("click", changeColorEraser);
rainbowBtn.addEventListener("click", changeColorRainbow);
clearBtn.addEventListener("click", clearGrid);
