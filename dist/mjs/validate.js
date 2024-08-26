//유효성 체크 :  숫자 또는 -,+,/,* 로 구성되어있는지 확인, 숫자로 시작하고 숫자로 끝나야 한다
// 숫자만 있는 경우(음수 포함)
import { errorMessage } from "./error/error";
function isOnlyNumber(expression) {
    return /^-?\d+$/.test(expression);
}
// 연산자가 마지막에 오는 경우
function endsWithOperator(expression) {
    return /[+\-*/]$/.test(expression);
}
// 괄호의 짝이 맞지 않는 경우
function hasUnmatchedParentheses(expression) {
    let openBrackets = 0;
    for (const char of expression) {
        if (char === '(')
            openBrackets++;
        if (char === ')')
            openBrackets--;
        if (openBrackets < 0)
            return true; // 닫는 괄호가 더 많으면 실패
    }
    return openBrackets !== 0; // 여는 괄호가 남아 있으면 실패
}
// 연산자가 두 개 연속으로 오는 경우
function hasConsecutiveOperators(expression) {
    return /[+\*/]{2,}|([+\*/]-[^\d])/g.test(expression);
}
export function isValidExpression(expression) {
    if (isOnlyNumber(expression))
        errorMessage("OnlyNumber");
    if (endsWithOperator(expression))
        errorMessage("EndWithOperator");
    // if (hasUnmatchedParentheses(expression)) return false;
    if (hasConsecutiveOperators(expression))
        errorMessage("ConsecutiveOperators");
    return /^-?\d+(?:[+\-*/]-?\d+)*$/.test(expression);
}
