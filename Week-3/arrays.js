const fruits = ['Apples', 'Bananas', 'Kiwis', 'Watermelon'];

// Array
// Loop 1
// fruits.forEach((val) => { console.log('Today I am having', val) });

// Loop 2
for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    console.log(element, 'is index', index);
}

// Loop 3
for (const iterator of fruits) {
    console.log(iterator, 'is index', fruits.indexOf(iterator))
}

// Objects
// Loop 4
const person = { 'firstName': 'John', 'lastName': 'Doe', 'age': 35, 'county': 'Nyeri' };
// for (const key in person) {
//     console.log(key, 'is', person[key]);
// }