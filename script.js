const btnAdicao = document.querySelector('.btnAdicao')
const btnSubtracao = document.querySelector('.btnSubtracao')
const btnMultiplicacao = document.querySelector('.btnMultiplicacao')
const btnDivisao = document.querySelector('.btnDivisao')
const showresult = document.querySelector('p')
const zerar = document.querySelector('.zerar')


btnAdicao.addEventListener('click', () => { adicao() })
btnSubtracao.addEventListener('click', () => {subtração()})
btnMultiplicacao.addEventListener('click', () => {multiplicação()})
btnDivisao.addEventListener('click', () => {divisão()})

zerar.addEventListener('click', () => {
    showresult.innerHTML = 'Resultado:'
})




const adicao = () => {
    const num1 = parseFloat(document.querySelector('.firstNum').value)
    const num2 = parseFloat(document.querySelector('.SecondNum').value)
    showresult.innerHTML = `Resultado: ${num1 + num2}`
}
const subtração = () => {
    const num1 = parseFloat(document.querySelector('.firstNum').value)
    const num2 = parseFloat(document.querySelector('.SecondNum').value)
    showresult.innerHTML = `Resultado: ${num1 - num2}`
}
const multiplicação = () => {
    const num1 = parseFloat(document.querySelector('.firstNum').value)
    const num2 = parseFloat(document.querySelector('.SecondNum').value)
    showresult.innerHTML = `Resultado: ${num1 * num2}`
}
const divisão = () => {
    const num1 = parseFloat(document.querySelector('.firstNum').value)
    const num2 = parseFloat(document.querySelector('.SecondNum').value)
    showresult.innerHTML = `Resultado: ${num1 / num2}`
}

