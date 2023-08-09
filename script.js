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

const numberBtns = document.querySelectorAll('.number');


function operate(numOne, operator, numTwo) {
  return operators[operator](numOne, numTwo);
}

console.log(operate(50, 'add', 10));

function populateDisplay() {
  const displayOutput = document.querySelector('#output');
  numberBtns.forEach((num) => {
    num.addEventListener('click', () => {
      displayValue += num.textContent;
      displayOutput.textContent = displayValue;
    })
  })
}
populateDisplay();