let color = "black";
const buttons = document.querySelectorAll(".color");

function populateBoard(size) {
  const board = document.querySelector(".board");
  const squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  const amount = size * size;
  for (let i = 0; i < amount; i++) {
    const square = document.createElement("div");
    square.style.backgroundColor = "white";
    square.addEventListener("mouseover", paintSquare);
    board.insertAdjacentElement("beforeend", square);
  }
}

function changeSize(input) {
  if (input >= 1 && input <= 100) {
    populateBoard(input);
  } else console.log("Size error!");
}

function paintSquare() {
  this.style.backgroundColor = `#${color}`;
}

function changeColor(choice) {
  if (choice === "random") {
    choice = Math.floor(Math.random() * Math.pow(16, 6))
      .toString(16)
      .padStart(6, "0");
    color = choice;
    console.log(choice);
  } else {
    color = choice;
  }
}

function resetBoard() {
  const board = document.querySelector(".board");
  const squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

function clickEvent() {
  buttons.forEach((btn) => {
    if (btn === this) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });
}

populateBoard(16);
buttons.forEach((btn) => btn.addEventListener("click", clickEvent));
