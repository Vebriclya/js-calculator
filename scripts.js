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
const decimalButton = document.querySelector(".decimal-point");
let decimalPressed = false;
let firstNumber;
let operator;
let secondNumber;
let result;

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

/* ---------- FUNCTIONS ---------- */

function resetOperator() {
  operatorPressed = false;
  operator = undefined;
}

function removeOperatorIds() {
  addButton.removeAttribute("id");
  subtractButton.removeAttribute("id");
  multiplyButton.removeAttribute("id");
  divideButton.removeAttribute("id");
}

function clearCalculation(clearScreen) {
  if (clearScreen === true) {
    displayContainer.textContent = ``;
  }

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
  resetOperator();
  const roundedResult = Math.round(result * 1000) / 1000;
  displayContainer.textContent = roundedResult;
  return roundedResult;
}

function logNumbers(numberValue) {
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
}

function backspaceFunction() {
  console.log("backspace pressed");
  // To delete if there's a second number
  if (
    (secondNumber !== undefined && operator && firstNumber) ||
    (secondNumber !== undefined && firstNumber)
  ) {
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
    resetOperator();
    removeOperatorIds();
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
}

function equalsFunction() {
  if ((firstNumber === 0 || secondNumber === 0) && operator === "division") {
    console.log("divided by 0");
    displayContainer.textContent = "pack it in.";
    clearCalculation();
  } else if (!secondNumber) {
    console.log("There's no second number");
    if (operator === "division") {
      clearCalculation((clearScreen = true));
    } else {
      clearCalculation((clearScreen = true));
    }
  } else {
    result = operate(firstNumber, secondNumber, operator);
    operatorPressed = false;
    firstNumber = result;
    secondNumber = undefined;
  }
}

function multiplyFunction() {
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
}

function subtractFunction() {
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
}

function addFunction() {
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
}

function divideFunction() {
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
}

/* ---------- EVENT LISTENERS ---------- */

document.addEventListener("keydown", (event) => {
  const keyPressed = event.key;
  console.log(`${keyPressed} outside switch`);

  /* Please forgive me for these being if statements I wanted a switch but I can't use regex in a switch apparently
  and to make matters worse, they have to be separate if statements or it doesn't work at all. Sorry! */
  if (/^[0-9]$/.test(keyPressed)) {
    logNumbers(keyPressed);
    console.log(`${keyPressed} inside if statement`);
  }
  if (keyPressed === "Backspace") {
    backspaceFunction();
  }
  if (keyPressed === "Enter") {
    equalsFunction();
  }
  if (keyPressed === "/") {
    divideFunction();
  }
  if (keyPressed === "*") {
    multiplyFunction();
  }
  if (keyPressed === "-") {
    subtractFunction();
  }
  if (keyPressed === "+") {
    addFunction();
  }
});

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`${button.textContent} has been pressed`);
    const numberValue = button.textContent;

    logNumbers(numberValue);
  });
});

addButton.addEventListener("click", () => {
  addFunction();
});

subtractButton.addEventListener("click", () => {
  subtractFunction();
});

divideButton.addEventListener("click", () => {
  divideFunction();
});

multiplyButton.addEventListener("click", () => {
  multiplyFunction();
});

miscButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case "backspace":
        backspaceFunction();
        break;
      case "c":
        console.log("c pressed");
        //clears everything
        clearCalculation((clearScreen = true));
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
          resetOperator();
          removeOperatorIds();
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
  equalsFunction();
});

decimalButton.addEventListener("click", () => {
  if (decimalPressed === false) {
    decimalPressed = true;
    console.log("decimal pressed");
    decimalButton.setAttribute("id", "disabled");
    if (firstNumber === undefined) {
      firstNumber = "0.";
      displayContainer.textContent = firstNumber;
    }
  } else if ((decimalPressed = true)) {
  }
  /*  } else if (firstNumber !== undefined && !operatorPressed) {
    firstNumber = parseInt(firstNumber.toString() + numberValue);
    displayContainer.textContent = firstNumber;
  } else if (secondNumber === undefined && operatorPressed) {
    secondNumber = parseInt(numberValue);
    displayContainer.textContent = `${secondNumber}`;
  } else if (secondNumber !== undefined && !equalsButtonPressed) {
    secondNumber = parseInt(secondNumber.toString() + numberValue);
    displayContainer.textContent = `${secondNumber}`;
  }
  */
});
