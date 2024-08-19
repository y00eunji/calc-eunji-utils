"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluateExpression = evaluateExpression;
// 계산을 수행하는 로직을 포함합니다. 연산자에 따라 우선순위를 처리하고 최종 결과를 반환합니다.
const parser_js_1 = require("./parser.js");
const operator_js_1 = require("./operator.js");
function evaluateExpression(expressionArr) {
    const highPriorityOps = [];
    let i = 0;
    while (i < expressionArr.length) {
        const current = expressionArr[i];
        if (current === '*' || current === '/') {
            const prevNumber = highPriorityOps.pop();
            const nextNumber = expressionArr[++i];
            const result = (0, operator_js_1.calculateWithOperator)(prevNumber, nextNumber, current);
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
    console.log(stack);
    while (stack.length > 0) {
        const operator = stack.shift();
        const nextNumber = stack.shift();
        result = (0, operator_js_1.calculateWithOperator)(result, nextNumber, operator);
    }
    return result === -0 ? 0 : result;
}
exports.default = (expression) => {
    const operators = ['+', '-', '*', '/'];
    const expressionArr = (0, parser_js_1.parseExpression)(expression, operators);
    return evaluateExpression(expressionArr);
};
