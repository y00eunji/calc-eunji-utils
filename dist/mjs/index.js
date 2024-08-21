// 계산기 진입점
import isValidExpression from "./validate.js";
import evaluator from "./evaluator.js";
import { errorMessage } from "./error";
export function Calculator(expression) {
    if (!isValidExpression(expression))
        errorMessage('expression');
    return +evaluator(expression).toFixed(8);
}
