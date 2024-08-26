import {CustomError} from "./customError";

const ERROR_MESSAGE = Object.freeze({
    Expression: "올바른 식이 아님",
    Operator: "잘못된 연산자",
    Divide: "0으로 나눌 수 없음",
    OnlyNumber: "숫자만 입력됐습니다",
    EndWithOperator: "식이 연산자로 끝났습니다",
    ConsecutiveOperators: "연산자가 연속으로 있습니다"
}as const);

type ErrorMessageKeys = keyof typeof ERROR_MESSAGE;
type ErrorMessageValues = typeof ERROR_MESSAGE[ErrorMessageKeys];


export function errorMessage(key: ErrorMessageKeys): void {
    const message: ErrorMessageValues = ERROR_MESSAGE[key];

    throw new CustomError(message);
}