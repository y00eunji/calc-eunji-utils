// 계산기 진입점
import {isValidExpression} from "./validate.js";
import evaluator from "./evaluator.js";
import {errorMessage} from "./error/error";

export function Calculator(expression: string) {
    // 인자가 하나만 입력되는 경우에도 에러 메세지를 특정해서 작성하기
    if(!isValidExpression(expression)) errorMessage('Expression')


    const result = evaluator(expression)
    if (typeof result === 'bigint') {  // BigInt인 경우: 문자열로 변환하여 처리
        return result.toString();
    }

    return +result.toFixed(8);
}
