// filter: creates a new array with all elements that pass the test implemented by the function

let words = ["cara", "michael", "billiejean", "bird"];

const result = words.filter(word => word.length < 5);

console.log(result);

// reduce: method that applies a function against an accumulator and each element in the array (left to right) to reduce it to a single value.

const array1 = [10, 1, 4, 5];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer));
console.log(array1.reduce(reducer, 5));

// map: creates a new array with the results of calling a provided function on every element in the calling array

let array2 = [1, 2, 3, 4];

const map1 = array2.map(x => x * 2);

console.log(map1);