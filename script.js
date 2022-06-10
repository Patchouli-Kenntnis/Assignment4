// Model

const MAX_LENGTH = 10000000000; // Display at most 10 digits
let operands = [];
operands.push(0);
let operator = "";

function clickNumber(x) { // Modify the operand on the top
    operands[operands.length - 1] = operands[operands.length - 1] * 10 + x;
    updateOperand();
}

function setOperator(str) {
    if (operands.length == 1) {
        operator = str;
        operands.push(0);
    }

}

function operate() {
    if (operands.length == 2) {
        let result = 0;

        switch (operator) {
            case "+":
                result = operands[0] + operands[1];
                break;
            case "-":
                result = operands[0] - operands[1];
                break;
            case "*":
                result = operands[0] + operands[1];
                break;
            case "/":
                if (operands[1] != 0)
                    result = operands[0] / operands[1];
                else
                    alert("ERROR: Divide by zero");
                break;
        }

        operands = [];
        operands.push(result);
        updateOperand();
    }
}

function clear() {
    if (operands[operands.length - 1] != 0) {
        operands[operands.length - 1] = 0;
    }
    else {
        if (operands.length > 1)
            operands.pop();
    }
    updateOperand();
}

// View

function updateOperand() {
    if (operands.length > 1) {
        document.getElementById("lastOperand").textContent = operands[0];
        document.getElementById("operator").textContent = operator;
    }
    else {
        document.getElementById("lastOperand").textContent = "";
        document.getElementById("operator").textContent = "";
    }
    document.getElementById("currentOperand").textContent = operands[operands.length - 1] % MAX_LENGTH;
}



// Controller

document.querySelector("#btn1").onclick = () => clickNumber(1);
document.querySelector("#btn2").onclick = () => clickNumber(2);
document.querySelector("#btn3").onclick = () => clickNumber(3);
document.querySelector("#btn4").onclick = () => clickNumber(4);
document.querySelector("#btn5").onclick = () => clickNumber(5);
document.querySelector("#btn6").onclick = () => clickNumber(6);
document.querySelector("#btn7").onclick = () => clickNumber(7);
document.querySelector("#btn8").onclick = () => clickNumber(8);
document.querySelector("#btn9").onclick = () => clickNumber(9);
document.querySelector("#btn0").onclick = () => clickNumber(0);
document.querySelector("#btnEq").onclick = operate;
document.querySelector("#add").onclick = () => setOperator("+");
document.querySelector("#sub").onclick = () => setOperator("-");
document.querySelector("#mul").onclick = () => setOperator("*");
document.querySelector("#div").onclick = () => setOperator("/");
document.querySelector("#btnCE").onclick = clear;

// TODO: Add support for negative numbers