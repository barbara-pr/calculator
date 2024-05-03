document.addEventListener('DOMContentLoaded', () => {
    let display = document.getElementById('display')
    let numbersUser = document.querySelectorAll('.numbers button') 
    let operationUser = document.querySelectorAll('.operation') 
    let clearButton = document.getElementById('clear')
    let equalButton = document.getElementById('equal')
    let msg = document.getElementById('msg')

    // armazenar a expressão acumulada
    let expression = ''

    // percorrendo todos os números digitados 
    numbersUser.forEach(button => {
        button.addEventListener('click', () => {
            if (display.value === '0' || display.value === 'Error!') {
                display.value = ''
            }
            display.value += button.textContent
            expression += button.textContent
        })
    })

    // percorrendo todos os operadores digitados
    operationUser.forEach(button => {
        button.addEventListener('click', () => {
            let valueResult = button.textContent 
            if (valueResult === 'x') { // tratando o operador de multiplicação
                valueResult = '*'
            }
            display.value += valueResult; // dígito
            expression += valueResult; // operador
        })
    })

    equalButton.addEventListener('click', () => {
        try {
            display.value = eval(expression) // expressão acumulada
            expression = ''
        } catch (error) {
            msg.textContent = 'Error!'
        }
    })

    clearButton.addEventListener('click', () => {
        display.value = ''
        expression = ''
    })
})