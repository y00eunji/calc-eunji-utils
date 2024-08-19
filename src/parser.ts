// 표현식을 파싱하는 함수입니다.
export function parseExpression(expression: string, operators: string[]): (number | string)[] {
    const parsed: (number | string)[] = [];
    const tokens = expression.match(/(\d+(\.\d+)?|\D)/g);

    if (!tokens) return parsed;

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        // 음수인지 확인
        if (token === '-' && (i === 0 || operators.includes(tokens[i - 1]))) {
            parsed.push(-Number(tokens[++i]));
        } else if (operators.includes(token)) {
            parsed.push(token);
        } else {
            parsed.push(Number(token));
        }
    }

    return parsed;
}
