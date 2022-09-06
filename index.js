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
        const resultContainer = document.querySelector('.calculator__result')

handleInputClick = (e) =>{
    let splittedResult = resultContainer.textContent.split(' ')
    let targetText = e.target.textContent
    switch(targetText){
        case '+':
        case '-':
        case '*':
        case '/':
            //used space
            resultContainer.textContent+= ` ${targetText} `
            break
        case 'C':
            resultContainer.textContent = ''
            break
        case '=':
            console.log(splittedResult)
            break
        case '.':
            splittedResult[splittedResult.length-1].includes(targetText) ? false : resultContainer.textContent += targetText
            break
        default:
            resultContainer.textContent+=e.target.textContent
            break
    }
}

inputs.forEach(input => {
    input.addEventListener('click', handleInputClick)
});