const choices = ['+', '-', '*', '/', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', 'C', '=']

const inputs = document.querySelector('.calculator__inputs')

choices.map(item => {
    const input = document.createElement('div')
    item === '=' ? input.classList.add('input', 'equals') :input.classList.add('input')
    input.innerHTML = `<p>${item}</p>`
    inputs.appendChild(input)
})