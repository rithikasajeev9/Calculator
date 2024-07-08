const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
let result = '';

function clearAll() {
  display.textContent = '0';
  result = '';
}

function updateDisplay() {
  display.textContent = result || '0';
  clear.textContent = result ? 'C' : 'AC';
}

function evaluateExpression() {
  try {
    result = eval(result).toString(); 
  } catch (error) {
    result = 'Error';
  }
  updateDisplay();
}

function handleButtonPress(value) {
  if (value === '=') {
    evaluateExpression();
  } else if (value === 'C' || value === 'AC') {
    clearAll();
  } else if (value === '⌫') {
    result = result.slice(0, -1);
    updateDisplay();
  } else if (value === 'sin' || value === 'cos' || value === 'tan' || value === 'log' || value === 'ln' || value === '√' || value === '^') {
    handleScientificFunction(value);
  } else {
    result += value;
    updateDisplay();
  }
}

function handleScientificFunction(func) {
  try {
    let number;
    switch (func) {
      case 'sin':
        number = parseFloat(result);
        result = Math.sin(number).toString();
        break;
      case 'cos':
        number = parseFloat(result);
        result = Math.cos(number).toString();
        break;
      case 'tan':
        number = parseFloat(result);
        result = Math.tan(number).toString();
        break;
      case 'log':
        number = parseFloat(result);
        result = Math.log10(number).toString();
        break;
      case 'ln':
        number = parseFloat(result);
        result = Math.log(number).toString();
        break;
      case '√':
        number = parseFloat(result);
        result = Math.sqrt(number).toString();
        break;
      case '^':
        result += '**'; 
        break;
    }
  } catch (error) {
    result = 'Error';
  }
  updateDisplay();
}

function init() {
  document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
      handleButtonPress(button.textContent);
    });
  });
}

init();

function toggleMode() {
  const body = document.body;
  const moonIcon = document.querySelector('.moon-icon');
  const sunIcon = document.querySelector('.sun-icon');
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
  if (body.classList.contains('dark-mode')) {
    moonIcon.style.opacity = '1';
    sunIcon.style.opacity = '0';
  } else {
    moonIcon.style.opacity = '0';
    sunIcon.style.opacity = '1';
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const moonIcon = document.querySelector('.moon-icon');
  const sunIcon = document.querySelector('.sun-icon');

  if (body.classList.contains('dark-mode')) {
    moonIcon.style.opacity = '1';
    sunIcon.style.opacity = '0';
  } else {
    moonIcon.style.opacity = '0';
    sunIcon.style.opacity = '1';
  }
});


