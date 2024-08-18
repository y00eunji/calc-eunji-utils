// 계산기 진입점
import isValidExpression from "./validate";
import evaluator from "./evaluator";

export function Calculator(expression: string): number {
    if(isValidExpression(expression)) throw new Error("올바른 식이 아님")

    return evaluator(expression);
}
