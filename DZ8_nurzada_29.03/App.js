const square = document.querySelector(".square");
const colorCode = document.querySelector("#colorCode");

const changeColor = function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  square.style.backgroundColor = "#" + randomColor;
  colorCode.innerHTML = "#" + randomColor;
};

square.addEventListener("click", changeColor);
