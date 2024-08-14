function calculate(expression: string): number {
    const operators = ['+', '-', '*', '/'];
    const expressionArr: (number | string)[] = []; // 숫자와 연산자를 저장할 배열

    let currentNumber = '';

    for (const char of expression) {
        if (operators.includes(char)) { // 현재 문자가 연산자인 경우
            if (currentNumber !== '') { // 현재까지 모은 숫자를 배열에 추가
                expressionArr.push(Number(currentNumber));
                currentNumber = '';
            }
            expressionArr.push(char);
        } else { // 현재 문자가 숫자일 경우
            currentNumber += char;
        }
    }

    // 마지막 숫자를 배열에 추가
    if (currentNumber !== '') {
        expressionArr.push(Number(currentNumber));
    }

    return 0;
}

export default calculate