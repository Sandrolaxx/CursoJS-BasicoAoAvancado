  /* REGRINHAS BÁSICAS */
//IF PODE SER USADO SOZINHO
//SEMPRE QUE UTILIZARMOS A PALAVRA ELSE, ANSTES PRECISO DE UM IF
//EU POSSO TER VÁRIOS ELSE IF EM UM BLOCO
//SÓ POSSO TER UM ELSE AO FINAL DO BLOCO

/* SISTEMINHA DO BOM DIA */

//ENTRE 0 - 11 - BOM DIA
//ENTRE 12 - 17 - BOA TARDE
//ENTRE 18 - 23 - BOA NOITE
let hora = 10;

if (hora >= 0 && hora <= 11) {
    console.log('Good Morning');
} else if (hora >= 12 && hora <= 17) {
    console.log('Good afternoon');
} else if (hora >= 18 && hora <= 23) {
    console.log('Good night');
} else {
    console.log('Eita prr');
}

// Outro exemplo
let tenhoGrana = true;

if (tenhoGrana) {
    console.log('Torra money na steam');
}