"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// task 1
// alert( null || 2 || undefined );
console.log(null || 2 || undefined);
// task 2
// alert( alert(1) || 2 || alert(3) );
console.log((1) || 2 || (3));
// task3
// alert(1 && null && 2);
console.log(1 && null && 2);
// task 4
// alert( alert(1) && alert(2) );
console.log((1) && (2));
// task 5
console.log(null || 2 && 3 || 4);
// task 6
// if (age >= 14 && age <= 90)
let age = 25;
if (age >= 14 && age <= 90) {
    console.log("age is between 14 and 90 inclusively");
}
else {
    console.log("age is NOT between 14 and 90 inclusively");
}
// task 7
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.
// solution
// The first variant:
let ageB = 25;
if (!(ageB >= 14 && ageB <= 90)) {
    console.log("age is NOT between 14 and 90 inclusively.");
}
// The second variant:
else {
    console.log("age is between 14 and 90 inclusively");
}
// task 8
// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) {
    console.log('first');
}
// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) {
    console.log('second');
}
// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) {
    console.log('third');
}
