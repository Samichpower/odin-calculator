const operators = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
}

let numOne;
let numTwo;
let operator;
let displayValue = '';

function operate(numOne, operator, numTwo) {
  return operators[operator](numOne, numTwo);
}

function populateDisplay() {
  const displayOutput = document.querySelector('#output');
  displayOutput.textContent = displayValue;
}

const numberBtns = document.querySelectorAll('.number');
numberBtns.forEach((num) => {
  num.addEventListener('click', () => {
    displayValue += num.textContent;
    populateDisplay();
  })
})

function doOperation(value) {
  numOne = displayValue;
  numTwo = displayValue;
  console.log(displayValue);
  displayValue = '';
  operator = value;
}

const divideBtn = document.querySelector('.divide');
divideBtn.addEventListener('click', () => doOperation('divide'));

const multiplyBtn = document.querySelector('.multiply');
const subtractBtn = document.querySelector('.subtract');
const addBtn = document.querySelector('.add');
const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', () => {
  numTwo = displayValue;
  let result = operate(numOne, operator, numTwo);
  numOne = result;
  displayValue = result;
  populateDisplay();
});