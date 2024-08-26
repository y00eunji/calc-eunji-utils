declare const ERROR_MESSAGE: Readonly<{
    readonly Expression: "올바른 식이 아님";
    readonly Operator: "잘못된 연산자";
    readonly Divide: "0으로 나눌 수 없음";
    readonly OnlyNumber: "숫자만 입력됐습니다";
    readonly EndWithOperator: "식이 연산자로 끝났습니다";
    readonly ConsecutiveOperators: "연산자가 연속으로 있습니다";
    readonly InfinityNumber: "무한대입니다(연산불가)";
}>;
type ErrorMessageKeys = keyof typeof ERROR_MESSAGE;
export declare function errorMessage(key: ErrorMessageKeys): void;
export {};
