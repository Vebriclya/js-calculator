const displayContainer = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".fake-button");
const operatorButtons = document.querySelectorAll(".fake-button-2");
let operatorSymbol = "";
const equalsButton = document.querySelector(".fake-button-3");
const miscButtons = document.querySelectorAll(".fake-button-4");
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
      displayContainer.textContent = `${secondNumber}`;
    } else if (secondNumber !== undefined && !equalsButtonPressed) {
      secondNumber = parseInt(secondNumber.toString() + numberValue);
      displayContainer.textContent = `${secondNumber}`;
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case "addition":
        // if there is a second number, calculate the result and use it as the first number of the next operation (make it the = button)
        if (firstNumber && operator && secondNumber) {
          result = operate(firstNumber, secondNumber, operator);
          displayContainer.textContent = `${result}`;
          operatorPressed = true;
          firstNumber = result;
          secondNumber = undefined;
          operatorSymbol = " + ";
          operator = "add";
          displayContainer.textContent = `${operatorSymbol}`;
        } else {
          operatorSymbol = " + ";
          operator = "add";
          console.log(operatorSymbol);
          displayContainer.textContent = `${operatorSymbol}`;
          operatorPressed = true;
        }
        // otherwise act normal
        break;
      case "subtraction":
        if (firstNumber && operator && secondNumber) {
          result = operate(firstNumber, secondNumber, operator);
          displayContainer.textContent = `${result}`;
          operatorPressed = true;
          firstNumber = result;
          secondNumber = undefined;
          operatorSymbol = " - ";
          operator = "subtract";
          displayContainer.textContent = `${operatorSymbol}`;
        } else {
          operatorSymbol = " - ";
          operator = "subtract";
          console.log(operatorSymbol);
          displayContainer.textContent = `${operatorSymbol}`;
          operatorPressed = true;
        }
        break;
      case "division":
        if (firstNumber === 0 || secondNumber === 0) {
          displayContainer.textContent("You know that won't work");
        } else if (firstNumber && secondNumber && operator) {
          result = operate(firstNumber, secondNumber, operator);
          displayContainer.textContent = `${result}`;
          operatorPressed = true;
          firstNumber = result;
          secondNumber = undefined;
          operatorSymbol = " ÷ ";
          operator = "divide";
          console.log(operatorSymbol);
          displayContainer.textContent = `${operatorSymbol}`;
        } else {
          operatorSymbol = " ÷ ";
          operator = "divide";
          console.log(operatorSymbol);
          displayContainer.textContent = `${operatorSymbol}`;
          operatorPressed = true;
        }
        break;
      case "multiplication":
        if (firstNumber && secondNumber && operator) {
          result = operate(firstNumber, secondNumber, operator);
          displayContainer.textContent = `${result}`;
          operatorPressed = true;
          firstNumber = result;
          secondNumber = undefined;
          operatorSymbol = " x ";
          operator = "multiply";
          displayContainer.textContent = `${operatorSymbol}`;
        } else {
          operatorSymbol = " x ";
          operator = "multiply";
          console.log(operatorSymbol);
          displayContainer.textContent = `${operatorSymbol}`;
          operatorPressed = true;
        }
        break;
    }
  });
});

miscButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case "backspace":
        console.log("backspace pressed");
        // To delete if there is a second number
        if (secondNumber !== undefined && operator && firstNumber) {
          if (secondNumber.toString().length === 1) {
            secondNumber = undefined;
            displayContainer.textContent = `${firstNumber}${operatorSymbol}`;
          } else if (!secondNumber.toString()) {
          } else {
            let numString = secondNumber.toString();
            secondNumber = parseInt(numString.slice(0, -1));
            console.log(secondNumber);
            displayContainer.textContent = `${firstNumber}${operatorSymbol}${secondNumber}`;
          }
        } // To delete if there is an operator
        else if (secondNumber === undefined && operator && firstNumber) {
          console.log("You're in the second loop");
          operatorPressed = false;
          operator = undefined;
          operatorSymbol = undefined;
          displayContainer.textContent = `${firstNumber}`;
        } // To delete if there is a first number
        else if (
          secondNumber === undefined &&
          operator === undefined &&
          firstNumber !== undefined
        ) {
          console.log("You're in the third loop");
          if (firstNumber.toString().length === 1) {
            firstNumber = undefined;
            displayContainer.textContent = "";
          } else {
            let numString = firstNumber.toString();
            firstNumber = parseInt(numString.slice(0, -1));
            console.log(firstNumber);
            displayContainer.textContent = `${firstNumber}`;
          }
        } else {
          console.log("An error has occured in the backspace function");
        }
        break;
      case "c":
        console.log("c pressed");
        //clears everything
        displayContainer.textContent = "";
        operatorPressed = false;
        firstNumber = undefined;
        secondNumber = undefined;
        operator = undefined;
        break;
      case "ce":
        console.log("ce pressed");
        // clears last number/operation
        if (firstNumber && operator && secondNumber) {
          secondNumber = undefined;
          displayContainer.textContent = `${firstNumber}${operatorSymbol}`;
        } else if (
          firstNumber &&
          operator &&
          (secondNumber === "" || secondNumber === undefined)
        ) {
          operatorPressed = false;
          operator = undefined;
          operatorSymbol = undefined;
          displayContainer.textContent = `${firstNumber}`;
        } else if (
          firstNumber &&
          (operator === "" || operator === undefined) &&
          (secondNumber === "" || secondNumber === undefined)
        ) {
          firstNumber = undefined;
          displayContainer.textContent = "";
        }
        break;
    }
  });
});

equalsButton.addEventListener("click", () => {
  if (!secondNumber) {
    console.log("There's no second number");
    if (operator === "divide") {
      operatorPressed = false;
      operator = undefined;
      operatorSymbol = undefined;
      displayContainer.textContent = `${firstNumber}`;
    } else {
      secondNumber = 0;
    }
  } else if (
    (firstNumber === 0 || secondNumber === 0) &&
    operator === "divide"
  ) {
    displayContainer.textContent = "pack it in.";
    operatorPressed = false;
    firstNumber = undefined;
    secondNumber = undefined;
  } else {
    result = operate(firstNumber, secondNumber, operator);
    displayContainer.textContent = `${result}`;
    operatorPressed = false;
    firstNumber = result;
    secondNumber = undefined;
  }
});
