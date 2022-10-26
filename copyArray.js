// => deep copy

// Spread operatior
let arr = [1,2,3,4];
let arr2 = [...arr];

arr2.push("abc");

console.log(arr);
console.log(arr2);

// slice
let arr3 = arr.slice();

arr3.push("xyz");

console.log(arr);
console.log(arr3);

// concat
let arr4 = [].concat(arr);

arr4.push("def");

console.log(arr);
console.log(arr4);

// deep copy for multidimension array

let arr7 = [{name: 'abc'}, {name:'xyz'}];
let arr8 = [...arr7];

arr8[0].name = 'def';

console.log(arr7);
console.log(arr8);

let arr9 = [{name: 'abc'}, {name:'xyz'}];
let arr10 = JSON.parse(JSON.stringify(arr9));

arr10[0].name = 'def';

console.log(arr9);
console.log(arr10);

// => shallow copy

let arr5 = [9,10,11,12];
let arr6 = arr5;

arr6.push(16);

console.log(arr5);
console.log(arr6);