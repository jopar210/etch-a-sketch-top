////////////////////////////////////
// VARIABLES
////////////////////////////////////

const gridContainer = document.querySelector(".grid-container");
const gridSlider = document.querySelector(".grid-range");
const gridRangeValue = document.querySelector(".grid-range-value");
const eraserBtn = document.querySelector(".eraser-btn");
const rainbowBtn = document.querySelector(".rainbow-btn");
const clearBtn = document.querySelector(".clear-btn");
const colorPickerContainer = document.querySelector(".color-picker-container");
let colorValue = document.querySelector(".color-picker").value;
let gridDivs;
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
    div.style.width = `${500 / gridRange}px`;
    div.style.height = `${400 / gridRange}px`;
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
paintDivs(colorValue); // default painting color #000

const changeColorEraser = function () {
  paintDivs("white");
};

const changeColorRainbow = function () {
  gridDivs.forEach((div) => {
    div.addEventListener("mouseover", function (e) {
      const color = getRandomColor();
      div.style.backgroundColor = `${color}`;
    });
  });
};

const changeColorSelected = function () {
  colorValue = document.querySelector(".color-picker").value;
  paintDivs(colorValue);
};

const clearGrid = function () {
  eraseGrid();
  generateGrid(gridSize, colorValue);
};

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

////////////////////////////////////
// EVENTS
////////////////////////////////////

gridSlider.addEventListener("input", function (e) {
  eraseGrid();
  gridRange = gridSlider.value;
  gridSize = Math.pow(e.target.value, 2);
  generateGrid(gridSize, colorValue);
});

colorPickerContainer.addEventListener("input", function () {
  colorValue = document.querySelector(".color-picker").value;
  changeColorSelected(colorValue);
});

eraserBtn.addEventListener("click", changeColorEraser);

rainbowBtn.addEventListener("click", function () {
  changeColorRainbow(getRandomColor());
});

clearBtn.addEventListener("click", clearGrid);
