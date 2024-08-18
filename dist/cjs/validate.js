"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isValidExpression;
//유효성 체크 :  숫자 또는 -,+,/,* 로 구성되어있는지 확인, 숫자로 시작하고 숫자로 끝나야 한다
function isValidExpression(expression) {
    return /^-?\d+(?:[+\-*/]-?\d+)*$/.test(expression);
}
