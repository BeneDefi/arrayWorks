// Create an array of ages:

// Use .forEach() to print all ages with a message like "Age: x".
// Create a new array with each age doubled using .map().

let ages = [22, 3, 34, 32, 34, 89];

// ages.forEach((age) => console.log(`Age: ${age}`));

// ages.map((age) => console.log(age * 2))

// Create an array of numbers:

// Use .filter() to create a new array with only even numbers.
// Use .find() to locate the first number greater than 10.

let numbers = [2, 3, 1, 10, 11, 34, 5, 76, 8, 90, 3, 72];

let num = numbers.filter((num) => num % 2 == 0)

// console.log(num)

let number = numbers.find((num) => num > 10);

// console.log(number)

// Use .reduce() to concatenate all the strings in the array into a single string.

let words = ["go", "find", "money", "and", "get", "money"]

let word = words.reduce((a, b) => a + " " +b);
// console.log(word)

// Create an array of numbers:

// Sort the numbers in ascending and descending order using .sort().
// Reverse the array and check how the order changes.

let ascendingNum = numbers.sort((a, b) => a - b)
let descendingNum = numbers.sort((a, b) => b - a)
// console.log(ascendingNum)
// console.log(descendingNum)

// function sortNumbers(b,a){
//     if (a > b){
//         return 1
//     } else if (a < b){
//         return -1
//     } else{
//         return 0
//     }
// }

// console.log(numbers.sort(sortNumbers))

// Create an array of words:

// Sort the array alphabetically using .sort().
// Use .reverse() to reverse the sorted array.

// console.log(words.sort())
// console.log(words.reverse())

// Create an array with 5 numbers:

// Use .slice() to create a sub-array from the second to the fourth number.
// Use .splice() to remove the third number and add two new numbers in its place.

let fiveNumbers = [2, 34, 5,32, 1];

console.log(fiveNumbers.slice(1,4));

fiveNumbers.splice(2,1, 4,7);

console.log(fiveNumbers);


// Create an array of names:

// Use .splice() to remove a name at a specific index and add another name in its place.
// Slice out the first three names and store them in a new array.

let names = ["John", "Leo", "Sandra", " Stela", "Peculiar"];

names.splice( 3,1, "Love");

// console.log(names);

console.log(names.slice(0,3))