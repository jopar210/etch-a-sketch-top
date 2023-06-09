const gridContainer = document.querySelector(".grid-container");
let gridDivs;

const generateGrid = function (gridSize) {
  for (i = 0; i < gridSize; i++) {
    gridContainer.appendChild(document.createElement("div"));
  }

  gridDivs = document.querySelectorAll("div");
  gridDivs.forEach((div) => div.classList.add("grid-element"));
};

// generateGrid(256);
generateGrid(1024);

gridDivs.forEach((div) => {
  div.addEventListener("mouseover", function (e) {
    div.classList.add("grid-element-painted");
  });
});
