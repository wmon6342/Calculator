function add(x) {
    let result = x.reduce((a, b) => a + b);
    return result;
}

function subtract(x) {
    let result = x.reduce((a, b) => a - b);
    return result;
}

function multiply(x) {
    let result = x.reduce((a, b) => a * b);
    return result;
}

function divide(x) {
    let result = x.reduce(function(a, b) {
        if(a && b !== 0) {
            let c = a / b;
            let d = Math.round(c);
            return d;
        } else {
            return 'What are u doing u muppet';
        }
    });
    return result;
}

function strToNumber(z) {
    let result = z.map((item) => +(item))
    return result;
}

function operator(x) {
    x.push(screen.textContent);
            // need to split the string here into its component parts, and delete the + operator
            // doing this will allow the add() function to take in its necessary argument
            // .join concatenates all the array items into one item
    let l = x.join('');
            // find a more concise way of doing this part below
    if(l.includes('+')) {
                    //{do this}
                // .split splits the item into two strings inside the array
        let m = l.split('+');
                // function strToNumber converts the two strings back into numbers inside the array
        let n = strToNumber(m);
                // function add adds the two numbers in the array
        let o = add(n);
        screen.textContent = o;
    }else if(l.includes('-')) {
        let m = l.split('-');
        let n = strToNumber(m);
        let o = subtract(n);
        screen.textContent = o;        
    } else if(l.includes('*')) {
        let m = l.split('*');
        let n = strToNumber(m);
        let o = multiply(n);
        screen.textContent = o;        
    } else if(l.includes('/')) {
        let m = l.split('/');
        let n = strToNumber(m);
        let o = divide(n);
        screen.textContent = o;        
    } else {
        let w = strToNumber(x);
        screen.textContent = w;
    }
    x.splice(0);
}


const screen = document.querySelector('h2');
const display = document.querySelector('h3');

const buttons = document.querySelectorAll('button');

const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

const plus = document.querySelector('#add');
const minus = document.querySelector('#subtract');
const times = document.querySelector('#multiply');
const divisor = document.querySelector('#divide');

const backspace = document.querySelector('#backspace');
const clear = document.querySelector('#clear');


function findButton() {
    Array.from(buttons).filter(function(button) {
        screen.textContent = '';
        let displayValue = [];
        button.addEventListener('click', () => {
        if(button === zero) {
            screen.textContent += '0';
        }
        if(button === one) {
            screen.textContent += '1';
        }
        if(button === two) {
            screen.textContent += '2';
        }
        if(button === three) {
            screen.textContent += '3';
        }
        if(button === four) {
            screen.textContent += '4';
        }
        if(button === five) {
            screen.textContent += '5';
        }
        if(button === six) {
            screen.textContent += '6';
        }
        if(button === seven) {
            screen.textContent += '7';
        }
        if(button === eight) {
            screen.textContent += '8';
        }
        if(button === nine) {
            screen.textContent += '9';
        }
        if(button === clear) {
            screen.textContent = '';
        }
        if(button === plus) {
            operator(displayValue);
            screen.textContent += '+';
        }
        if(button === minus) {
            operator(displayValue);
            screen.textContent += '-';
        }
        if(button === times) {
            operator(displayValue);
            screen.textContent += '*';
        }
        if(button === divisor) {
            operator(displayValue);
            screen.textContent += '/';
        }
        if(button === equals) {
            operator(displayValue);
        }
    });
    });
}

findButton();


    