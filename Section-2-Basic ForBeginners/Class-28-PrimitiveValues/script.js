/* 
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint), symbol) - Valores copiados
*/
console.log('Com valores primitivos eles trabalham com copias, e assim após a primeira iteração eles são independentes')
let a = 'A';
let b = a; // Cópia
console.log(a, b);
//Após a primeira iteração a variavel b se torna independente 
a = 'Another Thing';
console.log(a,b);

console.log('');
/* Referencia (mutável) - array, object, function - Passados por referência */
console.log('Com referência ambos mudam simultaneamente')
var a1 = [1,2,3]//Não é cópia!!
var b2 = a1;
var c3 = b2;//Ambos estão apontando para o mesmo lugar na memória

//CASO EU REALMENTE QUISESSE COLOCAR O VALOR DE A EM B, EU FARIA DO SEGUINTE MODO let b2 = [...a1];

console.log(a1,b2);

a1.push(4);
console.log(a1, b2 + ' I put 4 in the array a');

b2.pop();
console.log(a1, b2 + ' I remove 4 in the array b');

a1.push('Sandrilex');
console.log(c3)

//Esse tipo de valor não primitivo se conportara sempre refernciando os valores ex:objetos
const testA = {
    name : 'Juju',
    age : '69'
};

const testB = testA;
console.log('');
testA.name = 'Robinho';
console.log(testB);//Se comportaram sempre referenciando...