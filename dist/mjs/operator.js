// 연산 수행을 위한 함수 모듈입니다.
import { errorMessage } from "./error";
export function calculateWithOperator(prev, next, operator) {
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
            errorMessage('operator');
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
        errorMessage('divide');
    }
    return a / b;
}
