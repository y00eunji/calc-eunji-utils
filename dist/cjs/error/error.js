"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMessage = errorMessage;
const customError_1 = require("./customError");
const ERROR_MESSAGE = Object.freeze({
    Expression: "올바른 식이 아님",
    Operator: "잘못된 연산자",
    Divide: "0으로 나눌 수 없음",
    OnlyNumber: "숫자만 입력됐습니다",
    EndWithOperator: "식이 연산자로 끝났습니다",
    ConsecutiveOperators: "연산자가 연속으로 있습니다"
});
function errorMessage(key) {
    const message = ERROR_MESSAGE[key];
    throw new customError_1.CustomError(message);
}
