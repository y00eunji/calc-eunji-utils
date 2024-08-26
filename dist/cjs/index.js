"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = Calculator;
// 계산기 진입점
const validate_js_1 = require("./validate.js");
const evaluator_js_1 = __importDefault(require("./evaluator.js"));
const error_1 = require("./error/error");
function Calculator(expression) {
    // 인자가 하나만 입력되는 경우에도 에러 메세지를 특정해서 작성하기
    if (!(0, validate_js_1.isValidExpression)(expression))
        (0, error_1.errorMessage)('Expression');
    return parseInt((0, evaluator_js_1.default)(expression).toFixed(8));
}
