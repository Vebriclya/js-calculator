const displayContainer = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".fake-button");
const operatorButtons = document.querySelectorAll(".fake-button-2");
let operatorSymbol = "";
const equalsButton = document.querySelector(".fake-button-3");
let operatorPressed = false;
const equalsButtonPressed = false;
const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

let firstNumber;
let operator;
let secondNumber;
let result;

function operate(firstNumber, secondNumber, operator) {
  result = 0;

  switch (operator) {
    case "add":
      result = addition(firstNumber, secondNumber);
      break;
    case "subtract":
      result = subtraction(firstNumber, secondNumber);
      break;
    case "multiply":
      result = multiplication(firstNumber, secondNumber);
      break;
    case "divide":
      result = division(firstNumber, secondNumber);
      break;
    default:
      break;
  }

  return result;
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
      displayContainer.textContent = `${firstNumber}${operatorSymbol}${secondNumber}`;
    } else if (secondNumber !== undefined && !equalsButtonPressed) {
      secondNumber = parseInt(secondNumber.toString() + numberValue);
      displayContainer.textContent = `${firstNumber}${operatorSymbol}${secondNumber}`;
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case "addition":
        operatorSymbol = " + ";
        operator = "add";
        console.log(operatorSymbol);
        displayContainer.textContent = `${firstNumber}${operatorSymbol}`;
        operatorPressed = true;
        break;
      case "subtraction":
        operatorSymbol = " - ";
        operator = "subtract";
        console.log(operatorSymbol);
        displayContainer.textContent = `${firstNumber}${operatorSymbol}`;
        operatorPressed = true;
        break;
      case "division":
        operatorSymbol = " ÷ ";
        operator = "divide";
        console.log(operatorSymbol);
        displayContainer.textContent = `${firstNumber}${operatorSymbol}`;
        operatorPressed = true;
        break;
      case "multiplication":
        operatorSymbol = " x ";
        operator = "multiply";
        console.log(operatorSymbol);
        displayContainer.textContent = `${firstNumber}${operatorSymbol}`;
        operatorPressed = true;
        break;
    }
  });
});

equalsButton.addEventListener("click", () => {
  result = operate(firstNumber, secondNumber, operator);
  displayContainer.textContent = `${result}`;
  operatorPressed = false;
  firstNumber = "";
  secondNumber = "";
});
