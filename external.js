function add(...args) {
    const sum = args.reduce((total, arg) => {
        return total + arg;
    }, 0)
    return sum;
}

function subtract(...args) {
    const difference = args.reduce((total, arg) => {
        return total - arg;
    })
    return difference;
}

function multiply(...args) {
    const product = args.reduce((total, arg) => {
        return total * arg;
    }, 1)
    return product;
}

function divide(...args) {
    const quotient = args.reduce((total, arg) => {
        if (arg === 0) {
            return "Error";
        }
        else {
            return total / arg;
        }
    })
    return quotient;
}

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    }
    else if (operator === "-") {
        return subtract(a, b);
    }
    else if (operator === "*") {
        return multiply(a, b);
    }
    else if (operator === "/") {
        return divide(a, b);
    }
}

const screenDisplayNormal = document.querySelectorAll('.button');
const screen = document.querySelector('.screen');
screenDisplayNormal.forEach((button) => {
    button.addEventListener('click', function(e) {
        let screenContent = e.target.textContent;
        if (screen.textContent === '0') {
            screen.textContent = screenContent;
        }
        else {
            screen.textContent = screen.textContent + screenContent;
        }
    })
})

const screenDisplayOperators = document.querySelectorAll('.grey-button');
screenDisplayOperators.forEach((button) => {
    button.addEventListener('click', function(e) {
        let screenContent = e.target.textContent;
        if (screen.textContent === '0') {
            screen.textContent = screenContent;
        }
        else if (screenContent === 'AC') {
            screen.textContent = '0';
        }
        else if (screenContent === '%') {
            numberContent = Number(screen.textContent) / 100;
            screen.textContent = numberContent.toString();
        }
        else {
            screen.textContent = screen.textContent + ' ' + screenContent + ' ';
        }
    })
})

const screenDisplaySolve = document.querySelector('.blue-button');
screenDisplaySolve.addEventListener('click', function(e) {
    let screenContent = e.target.textContent;
    if (screenContent === '=') {
        let splitContent = screen.textContent.split(" ");
        console.log(splitContent);
        let answer = operate(splitContent[1], Number(splitContent[0]), Number(splitContent[splitContent.length - 1]));
        screen.textContent = answer.toString();
    }
})