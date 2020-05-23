 /*Basic of objects */
/* This function has no return, just perform */
function salutation(name) {
    console.log(`Good morning ${name}`);
}

console.log('-First function-')
const greeting = salutation('Sandrolax');
console.log('Don`t have return: ' + greeting);

console.log('')
function salutation2(name) {
    return `Good morning ${name}`;
}

console.log('-Second function-')
const greeting2 = salutation2('Sandrolax');
console.log('The return: ' + greeting2);

console.log('')
console.log('Mathematical operations functions');
function sum (x , y) {
    let result = x + y;
    return result;
}

let operation = sum(2, 2);
console.log('Sum function: ' + operation);

let raiz = n => n ** 0.5;


let num1 = raiz(9);
console.log('Raiz function: ' + num1);