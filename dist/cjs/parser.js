"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseExpression = parseExpression;
// 표현식을 파싱하는 함수입니다.
function parseExpression(expression, operators) {
    return expression.match(/(\d+|\D)/g).map(item => operators.includes(item) ? item : Number(item));
}
