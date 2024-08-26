// 연산 수행을 위한 함수 모듈입니다.
import {errorMessage} from "./error/error";

export function calculateWithOperator(prev: number, next: number, operator: string) {
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
            errorMessage('Operator')
    }
}

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    if (b === 0) errorMessage('Divide')

    return a / b;
}
