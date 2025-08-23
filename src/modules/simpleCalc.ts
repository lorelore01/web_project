function calc(a: number, b: number, op: 'sum' | 'sub' | 'mul' | 'div' | 'mod') {
    switch(op) {
        case "sum":
            return a + b;
        case "sub":
            return a - b;
        case "mul":
            return a * b;
        case "div":
            return a / b;
        case "mod":
            return a % b;
        default:
            return -1;

    }
}

const res = calc(8, 2, "mul");
console.log(res);