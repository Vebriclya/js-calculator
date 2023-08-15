const displayContainer = document.querySelector("#display");
const numberOne = document.querySelector("#numberOne");
const numberTwo = document.querySelector("#numberTwo");
const numberThree = document.querySelector("#numberThree");
const numberFour = document.querySelector("#numberFour");
const numberFive = document.querySelector("#numberFive");
const numberSix = document.querySelector("#numberSix");
const numberSeven = document.querySelector("#numberSeven");
const numberEight = document.querySelector("#numberEight");
const numberNine = document.querySelector("#numberNine");
const numberZero = document.querySelector("#numberZero");
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

numberOne.addEventListener("click", () => {
  console.log("1 button pressed");
  if ((firstNumber = undefined)) {
    firstNumber = 1;
    displayContainer.textContent = firstNumber;
  } else if (firstNumber != undefined && operatorPressed === false) {
    firstNumber + "1";
  } else {
    secondNumber = 1;
  }

  displayContainer.append(firstNumber);
});
numberTwo.addEventListener("click", () => {
  if ((firstNumber = undefined)) {
    firstNumber = 2;
  } else if (firstNumber != undefined && operatorPressed === false) {
    firstNumber + "2";
  } else {
    secondNumber = 2;
  }
});
numberThree.addEventListener("click", () => {
  if ((firstNumber = undefined)) {
    firstNumber = 3;
  } else if (firstNumber != undefined && operatorPressed === false) {
    firstNumber + "3";
  } else {
    secondNumber = 3;
  }
});
numberFour.addEventListener("click", () => {
  if ((firstNumber = undefined)) {
    firstNumber = 4;
  } else if (firstNumber != undefined && operatorPressed === false) {
    firstNumber + "4";
  } else {
    secondNumber = 4;
  }
});
numberFive.addEventListener("click", () => {
  if ((firstNumber = undefined)) {
    firstNumber = 5;
  } else if (firstNumber != undefined && operatorPressed === false) {
    firstNumber + "5";
  } else {
    secondNumber = 5;
  }
});
numberSix.addEventListener("click", () => {
  if ((firstNumber = undefined)) {
    firstNumber = 6;
  } else if (firstNumber != undefined && operatorPressed === false) {
    firstNumber + "6";
  } else {
    secondNumber = 6;
  }
});
numberSeven.addEventListener("click", () => {
  if ((firstNumber = undefined)) {
    firstNumber = 7;
  } else if (firstNumber != undefined && operatorPressed === false) {
    firstNumber + "7";
  } else {
    secondNumber = 7;
  }
});
numberEight.addEventListener("click", () => {
  if ((firstNumber = undefined)) {
    firstNumber = 8;
  } else if (firstNumber != undefined && operatorPressed === false) {
    firstNumber + "8";
  } else {
    secondNumber = 8;
  }
});
numberNine.addEventListener("click", () => {
  if ((firstNumber = undefined)) {
    firstNumber = 9;
  } else if (firstNumber != undefined && operatorPressed === false) {
    firstNumber + "9";
  } else {
    secondNumber = 9;
  }
});
numberZero.addEventListener("click", () => {
  if ((firstNumber = undefined)) {
    firstNumber = 0;
  } else if (firstNumber != undefined && operatorPressed === false) {
    firstNumber + "0";
  } else {
    secondNumber = 0;
  }
});
addButton.addEventListener("click", () => {
  if ((firstNumber = undefined)) {
    firstNumber = 1;
  } else {
    secondNumber = 1;
  }
});
subtractButton.addEventListener("click", () => {});
divideButton.addEventListener("click", () => {});
multiplyButton.addEventListener("click", () => {});
