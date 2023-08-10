const operators = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
}

let numOne = '';
let numTwo = '';
let operator = '';
let displayValue = '';

function operate(numOne, operator, numTwo) {
  console.log(numOne, operator, numTwo);
  return operators[operator](+numOne, +numTwo);
}

const displayOutput = document.querySelector('#output');
function populateDisplay() {
  displayOutput.textContent = displayValue;
}

function adjustNumSize() {
  if (displayValue.toString().length >= 11) {
    displayOutput.style.fontSize = '35px';
  } else if (displayValue.toString().length >= 8) {
    displayOutput.style.fontSize = '48px';
  } else {
    displayOutput.style.fontSize = '70px';
  }

}

const numberBtns = document.querySelectorAll('.number');
numberBtns.forEach((num) => {
  num.addEventListener('click', () => {
    if (clearBtn.textContent === 'AC') clearBtn.textContent = 'C';
    if (displayValue.toString().length >= 14) return;
    
    if (num.textContent === '.' && displayValue.includes('.')) {
      return
    } else {
      displayValue += num.textContent;
      if (!operator) {
        numOne = displayValue;
      } else {
        numTwo = displayValue;
      }
    }

    adjustNumSize();
    populateDisplay();
  })
})

function doOperation(value) {
  numOne = displayValue;
  displayValue = '';
  numTwo = '';
  operator = value;
}

const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', () => {
  if (!numTwo) numTwo = numOne;
  let result = operate(numOne, operator, numTwo);
  if (result.toString().length > 14) {
    result = result.toString().slice(0, 14);
  }
  numOne = result
  displayValue = result;
  populateDisplay();
  adjustNumSize();
});

const divideBtn = document.querySelector('.divide');
divideBtn.addEventListener('click', () => doOperation('divide'));

const multiplyBtn = document.querySelector('.multiply');
multiplyBtn.addEventListener('click', () => doOperation('multiply'));

const subtractBtn = document.querySelector('.subtract');
subtractBtn.addEventListener('click', () => doOperation('subtract'));

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', () => doOperation('add'));

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
  numOne = '';
  numTwo = '';
  operator = '';
  displayValue = 0;
  populateDisplay();
  displayValue = '';
  adjustNumSize();
  clearBtn.textContent = 'AC'
})

const posNegBtn = document.querySelector('.pos-neg');
posNegBtn.addEventListener('click', () => {
  if (displayValue > 0) {
    displayValue = -displayValue;
  }
  populateDisplay();
})