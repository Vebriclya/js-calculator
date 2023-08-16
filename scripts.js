const displayContainer = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".fake-button");
// These buttons need changing to querySelectorAll
const addButton = document.querySelector("#addition");
const subtractButton = document.querySelector("#subtraction");
const divideButton = document.querySelector("#multiplication");
const multiplyButton = document.querySelector("#division");
const equalsButton = document.querySelector("#equals");
const operatorPressed = false;
const equalsButtonPressed = false;
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

/* ---------- EVENT LISTENERS ---------- */

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`${button.id} has been pressed`);
    const numberValue = button.textContent;

    if (firstNumber === undefined) {
      firstNumber = parseInt(numberValue);
      displayContainer.textContent = firstNumber;
    } else if (firstNumber !== undefined && !operatorPressed) {
      firstNumber = parseInt(firstNumber.toString() + numberValue);
      displayContainer.textContent = firstNumber;
    } else if (secondNumber === undefined && operatorPressed) {
      secondNumber = parseInt(numberValue);
    } else if (secondNumber !== undefined && !equalsButtonPressed) {
      secondNumber = parseInt(secondNumber.toString() + numberValue);
      displayContainer.textContent = ``;
    }
  });
});
/*
addButton.addEventListener("click", () => {
  if ((firstNumber = undefined)) {
    firstNumber = 1;
  } else {
    secondNumber = 1;
  }
});
*/
