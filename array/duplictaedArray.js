const fruits = [
  "apple",
  "apple",
  "banana",
  "orange",
  "banana",
  "mango",
  "grape",
  "grape",
  "pineapple",
];

//  Option 1: Using Set directly (no array conversion)
const removeDuplicatedArray = new Set(fruits);
// console.log(removeDuplicatedArray); // Set { 'apple', 'banana', 'orange', 'mango', 'grape', 'pineapple' }

//  Option 2: Using spread syntax to convert Set to Array
const unique1 = [...new Set(fruits)];
// console.log(unique1); // [ 'apple', 'banana', 'orange', 'mango', 'grape', 'pineapple' ]

//  Option 3: Using Array.from with Set
const unique2 = Array.from(new Set(fruits));
// console.log(unique2); // [ 'apple', 'banana', 'orange', 'mango', 'grape', 'pineapple' ]

//   Option 4: Using filter and indexOf
const filteredArray = fruits.filter(
  (value, index) => fruits.indexOf(value) === index
);
// console.log(filteredArray); // [ 'apple', 'banana', 'orange', 'mango', 'grape', 'pineapple' ]

//  Option 5: Using forEach and includes inside a custom function
function uniqueFunction(array) {
  const uniqueItem = [];

  array.forEach((element) => {
    if (!uniqueItem.includes(element)) {
      uniqueItem.push(element);
    }
  });

  return uniqueItem;
}

const unique3 = uniqueFunction(fruits);
// console.log(unique3); // [ 'apple', 'banana', 'orange', 'mango', 'grape', 'pineapple' ]

// ✅ Option 6: Using reduce and includes
function removeDuplicatedArrayWithReduce(array) {
  return array.reduce((prev, current) => {
    if (!prev.includes(current)) {
      prev.push(current);
    }
    return prev;
  }, []);
}

const unique4 = removeDuplicatedArrayWithReduce(fruits);

// console.log(unique4); // [ 'apple', 'banana', 'orange', 'mango', 'grape', 'pineapple' ]
