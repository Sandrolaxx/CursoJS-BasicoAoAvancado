        /* FALSY VALUES */

//*false-literal
//0
//'' "" `` -->Aspas simples, duplas e crazi
//null / undefined
//NaN --> Not a Number

/* TIRANDO ESSES VALORES ACIMA, TUDO EM JS RETORNA TRUE */

/* O PRIMEIRO VALOR FALSO QUE O END ENCONTRAR ELE RETORNA */
console.log('Sandrolax' && 0 && 'Jojo');//Retorna o valor 0

/* O PRIMEIRO VALOR VERDADEIRO QUE O OU ENCONTRAR ELE RETORNA */
const corUsuario = null;//Se isso fosse uma cor ela seria a primeira a ser retornada, pois seria a primeira verdadeira
const corPradrao = corUsuario || 'pink';
console.log('primeiro valor verdadeiro encontrado: ' + corPradrao);

