const gridContainer = document.querySelector(".grid-container");
console.log(gridContainer);

const generateGrid = function (gridSize) {
  for (i = 0; i <= gridSize; i++) {
    gridContainer.appendChild(document.createElement("div"));
  }
  const divs = document.querySelectorAll("div");
  console.log(divs);
  divs.forEach((div) => div.classList.add("grid-element"));
  divs.forEach((div) => (div.textContent = "Hello World"));
};

generateGrid(15);
