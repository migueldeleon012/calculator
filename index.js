const choices = ['+', '-', '*', '/', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', 'C', '=']
const inputContainer = document.querySelector('.calculator__inputs')

//render boxes
choices.forEach(item => {
    const input = document.createElement('button')
    item === '=' ? input.classList.add('input', 'equals') :input.classList.add('input')
    input.innerHTML = item
    inputContainer.appendChild(input)
})

//written inputs here because of rendering above
const inputs = document.querySelectorAll('.input')

handleInputClick = (e) =>{
    console.log(e.target.textContent)
}

inputs.forEach(input => {
    input.addEventListener('click', handleInputClick)
});