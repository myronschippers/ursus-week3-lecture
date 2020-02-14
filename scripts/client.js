console.log('Hello Ursus');

// always start with `const` and then upgrade to `let` as needed
const kittyKat = null; // should stay a `const` because the value isn't reset
let doggy = null; // because the value is being reset this should be `let`

doggy = 'woof';

// = - setting value
// == - comparisons, comparing only value 5 == 5, 5 == '5'
// === - comparisons, comparing both value and type 5 == 5 true, 5 == '5' false

// console.log(doggy = 'meow');
// console.log(doggy);
if (doggy == 'woof') {
  console.log('Dog speaks');
}

const myArray = [1, 2, 3, 4];
console.log(myArray);
// retrieving a single item from an array
console.log('first item: ', myArray[0]);
console.log('third item: ', myArray[2]);

// myArray.length - gives you the total number of items in the array
console.log('Start for i loop ::');
for (let i = 0; i < myArray.length; i++) {
  const arrayItem = myArray[i];
  console.log('item:', arrayItem);
  console.log('index:', i);
}

// for in loop - gives you the index of an item in an array
console.log('Start for in loop ::');
for (let index in myArray){
  const arrayInItem = myArray[index];
  //code here
  console.log(arrayInItem);
}

// for of loop - gives you the actual item in the array without the index
console.log('Start for of loop ::');
for (let item of myArray) {
  // code here
  console.log(item);
}

let n = 0;
console.log('Start while loop ::');
while (n < 8) {
  n++;
  console.log('while item', myArray[n]);
  console.log(n);
}

// console.log(n);
