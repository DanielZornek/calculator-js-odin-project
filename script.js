let valueOne;
let valueTwo;
let operator;
let result;
let countEntry = 0;
let resultArea = document.getElementById("calculator-result-data");

function operate(){
    resultArea.textContent = `${this.valueOne} ${this.operator} ${this.valueTwo} = ${this.result}`;
    
    reset();
}

function calculate(){
    switch(this.operator){
        case "+":
            add();
        break;
        case "-":
            subtract();
        break;
        case "x":
            multiply();
        break;
        case "/":
            divide();
        break;
        default:
            alert("Something doesnt work :(");
        break;
    }
}

function chooseOperator(operator){
    
    countEntry++;
    if(countEntry == 2){
        this.operator = operator;
        resultArea.textContent+=" "+this.operator;
    }else if(countEntry > 2 || countEntry <= 1){
        resultArea.textContent = "You must choose 2 numbers";
        countEntry--;
    }
    console.log(this.valueOne);
    console.log(this.valueTwo);
    console.log(this.operator);
    console.log(countEntry);
}

function takeValues(element){
    countEntry++;
    if(countEntry == 1 || countEntry == 3){
        console.log(countEntry);
        if(countEntry == 1){
            this.valueOne = Number(element.textContent);
            clearResult();
            resultArea.textContent+=this.valueOne;
        }else if(countEntry == 3){
            this.valueTwo = Number(element.textContent);
            resultArea.textContent+=" "+this.valueTwo
            calculate();
        }
        console.log("Valor 1: "+this.valueOne);
        console.log("Valor 2: "+this.valueTwo);
        // console.log(Number(element.textContent));
    }else{
        alert("Você deve inserir o primeiro valor, operação e depois outro valor, nessa ordem!");
        countEntry = 0;
        clearResult();
    }
}

function add(){
    this.result = Number(this.valueOne + this.valueTwo);
    console.log(this.result);
}

function subtract(){
    this.result = this.valueOne - this.valueTwo;
    console.log(this.result);
}

function multiply(){
    this.result = this.valueOne * this.valueTwo;
    console.log(this.result);
}

function divide(){
    this.result = Number(this.valueOne / this.valueTwo);
    console.log(this.result);
}

function clearResult(){
    resultArea.textContent = "";
}

function reset(){
    countEntry = 0;
    valueOne = null;
    valueTwo = null;
    result = 0;
}