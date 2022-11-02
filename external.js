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

const screenDisplayNormal = document.querySelectorAll('.button');
const screen = document.querySelector('.screen');
screenDisplayNormal.forEach((button) => {
    button.addEventListener('click', function(e) {
        let screenContent = e.target.textContent;
        if (screen.textContent === '0') {
            screen.textContent = screenContent;
        }
        else {
            screen.textContent = screen.textContent + ' ' + screenContent;
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
        else {
            screen.textContent = screen.textContent + ' ' + screenContent;
        }
    })
})
