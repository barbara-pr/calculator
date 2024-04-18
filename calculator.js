let display = document.getElementById('display')
let numbers = document.querySelectorAll('.numbers input[type="button"]')
let operators = document.querySelectorAll('.operators input[type="button"]')
let msg = document.getElementById('msg')

//Adicionando evento de clique aos números
numbers.forEach(button => {
    button.addEventListener('click', function() {
        //Para aparecer no display
        if (display.value === "C") {
            display.value = ""
        }
        display.value += button.value
    })
})

//Adicionando evento de clique aos operadores
operators.forEach(button => {
    button.addEventListener('click', function() {
        let value = button.value
        if (value === '=') {
            try {
                display.value = eval(display.value.replace('x', '*'))
            } catch (error) {
                msg.textContent = 'Error!'
            }
        } else {
            display.value += value
        }
    })
})

function clearDisplay() {
    display.value = ''
}