const displayContainer = document.querySelector("#display");
const numberOne = document.querySelector("#1");
const numberTwo = document.querySelector("#2");
const numberThree = document.querySelector("#3");
const numberFour = document.querySelector("#4");
const numberFive = document.querySelector("#5");
const numberSix = document.querySelector("#6");
const numberSeven = document.querySelector("#7");
const numberEight = document.querySelector("#8");
const numberNine = document.querySelector("#9");
const numberZero = document.querySelector("#0");
const addButton = document.querySelector("#addition");
const subtractButton = document.querySelector("#subtraction");
const divideButton = document.querySelector("#multiplication");
const multiplyButton = document.querySelector("#division");
const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

let firstNumber = 0;
let operator;
let secondNumber = 0;

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

numberOne.addEventListener("click", () => {});
numberTwo.addEventListener("click", () => {});
numberThree.addEventListener("click", () => {});
numberFour.addEventListener("click", () => {});
numberFive.addEventListener("click", () => {});
numberSix.addEventListener("click", () => {});
numberSeven.addEventListener("click", () => {});
numberEight.addEventListener("click", () => {});
numberNine.addEventListener("click", () => {});
numberZero.addEventListener("click", () => {});
addButton.addEventListener("click", () => {});
subtractButton.addEventListener("click", () => {});
divideButton.addEventListener("click", () => {});
multiplyButton.addEventListener("click", () => {});
