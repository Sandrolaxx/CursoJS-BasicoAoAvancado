/* Logical Operators */

// && -> AND -> E -> Todas as expressões precisam ser verdadeira para retornar true
// || -> OR  -> OU
//  ! -> NOT -> NÃO

//Exemplo de &&-AND
console.log(true && true && true && true) //Retorna true, se uma delas for false, tudo fica false

//Exemplo de ||-OR
console.log(false || false || false || true) //Retorna true, se algum dos elementos for verdadeira, retorna falso se todos forem falsos

//Exemplo de &&
const usuario = 'Sandrolax';
const senha = '12345';
                  //True                    //True ---> Se uma fosse false ele não ia logar
const vaiLogar =  usuario === 'Sandrolax' && senha === '12345';

console.log('Usuario cadastrado: ' + vaiLogar);

//Exemplo
console.log('É engraçado por que é verdade: ' + !false);