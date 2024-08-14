// 계산기 진입점
import isValidExpression from "./utils/validate";
import calculate from "./calculate";

export const Calculator = (expression: string): number => {
    // 1. 먼저 식이 유효한지 확인
    if(isValidExpression(expression)) throw new Error("올바른 식이 아님")

    return calculate(expression);
};