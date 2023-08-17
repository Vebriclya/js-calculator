// if a number is pressed after a result is given, reset the number to whatever is pressed
// or if no operator is pressed reset the number to whatever is pressed

const displayContainer = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".fake-button");
const equalsButton = document.querySelector(".equals");
const addButton = document.querySelector(".addition");
const subtractButton = document.querySelector(".subtraction");
const divideButton = document.querySelector(".division");
const multiplyButton = document.querySelector(".multiplication");
const miscButtons = document.querySelectorAll(".fake-button-4");
let operatorPressed = false;
const equalsButtonPressed = false;
let firstNumber;
let operator;
let secondNumber;
let result;

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

/* ---------- FUNCTIONS ---------- */

function removeOperatorIds() {
  addButton.removeAttribute("id");
  subtractButton.removeAttribute("id");
  multiplyButton.removeAttribute("id");
  divideButton.removeAttribute("id");
}

function clearCalculation() {
  displayContainer.textContent = ``;
  operatorPressed = false;
  firstNumber = undefined;
  secondNumber = undefined;
  operator = undefined;
  result = undefined;
  removeOperatorIds();
}

function operate(firstNumber, secondNumber, operator) {
  result = 0;

  switch (operator) {
    case "addition":
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
  removeOperatorIds();
  displayContainer.textContent = result;
  return result;
}

/* ---------- EVENT LISTENERS ---------- */

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`${button.textContent} has been pressed`);
    const numberValue = button.textContent;

    if (firstNumber === undefined || firstNumber === result) {
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

addButton.addEventListener("click", () => {
  // if there is a second number, calculate the result and use it as the first number of the next operation (make it the = button)
  if (firstNumber && operator && secondNumber) {
    result = operate(firstNumber, secondNumber, operator);
    operatorPressed = true;
    firstNumber = result;
    secondNumber = undefined;
    operator = "addition";
    addButton.setAttribute("id", "operator-pressed");
  } else {
    console.log("add pressed");
    operator = "addition";
    operatorPressed = true;
    addButton.setAttribute("id", "operator-pressed");
  }
  // otherwise act normal
});

subtractButton.addEventListener("click", () => {
  if (firstNumber && operator && secondNumber) {
    result = operate(firstNumber, secondNumber, operator);
    operatorPressed = true;
    firstNumber = result;
    secondNumber = undefined;
    operator = "subtraction";
    subtractButton.setAttribute("id", "operator-pressed");
  } else {
    operator = "subtraction";
    operatorPressed = true;
    subtractButton.setAttribute("id", "operator-pressed");
  }
});

divideButton.addEventListener("click", () => {
  if (firstNumber === 0 || secondNumber === 0) {
    displayContainer.textContent("You know that won't work");
  } else if (firstNumber && secondNumber && operator) {
    result = operate(firstNumber, secondNumber, operator);
    operatorPressed = true;
    firstNumber = result;
    secondNumber = undefined;
    operator = "division";
    divideButton.setAttribute("id", "operator-pressed");
  } else {
    operator = "division";
    operatorPressed = true;
    divideButton.setAttribute("id", "operator-pressed");
  }
});

multiplyButton.addEventListener("click", () => {
  if (firstNumber && secondNumber && operator) {
    result = operate(firstNumber, secondNumber, operator);
    operatorPressed = true;
    firstNumber = result;
    secondNumber = undefined;
    operator = "multiplication";
    multiplyButton.setAttribute("id", "operator-pressed");
  } else {
    operator = "multiplication";
    operatorPressed = true;
    multiplyButton.setAttribute("id", "operator-pressed");
  }
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
            displayContainer.textContent = `${firstNumber}`;
          } else if (!secondNumber.toString()) {
          } else {
            let numString = secondNumber.toString();
            secondNumber = parseInt(numString.slice(0, -1));
            console.log(secondNumber);
            displayContainer.textContent = `${secondNumber}`;
          }
        } // To delete if there is an operator
        else if (secondNumber === undefined && operator && firstNumber) {
          console.log("You're in the second loop");
          operatorPressed = false;
          operator = undefined;
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
        clearCalculation();
        break;
      case "ce":
        console.log("ce pressed");
        // clears last number/operation
        if (firstNumber && operator && secondNumber) {
          secondNumber = undefined;
          displayContainer.textContent = `${firstNumber}`;
        } else if (
          firstNumber &&
          operator &&
          (secondNumber === "" || secondNumber === undefined)
        ) {
          operatorPressed = false;
          operator = undefined;
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
    if (operator === "division") {
      operatorPressed = false;
      operator = undefined;
      displayContainer.textContent = `${firstNumber}`;
    } else {
      secondNumber = 0;
      removeOperatorIds();
    }
  } else if (
    (firstNumber === 0 || secondNumber === 0) &&
    operator === "division"
  ) {
    displayContainer.textContent = "pack it in.";
    clearCalculation();
  } else {
    result = operate(firstNumber, secondNumber, operator);
    operatorPressed = false;
    firstNumber = result;
    secondNumber = undefined;
  }
});
