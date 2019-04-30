// variables
var firstNum
var secondNum
var realOperator

// helper functions
add = (a, b) => a + b
subtract = (a, b) => a - b
multiply = (a, b) => a * b
divide = (a, b) => a / b
operate = (operator, a, b) => {
  if (operator == '+') return add(+a,+b)
  if (operator == '-') return subtract(+a,+b)
  if (operator == '*') return multiply(+a,+b)
  if (operator == '/') return divide(+a,+b)
}
calculate = () => {
  secondNum = /\d+\D(\d+)/g.exec(display.innerHTML)[1]
  firstNum = /(\d+)\D\d+/g.exec(display.innerHTML)[1]
  realOperator = /\d+(\D)\d+/g.exec(display.innerHTML)[1]
  display.innerHTML = operate(realOperator, firstNum, secondNum)
}
backspace = () => {
  let arr = display.innerHTML.split('')
  let pop = arr.pop()
  display.innerHTML = arr.join('')
}

// dom variables
let display = document.querySelector('.display')
let numbers = document.querySelectorAll('.number')
let operators = document.querySelectorAll('.operator')
let equals = document.querySelector('.equals')

// DOM EVENTS 

// every number button can add its value to the display
numbers.forEach((number) => number.onclick = () => display.innerHTML += number.innerHTML)

// clear button
document.querySelector('.clear').onclick = () => display.innerHTML = ''

// for every operator: onclick: add operator to display and store firstNum. if there is an operator on screen already, operate on the numbers
operators.forEach((operator) => {
  operator.onclick = () => {
    if (/\d+\D(\d+)/g.test(display.innerHTML)){calculate()}
    display.innerHTML += operator.innerHTML
  }
})

// on equals click, capture operator and secondNum values, operate, and add answer to display
equals.onclick = () => {calculate()}

// backspace button
document.querySelector('.back').onclick = () => {
  backspace()
}

// keyboard support
window.addEventListener('keydown', (e) => {
  if (['1','2','3','4','5','6','7','8','9','0','Backspace','Delete','*','-','+','/','Enter'].includes(e.key)){
    if (e.key == 'Enter'){
      calculate()
    } else if (e.key == 'Backspace') {
      backspace()
    } else if (e.key == 'Delete') {
      display.innerHTML = ''
    } else {
      display.innerHTML += e.key.toString()
    }
  }
})