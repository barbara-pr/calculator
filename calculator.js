document.addEventListener('DOMContentLoaded', () => {
    let display = document.getElementById('display')
    let numbersUser = document.querySelectorAll('.numbers button') 
    let operationUser = document.querySelectorAll('.operation button')
    let clearButton = document.getElementById('clear')
    let msg = document.getElementById('msg')

    // armazenar a expressão acumulada
    let expression = ''

    //percorrendo todos os números digitados e criando uma função para retornar o forEach
    numbersUser.forEach(button => {
        button.addEventListener('click', () => { //quando clicar vai chamar uma função
            if (display.value === '0' || display.value === 'Error!') {
                display.value = ''
            }
            display.value += button.textContent
            expression += button.textContent
        })
    })

    //percorrendo todos os operadores digitados
    operationUser.forEach(button => {
        button.addEventListener('click', () => {
            let valueResult = button.textContent 
            if (valueResult === '=') {
                try {
                    display.value = eval(expression.replace('x', '*')) //operador de multiplicação é *
                } catch (error) {
                    msg.textContent = 'Error!'
                }
                expression = ''
            } else {
                display.value += valueResult //dígito
                expression += valueResult //operador
            }
        })
    })

    clearButton.addEventListener('click', () => {
        display.value = ''
        expression = ''
    })
})