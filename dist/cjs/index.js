"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = Calculator;
// 계산기 진입점
const validate_js_1 = __importDefault(require("./validate.js"));
const evaluator_js_1 = __importDefault(require("./evaluator.js"));
function Calculator(expression) {
    if (!(0, validate_js_1.default)(expression))
        throw new Error("올바른 식이 아님");
    return (0, evaluator_js_1.default)(expression);
}
