function add (){
    let firstNumber = Number (document.getElementById("firstNumber").value)
    let secondNumber = Number (document.getElementById("secondNumber").value)
    let add = firstNumber + secondNumber
    document.getElementById("answer").innerHTML = add
    
}

function subtract (){
    let firstNumber = Number (document.getElementById("firstNumber").value)
    let secondNumber = Number (document.getElementById("secondNumber").value)
    let subtract = firstNumber - secondNumber
    document.getElementById("answer").innerHTML = subtract
    
}

function product (){
    let firstNumber = Number (document.getElementById("firstNumber").value)
    let secondNumber = Number (document.getElementById("secondNumber").value)
    let product = firstNumber * secondNumber
    document.getElementById("answer").innerHTML = product

}

function divide (){
    let firstNumber = Number (document.getElementById("firstNumber").value)
    let secondNumber = Number (document.getElementById("secondNumber").value)
    let divide = firstNumber / secondNumber
    document.getElementById("answer").innerHTML = divide
    

}


