// 표현식을 파싱하는 함수입니다.
export function parseExpression(expression, operators) {
    return expression.match(/-?\d+|[+\-*/]/g).map(item => operators.includes(item) ? item : Number(item));
}
