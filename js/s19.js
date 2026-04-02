const fruits = ['Apple', 'Banana', 'Orange']; 
console.log(typeof fruits) 
const person = { name: 'Catherine', age: 30 };

console.log(Array.isArray(fruits))
console.log(typeof person)
console.log(Array.isArray(person))
// console.log
console.log(fruits[0])

fruits[1] = 'Grapes';
console.log(fruits)     
fruits.push('Mango');
console.log(fruits)     
fruits.pop();
console.log(fruits)
fruits.unshift('Strawberry');
console.log(fruits)     
fruits.shift();
console.log(fruits) 