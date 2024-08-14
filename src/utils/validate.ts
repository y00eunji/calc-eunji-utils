function isValidExpression(expression: string) : boolean{
    // 숫자 또는 -,+,/,* 로 구성되어있는지 확인
    return /^[0-9+\-*/]+$/.test(expression);
}

export default isValidExpression;
