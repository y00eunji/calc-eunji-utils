// 표현식을 파싱하는 함수입니다.
export function parseExpression(expression, operators) {
    return expression.match(/-?\d+|[+\-*/]/g).map(item => {
        if (operators.includes(item)) {
            return item;
        }
        else {
            const num = Number(item);
            return num === -0 ? 0 : num;
        }
    });
}
