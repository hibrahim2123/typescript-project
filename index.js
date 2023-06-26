"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firtsStr = (0, readline_sync_1.question)("enter first number");
    var operator = (0, readline_sync_1.question)("enter operator ");
    var secondStr = (0, readline_sync_1.question)("enter second number");
    var validInput = isNumber(firtsStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput) {
        var firstNum = parseInt(firtsStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
function isOperator(operator) {
    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
}
var calculate = function (firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
        default:
            return "Geçerli bir opeartor giriniz lütfen";
    }
};
main();
