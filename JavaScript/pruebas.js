let firstNumber = ""
let secondNumber = ""

document.querySelector("#firstNumber").addEventListener("change" ,(e)=>{
    firstNumber = parseInt(e.target.value)
})

document.querySelector("#secondNumber").addEventListener("change" ,(e)=>{
    secondNumber = parseInt(e.target.value)
})

//Suma
document.querySelector("#add").addEventListener("click",()=>{
    if (firstNumber == "" || secondNumber === ""){
    }else{
    
        document.querySelector("#answer").innerHTML = firstNumber + secondNumber
    }

})

//Resta
document.querySelector("#subtract").addEventListener("click",()=>{
    if (firstNumber == "" || secondNumber === ""){
    }else{
        document.querySelector("#answer").innerHTML = firstNumber - secondNumber
    }

})

//Multiplicación
document.querySelector("#product").addEventListener("click",()=>{
    if (firstNumber == "" || secondNumber === ""){
    }else{
        document.querySelector("#answer").innerHTML = firstNumber * secondNumber
    }

})

//División
document.querySelector("#divide").addEventListener("click",()=>{
    if (firstNumber == "" || secondNumber === ""){
    }else{
        document.querySelector("#answer").innerHTML = firstNumber / secondNumber
    }

})


// alert("firstNumber:" + firstNumber + "secondNumber: " + secondNumber )