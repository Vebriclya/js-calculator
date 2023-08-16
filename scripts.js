const numberButtons = document.querySelectorAll(".fake-button");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`${button.id} has been pressed`);
  });
});

const addButton = document.querySelector("#addition");
const subtractButton = document.querySelector("#subtraction");
const divideButton = document.querySelector("#multiplication");
const multiplyButton = document.querySelector("#division");
const operatorPressed = false;
const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

let firstNumber;
let operator;
let secondNumber;

function operate(firstNumber, secondNumber, operator) {
  let result = 0;

  switch (operator) {
    case "add":
      result = addition(firstNumber, secondNumber);
      break;
    case "subtraction":
      result = subtraction(firstNumber, secondNumber);
      break;
    case "multiplication":
      result = multiplication(firstNumber, secondNumber);
      break;
    case "division":
      result = division(firstNumber, secondNumber);
      break;
    default:
      break;
  }
}

/*
addButton.addEventListener("click", () => {
  if ((firstNumber = undefined)) {
    firstNumber = 1;
  } else {
    secondNumber = 1;
  }
});
*/
