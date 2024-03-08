const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

console.log(keys);

let displayValue = 0;
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;


keys.addEventListener('click', function(e){
   
    const element = e.target;
    if(!element.matches('button')){
        return;
    }

    if(element.classList.contains('equal-sign')){
        if(firstValue != null){
            calculate();
            updateDisplay();
        }else {
            displayValue = 'Deger girilmedi.';
            updateDisplay();
        }
        return;
    }

    if(element.classList.contains('operator')){
            handleOperator(element.value);
        return;
    }

    if(element.classList.contains('clear')){
        displayValue = '0';
        updateDisplay();
        return;
    }

    if(element.classList.contains('decimal')){
        inputDecimal();
        updateDisplay();
        return;
    }
    inputNumber(element.value);
    updateDisplay();

    console.log(e.target);
});


function handleOperator(nextOperator){
    const value = parseFloat(displayValue);

    if(firstValue === null){
        firstValue = value;
    }

    waitingForSecondValue = true;
    operator = nextOperator;
}

function inputNumber(text){
    if(waitingForSecondValue){
        displayValue = text;
        waitingForSecondValue = false;
    }else{
        if(displayValue == 0)
            displayValue = text;
        else
            displayValue += text;
    }
}


function calculate(){
    const secondNum = parseFloat(displayValue);
    console.log(secondNum);
    let calculateValue;
    switch(operator){
        case '+':calculateValue = firstValue + secondNum; 
        displayValue = String(calculateValue);
        operator = null; 
        firstValue = null;
        return;
        case '-':calculateValue = firstValue - secondNum;
        displayValue = String(calculateValue);
        operator = null; 
        firstValue = null;
        return;
        case '*':calculateValue = firstValue * secondNum;
        displayValue = String(calculateValue); 
        operator = null; 
        firstValue = null;
        return;
        case '/':calculateValue = firstValue / secondNum;
        displayValue = String(calculateValue); 
        operator = null;
        firstValue = null;
        return;
    }
    
}


function inputDecimal(){
    if(waitingForSecondValue){
        displayValue = text;
        waitingForSecondValue = false;
    }else
        if(!displayValue.includes('.'))
            displayValue += '.';
}


function updateDisplay(){
    display.value = displayValue;
}