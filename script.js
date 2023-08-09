const operators = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
}

let numOne = '';
let numTwo = '';
let operator;
let displayValue = '';

function operate(numOne, operator, numTwo) {
  console.log(numOne, operator, numTwo);
  return operators[operator](+numOne, +numTwo);
}

function populateDisplay() {
  const displayOutput = document.querySelector('#output');
  displayOutput.textContent = displayValue;
}

const numberBtns = document.querySelectorAll('.number');
numberBtns.forEach((num) => {
  num.addEventListener('click', () => {
    if (!operator) {
      numOne += num.textContent;
    } else {
      numTwo += num.textContent;
    }
    displayValue += num.textContent;
    populateDisplay();
  })
})

function doOperation(value) {
  displayValue = '';
  numTwo = '';
  operator = value;
}

const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', () => {
  if (!numTwo) numTwo = numOne;
  let result = operate(numOne, operator, numTwo);
  numOne = result
  displayValue = result;
  populateDisplay();
});

const divideBtn = document.querySelector('.divide');
divideBtn.addEventListener('click', () => doOperation('divide'));

const multiplyBtn = document.querySelector('.multiply');
multiplyBtn.addEventListener('click', () => doOperation('multiply'));

const subtractBtn = document.querySelector('.subtract');
subtractBtn.addEventListener('click', () => doOperation('subtract'));

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', () => doOperation('add'));