function add(x) {
    let result = x.reduce((a, b) => a + b);
    return result.toFixed(2);
}

function subtract(x) {
    let result = x.reduce((a, b) => a - b);
    return result.toFixed(2);
}

function multiply(x) {
    let result = x.reduce((a, b) => a * b);
    return result.toFixed(2);
}

function divide(x) {
    let result = x.reduce(function(a, b) {
        if(a && b !== 0) {
            let c = a / b;
            let d = c.toFixed(2);
            return d;
        } else {
            //we need to make sure that this value cannot be used in a future calculation
            return 'really';
        }
    });
    return result;
}

function strToNumber(z) {
    let result = z.map((item) => +(item));
    return result;
}

function deleteLast(z) {
    let y = z.slice(0, -1);
    return y;
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
const decimal = document.querySelector('#decimal_point');

const plus = document.querySelector('#add');
const minus = document.querySelector('#subtract');
const times = document.querySelector('#multiply');
const divisor = document.querySelector('#divide');

const backspace = document.querySelector('#backspace');
const clear = document.querySelector('#clear');

let buttonClick = 0;

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
        if(button === decimal) {
            //insert an if statement checking whether a number has already got a decimal point in it
            buttonClick ++;
            if(buttonClick > 1){
                screen.textContent += '';
            } else {
                screen.textContent += '.';
            }
        }
        if(button === clear) {
            buttonClick = 0;
            screen.textContent = '';
        }
        if(button === backspace) {
            screen.textContent = deleteLast(screen.textContent);
        }
        if(button === plus) {
            operator(displayValue);
            buttonClick = 0;
            screen.textContent += '+';
        }
        if(button === minus) {
            operator(displayValue);
            buttonClick = 0;
            screen.textContent += '-';
        }
        if(button === times) {
            operator(displayValue);
            buttonClick = 0;
            screen.textContent += '*';
        }
        if(button === divisor) {
            operator(displayValue);
            buttonClick = 0;
            screen.textContent += '/';
        }
        if(button === equals) {
            buttonClick = 0;
            operator(displayValue);
        }
    });
    });
}

findButton();

function keyboardSupport() {
    screen.textContent = '';
    let displayValue = [];
    document.addEventListener('keydown', function(event) {
        if(event.key === '1') {
            screen.textContent += '1';
        }
        if(event.key === '2') {
            screen.textContent += '2';
        }
        if(event.key === '3') {
            screen.textContent += '3';
        }
        if(event.key === '4') {
            screen.textContent += '4';
        }
        if(event.key === '5') {
            screen.textContent += '5';
        }
        if(event.key === '6') {
            screen.textContent += '6';
        }
        if(event.key === '7') {
            screen.textContent += '7';
        }
        if(event.key === '8') {
            screen.textContent += '8';
        }
        if(event.key === '9') {
            screen.textContent += '9';
        }
        if(event.key === '0') {
            screen.textContent += '0';
        }
        if(event.key === '+') {
            operator(displayValue);
            buttonClick = 0;
            screen.textContent += '+';
        }
        if(event.key === '-') {
            operator(displayValue);
            buttonClick = 0;
            screen.textContent += '-';
        }
        if(event.key === '*') {
            operator(displayValue);
            buttonClick = 0;
            screen.textContent += '*';
        }
        if(event.key === '/') {
            operator(displayValue);
            buttonClick = 0;
            event.preventDefault();
            screen.textContent += '/';
        }
        if(event.key === '.') {
            buttonClick++;
            screen.textContent += '.';
        }
        if(event.key === 'Backspace') {
            event.preventDefault();
            screen.textContent = deleteLast(screen.textContent);
        }
        if(event.key === 'Enter') {
            buttonClick = 0;
            event.preventDefault();
            operator(displayValue);
        }
        if(event.key === 'Delete') {
            buttonClick = 0;
            event.preventDefault();
            screen.textContent = '';
        }
    })
}

keyboardSupport();


    