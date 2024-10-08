// 계산을 수행하는 로직을 포함합니다. 연산자에 따라 우선순위를 처리하고 최종 결과를 반환합니다.
import { parseExpression } from './parser.js';
import { calculateWithOperator } from './operator.js';

export function evaluateExpression(expressionArr: (number | string)[]): number {
    const highPriorityOps: (number | string)[] = [];
    let i = 0;

    while (i < expressionArr.length) {
        const current = expressionArr[i];

     if (current === '*' || current === '/') {
            const prevNumber = highPriorityOps.pop() as number;
            const nextNumber = expressionArr[++i] as number;
            const result = calculateWithOperator(prevNumber, nextNumber, current);
            highPriorityOps.push(result as number);
     }else{
         highPriorityOps.push(current);
     }
        i++;
    }

    return computeFinalResult(highPriorityOps);
}

function computeFinalResult(stack: (number | string)[]): number {
    let result = stack.shift() as number;

    while (stack.length > 0) {
        const operator = stack.shift() as string;
        const nextNumber = stack.shift() as number;

        result = calculateWithOperator(result, nextNumber, operator) as number;
    }

    return result === -0 ? 0 : result;
}

export default (expression: string): number => {
    const expressionArr = parseExpression(expression, ['+', '-', '*', '/']);
    return evaluateExpression(expressionArr);
};

