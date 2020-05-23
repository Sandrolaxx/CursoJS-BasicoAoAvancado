    /* Comparison Operators */
/*
        > maior que
    >= maior que ou igual a
        < menor que
    <= menor que ou igual a
    == igualdade(somente valor)--Não muito utilizado e recomendado
    === igualdade(valor e tipo)--Preferencialmente utilizar este
        != diferente(valor)--Não muito utilizado e recomendado
    !==diferente(valor e tipo) Preferencialmente utilizar este
*/


const num1 = 10; //number
const num2 = '10'; //string
const comp = num1 == num2;
console.log(comp);//Retorna true mesmo nos sabendo que não são a mesma coisa, o js já converte um tipo para outro e compara.

// Como resolver isso...
const num3 = 10; //number
const num4 = '10';//string
const comp2 = num3 === num4;
console.log(comp2);//Retorna falso, por que ele compara os tipos também

// O mesmo ocorre com o diferente
const num3 = 10; //number
const num4 = '10';//string
const comp3 = num3 != num4;//num3 é diferente de num4, retorna false, eles não são diferentes, mas sabemos que é!
console.log(comp3);//Não checa o tipo, retorna false

//Forma para compara tipo também
const num3 = 10; //number
const num4 = '10';//string
const comp4 = num3 !== num4;
console.log(comp4);//Retorna verdadeiro, sim num3 é diferente de num4