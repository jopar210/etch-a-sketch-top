const gridContainer = document.querySelector(".grid-container");
const gridSlider = document.querySelector(".grid-range");
let gridRange = gridSlider.value;
let gridSize = Math.pow(gridSlider.value, 2);
let gridDivs;

const generateGrid = function (size) {
  for (i = 0; i < size; i++) {
    const gridDiv = gridContainer.appendChild(document.createElement("div"));
    gridDiv.classList.add("grid-element");
  }

  gridDivs = document.querySelectorAll(".grid-element");

  gridDivs.forEach((div) => {
    div.style.width = `${350 / gridRange}px`;
    div.style.height = `${350 / gridRange}px`;
    div.addEventListener("mouseover", function (e) {
      div.classList.add("grid-element-painted");
    });
  });
};

const eraseGrid = function () {
  gridDivs.forEach((div) => {
    div.remove();
  });
};

generateGrid(gridSize);

gridSlider.addEventListener("input", function (e) {
  eraseGrid();
  gridRange = gridSlider.value;
  gridSize = Math.pow(e.target.value, 2);
  generateGrid(gridSize);
});
