// Padrão de formatação de contas/arredondamento do JS --> IEEE 754-2008

let num1 = 0.7; // number 
let num2 = 0.1;

// result = num1 + num2;
// console.log(result); --> retorno 0.7999999999999999, isso por conta do pradrão bizarro do IEEE

// Podemos arrumar isso da seguinte forma:

// 1ª forma
// result = ((num1 * 100) + (num2 * 100)) /100; //0.8

// 2ª forma
result = num1 + num2;
console.log(result = Number(result.toFixed(2)));//Melhor forma, e retorna o numero corretamente

// Alguns métodos do Js uteis
console.log(Number.isInteger(num1)); // Retorna um boolean se o numero é um inteiro ou não, no caso retorna falso pq o num1 é float

console.log(num1.toString() + num2); // Faz um cast para String e concatena com o outro número --> 0.70.1

console.log(num1.toString(2)); // Retorna o binario do número referenciado 

console.log(num1.toFixed(2)); // Ele arredonda e controla quantos números virão após a virgula

// SEMPRE TENTAR EVITAR REALIZAR CONTAS ENTRE STRINGS E INTEIROS