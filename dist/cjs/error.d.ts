declare const ERROR_MESSAGE: Readonly<{
    readonly expression: "올바른 식이 아님";
    readonly operator: "잘못된 연산자";
    readonly divide: "0으로 나눌 수 없음";
}>;
type ErrorMessageKeys = keyof typeof ERROR_MESSAGE;
export declare function errorMessage(key: ErrorMessageKeys): void;
export {};
