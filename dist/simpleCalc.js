"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calc(a, b, op) {
    switch (op) {
        case "sum":
            return a + b;
        case "sub":
            return a - b;
        case "mul":
            return a * b;
        case "div":
            return a / b;
        case "mod":
    }
}
const res = calc(8, 2, "mul");
console.log(res);
//# sourceMappingURL=simpleCalc.js.map