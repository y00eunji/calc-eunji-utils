// 계산기 진입점
import { isValidExpression } from "./validate.js";
import evaluator from "./evaluator.js";
import { errorMessage } from "./error/error";
export function Calculator(expression) {
    // 인자가 하나만 입력되는 경우에도 에러 메세지를 특정해서 작성하기
    if (!isValidExpression(expression))
        errorMessage('Expression');
    const result = evaluator(expression);
    if (result.toString().includes('e')) {
        return errorMessage("InfinityNumber");
    }
    else {
        return +result.toFixed(8);
    }
}
