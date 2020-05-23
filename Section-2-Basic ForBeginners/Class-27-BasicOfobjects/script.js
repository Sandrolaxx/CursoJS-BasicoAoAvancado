/* Imagine que precisamos criar diversas pessoas */ 
const person1 = {
    firstName: 'Luiz',
    lastName: 'Miranda',
    idade: 25
};
console.log(person1);
const person2 = {
    firstName: 'Sandrolax',
    lastName: 'Remax',
    idade: 21
};
console.log(person2);
console.log('');

/* Poderiamos fazer isso de uma forma muito mais simples com o objeto pessoa e com um 'método' construtor para criar a pessoa */
function createPerson (firstName, lastName, age) {
    return {
        firstName :firstName,
        lastName :lastName,
        age : age
    };
};

//Criando as pessoas...
const person3 = createPerson('Gabriza' , 'Vieira', 21);
const person4 = createPerson('ziza' , 'Jooj', 24);
const person5 = createPerson('Jojo' , 'é NADA', 26);
const person6 = createPerson('Gabron' , 'TESTE', 25);

console.log(person3.firstName, person3.lastName);
console.log(person4.firstName, person4.lastName);
console.log(person5.firstName, person5.lastName);
console.log(person6.firstName, person6.lastName);

//Utilizando as funções criadas nos objetos
const person7 = {
    name : 'Sandrilex',
    age : '21',

    speak() {
        console.log(`${this.name} said create a LittleObject!`);
    },

    increasesAge() {
        this.age++;
        console.log(`I got older :c have ${this.age} years now`)
    }
};

console.log('');
person7.speak();
person7.increasesAge();
