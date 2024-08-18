//유효성 체크 :  숫자 또는 -,+,/,* 로 구성되어있는지 확인, 숫자로 시작하고 숫자로 끝나야 한다
export default function isValidExpression(expression: string) : boolean{
    return /^-?\d+(?:[+\-*/]-?\d+)*$/.test(expression);
}

