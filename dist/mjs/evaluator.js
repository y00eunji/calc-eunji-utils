// 계산을 수행하는 로직을 포함합니다. 연산자에 따라 우선순위를 처리하고 최종 결과를 반환합니다.
import { parseExpression } from './parser.js';
import { calculateWithOperator } from './operator.js';
export function evaluateExpression(expressionArr) {
    const highPriorityOps = [];
    let i = 0;
    while (i < expressionArr.length) {
        const current = expressionArr[i];
        if (current === '*' || current === '/') {
            const prevNumber = highPriorityOps.pop();
            const nextNumber = expressionArr[++i];
            const result = calculateWithOperator(prevNumber, nextNumber, current);
            highPriorityOps.push(result);
        }
        else {
            highPriorityOps.push(current);
        }
        i++;
    }
    return computeFinalResult(highPriorityOps);
}
function computeFinalResult(stack) {
    let result = stack.shift();
    while (stack.length > 0) {
        const operator = stack.shift();
        const nextNumber = stack.shift();
        result = calculateWithOperator(result, nextNumber, operator);
    }
    return result === -0 ? 0 : result;
}
export default (expression) => {
    const expressionArr = parseExpression(expression, ['+', '-', '*', '/']);
    return evaluateExpression(expressionArr);
};
