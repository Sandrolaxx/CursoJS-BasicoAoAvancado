/* Basic of arrays */
const names = 'Luiz otavio'//String is a character array

//Student Array
console.log('The array:')
//Position          0        1        2
const students = ['Luiz', 'Marie', 'jonh'];
console.log(students);

console.log('');
console.log('array in position 2:')
console.log(students[2]);
console.log('');

console.log('We can replace the value in the positions:');
students[2] = 'Sadrolax';
console.log(students);

console.log('');
console.log("We can put value in the last position using the function of arrays 'push':");
students.push('Gabriza');//We can also do it this way students[alunos.length] = 'Gabriza'
console.log(students);

console.log('');
console.log("To add at the beginning of the array we use function 'unshift':");
students.unshift('GabrizaOfbeginning');//We can also do it this way students[alunos.length] = 'Gabriza'
console.log(students);

console.log('');
console.log("To remove from the end we use the function 'pop'")
students.pop();
console.log(students);

console.log('');
console.log("To remove from the beginning we use the function 'shift'")
students.shift();
console.log(students);
