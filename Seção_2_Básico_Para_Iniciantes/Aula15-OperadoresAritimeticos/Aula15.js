/**
 * Operadores aritimeticos
 */

// Potenciação --> **
let p1 = 2;
let p2 = 10;
console.log(p1 ** p2);//1024

//Resto da divisão --> %
let r1 = 10;
let r2 = 5;
console.log(r1 % r2);

//Incrementar --> ++  
//Decrementar --> --

//Atribuir o valor da variavel mais outro valor --> variavel += 2; --> é o mesmo que variavel = variavel + 2;--> isso pode ser feito com qualquer operador, não só +

//Se tentar realizar operação entre letras e numeros ele retorna NaN, agora uma string com um numero, pode-se realizar um cast para pegar o valor!!

//Operação entre tipos de dados diferentes..
let n1 = 10;
let n2 = '5';
console.log(n1 + n2);//o retorno desta operação seria 105, pois ele iria concatenar...

//Neste caso deveriamos fazer o cast para tipo numerico, podemos fazer isso de 3 formas:
//Primeira parseInt
let num1 = 10;
let num2 = parseInt('5');
console.log(num1 + num2);
console.log(typeof num2);
//Segunda parseFloat
let num3 = 10;
let num4 = parseFloat('5.4');
console.log(num3 + num4);
console.log(typeof num4);
//Terceira....Taca um Number
let num5 = 10;
let num6 = Number('6');
console.log(num5 + num6);
console.log(typeof num6);