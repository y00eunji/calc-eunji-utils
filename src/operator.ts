// 연산 수행을 위한 함수 모듈입니다.
export function calculateWithOperator(prev: number, next: number, operator: string): number {
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
            throw new Error(`잘못된 연산자: ${operator} ${prev} ${next}`);
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
    if (b === 0) {
        throw new Error("0으로 나눌 없습니다.");
    }
    return a / b;
}
