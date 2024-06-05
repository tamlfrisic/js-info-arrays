// Task 1: Camelize -- completed

// Write the function camelize(str) that changes dash-separated 
// words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes 
// uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform 
// it and join back.

// function camelize(str) {
//     let arr = str.split("-");
//     return arr.map((item, index) => index == 0 ? item : 
//         item[0].toUpperCase() + item.slice(1)).join("");
    
// }

// console.log(camelize("these-are-the-days"));

// ----------------------------------------------------------

// Task 2: Filter Range -- completed

// Write a function filterRange(arr, a, b) that gets an array arr, 
// looks for elements with values higher or equal to a and lower or 
// equal to b and return a result as an array.

// The function should not modify the array. It should return the 
// new array.

// For instance:

// let filtArr = [5, 3, 8, 1];

// let filtered = filterRange(filtArr, 1, 4);

// function filterRange(arr, a, b) {
//     return filtArr.filter(item => item >= a && item <= b);
// }

// alert( filtered ); // 3,1 (matching values)
// alert( filtArr ); // 5,3,8,1 (not modified)

// ----------------------------------------------------------

// Task 3: Filter range "in place" -- completed

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and 
// removes from it all values except those that are between a and b. The test 
// is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b) {
//      for (let i=0; i < arr.length; i++) {
//        let value = arr[i];
//        if (!(a <= value && value <= b)) {
//         arr.splice(i, 1);
//         i--;
//        }
//      }
// }

// solution 2: 
// function filterRangeInPlace(arr, a, b) {
    
//     arr.forEach((value, index, arr) =>  {
//         if (!(a <= value && value <= b)) {
//                    arr.splice(index, 1);
//                     index--;
//         }
//     });
// }

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]

// ----------------------------------------------------------

// Task 4: Sort in decreasing order -- completed

//  let arr = [5, 2, 1, -10, 8];

//  arr.sort((a, b) => b - a);

//  alert( arr ); // 8, 5, 2, 1, -10

// ----------------------------------------------------------

// Task 5: Copy and sort array -- completed

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr) {
//     return arr.slice().sort();
// }

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

// ----------------------------------------------------------

// Task 6: Map to names -- completed

// You have an array of user objects, each one has user.name. 
// Write the code that converts it into an array of names.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(user => user.name);

// alert( names ); // John, Pete, Mary

// ----------------------------------------------------------

// Task 7: Map to Objects -- completed 

// You have an array of user objects, each one has name, surname 
// and id.

// Write the code to create another array from it, of objects with 
// id and fullName, where fullName is generated from name and 
// surname.

// For instance:

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`, 
//     id: user.id,
//     }));

// // /*
// // usersMapped = [
// //   { fullName: "John Smith", id: 1 },
// //   { fullName: "Pete Hunt", id: 2 },
// //   { fullName: "Mary Key", id: 3 }
// // ]
// // */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith
// So, actually you need to map one array of objects to another. 
// Try using => here. There’s a small catch.

// ----------------------------------------------------------

// Task 8: Sort users by age -- completed

// Write the function sortByAge(users) that gets an array of objects
//  with the age property and sorts them by age.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// function sortByAge(users) {
//     users.sort((a, b) => a.age - b.age);
// }

// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

// ----------------------------------------------------------

// Task 9: 

// Write the function shuffle(array) that shuffles (randomly 
// reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of 
// elements. For instance:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// All element orders should have an equal probability. 
// For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] 
// or [3,1,2] etc, with equal probability of each case.

// ----------------------------------------------------------

// Task 10: Get average age -- completed

// Write the function getAverageAge(users) that gets an array of 
// objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// function getAverageAge(users) {
//     // must set initial val to 0, otherwise it returns the 1st elem which is an object {john}
//     return users.reduce((total, user) => total + user.age, 0) / users.length;
// }

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// // ----------------------------------------------------------

// Task 11: Filter unique array members

// Let arr be an array.

// Create a function unique(arr) that should return an array with 
// unique items of arr.

// For instance:

// function unique(arr) {
//     let result = [];
//     for (let item of arr) {
//         if (!result.includes(item)) {
//             result.push(item);
//         }
//     }
//     return result;
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) ); // Hare, Krishna, :-O

// // ----------------------------------------------------------

// Task 12: Create keyed object from array -- completed

// Let’s say we received an array of users in the form 
//{id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from 
// it, with id as the key, and array items as values.

// For example:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

function groupById(arr) {
    return arr.reduce((acc, curr) => {
        acc[curr.id] = curr;
        return acc;
    }, {})
}
console.log(usersById);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
// Such function is really handy when working with server data.

// In this task we assume that id is unique. There may be no 
// two array items with the same id.

// Please use array .reduce method in the solution.

// ---------------------------------------------------------

// TOP Task: Sum of tripled evens

// function sumOfTripledEvens(array) {
//     array = array.filter(item => item % 2 === 0);
//     array = array.map(item => item *= 3);
//     array = array.reduce((total, current) => total + current);
//     return array;
    
// }

// console.log(sumOfTripledEvens([1, 2, ,3 ,4 ,5, 6, 7, 8]));