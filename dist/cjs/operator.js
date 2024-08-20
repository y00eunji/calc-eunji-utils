"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateWithOperator = calculateWithOperator;
// 연산 수행을 위한 함수 모듈입니다.
const error_1 = require("./error");
function calculateWithOperator(prev, next, operator) {
    switch (operator) {
        case '+':
            return add(prev, next);
        case '-':
            return subtract(prev, next);
        case '*':
            return multiply(prev, next);
        case '/':
            return divide(prev, next);
        default:
            (0, error_1.errorMessage)('operator');
    }
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        (0, error_1.errorMessage)('divide');
    }
    return a / b;
}
