const ERROR_MESSAGE = Object.freeze({
    expression: "올바른 식이 아님",
    operator: "잘못된 연산자",
    divide: "0으로 나눌 수 없음"
});
export function errorMessage(key) {
    const message = ERROR_MESSAGE[key];
    throw new Error(message);
}
