const input1 = document.getElementById("noIzquierda")
const input2 = document.getElementById("noDerecha")
const inputRes = document.getElementById("resultado")

const btnSuma = document.getElementById("suma")
const btnResta = document.getElementById("resta")
const btnMultiplica = document.getElementById("multiplica")
const btnDivide = document.getElementById("divide")

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multiplica = (a, b) => a * b
const divide = (a, b) => a / b


const handleSuma = () => {
    const izq = parseInt(input1.value)
    const der = parseInt(input2.value)
    inputRes.value = add(izq, der)
}

const handleResta = () => {
    inputRes.value = resta(input1.value, input2.value)
}

const handleMultiplica = () => {
    inputRes.value = multiplica(input1.value, input2.value)
}

const handleDivide = () => {
    inputRes.value = divide(input1.value, input2.value)
}

btnSuma.addEventListener("click", handleSuma)
btnResta.addEventListener("click", handleResta)
btnMultiplica.addEventListener("click", handleMultiplica)
btnDivide.addEventListener("click", handleDivide)