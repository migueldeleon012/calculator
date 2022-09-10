const choices = [
  '+',
  '-',
  '*',
  '/',
  '7',
  '8',
  '9',
  '4',
  '5',
  '6',
  '1',
  '2',
  '3',
  '0',
  '.',
  'C',
  '=',
];
const inputContainer = document.querySelector('.calculator__inputs');

//render boxes
choices.forEach((item) => {
  const input = document.createElement('button');
  switch (item) {
    case '+':
    case '-':
    case '*':
    case '/':
      input.classList.add('input', 'operator');
      break;
    case '=':
      input.classList.add('input', 'equals');
      break;
    default:
      input.classList.add('input');
      break;
  }
  input.innerHTML = item;
  inputContainer.appendChild(input);
});

//written inputs here because of rendering above
const inputs = document.querySelectorAll('.input');
const resultContainer = document.querySelector('.result');

const operate = (firstNumber, operand, secondNumber, secondOperand) => {
  let result;
  switch (operand) {
    case '+':
      result = +firstNumber + +secondNumber;
      resultContainer.innerHTML = `${result}${
        secondOperand ? ` ${secondOperand} ` : ''
      }`;
      break;
    case '-':
      result = +firstNumber - +secondNumber;
      resultContainer.innerHTML = `${result}${
        secondOperand ? ` ${secondOperand} ` : ''
      }`;
      break;
    case '*':
      result = +firstNumber * +secondNumber;
      resultContainer.innerHTML = `${result}${
        secondOperand ? ` ${secondOperand} ` : ''
      }`;
      break;
    case '/':
      result = +firstNumber / +secondNumber;
      result === NaN
        ? (resultContainer.innerHTML = 'Infinity')
        : (resultContainer.innerHTML = `${result}${
            secondOperand ? ` ${secondOperand} ` : ''
          }`);
      break;
    default:
      return false;
  }
};

handleInputClick = (e) => {
  let splittedResult = resultContainer.textContent.split(' ');
  let targetText = e.target.textContent;
  let firstNumber = splittedResult[0];
  let operand = splittedResult[1];
  let seconNumber = splittedResult[2];

  switch (targetText) {
    case '+':
    case '-':
    case '*':
    case '/':
      //used space
      resultContainer.textContent.length > 16
        ? false
        : splittedResult.length === 3
        ? secondNumber === ''
          ? (resultContainer.textContent = `${firstNumber} ${targetText} `)
          : operate(firstNumber, operand, seconNumber, targetText)
        : secondNumber === ''
        ? false
        : (resultContainer.textContent += ` ${targetText} `);
      break;
    case '0':
      secondNumber[0] === '0' && !secondNumber.includes('.')
        ? false
        : (resultContainer.textContent += targetText);
      break;
    case 'C':
      resultContainer.textContent = '';
      break;
    case '.':
      resultContainer.textContent.length > 16
        ? false
        : secondNumber.includes(targetText) || secondNumber === ''
        ? false
        : (resultContainer.textContent += targetText);
      break;
    case '=':
      operate(firstNumber, operand, seconNumber);
      break;
    default:
      resultContainer.textContent.length <= 16
        ? (resultContainer.textContent += e.target.textContent)
        : false;
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener('click', handleInputClick);
});
