function add(...args) {
    const sum = args.reduce((total, arg) => {
        return total + arg;
    }, 0)
    console.log(sum);
}

function subtract(...args) {
    const difference = args.reduce((total, arg) => {
        return total - arg;
    })
    console.log(difference);
}

function multiply(...args) {
    const product = args.reduce((total, arg) => {
        return total * arg;
    }, 1)
    console.log(product);
}

function divide(...args) {
    const quotient = args.reduce((total, arg) => {
        return total / arg;
    })
    console.log(quotient);
}

function operate(operator, a, b) {
    if (operator === "+") {
        add(a, b);
    }
    else if (operator === "-") {
        subtract(a, b);
    }
    else if (operator === "*") {
        multiply(a, b);
    }
    else if (operator === "/") {
        divide(a, b);
    }
}