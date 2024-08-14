function isValidExpression(expression: string) : boolean{
    // 숫자 또는 -,+,/,* 로 구성되어있는지 확인, 숫자로 시작하고 숫자로 끝나야 한다
    return /^[0-9][0-9+\-*/]*[0-9]$/.test(expression);
}

export default isValidExpression;
