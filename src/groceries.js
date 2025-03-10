"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGroceries = createGroceries;
exports.getSecondGroceryItem = getSecondGroceryItem;
exports.getGroceriesCount = getGroceriesCount;
exports.getLastGroceryItem = getLastGroceryItem;
exports.removeLastGroceryItem = removeLastGroceryItem;
exports.addNewGroceries = addNewGroceries;
exports.getFirstThreeGroceryItems = getFirstThreeGroceryItems;
// Step 1:
// Write a createGroceries function that returns an array with 6 groceries items (each item is a string)
function createGroceries() {
    // write your code here...
    return ["Apples", "Bananas", "Carrots", "Milk", "Bread", "Eggs"]; // replace empty array with what you see is fit
}
// Step 2:
// Write a getSecondGroceryItem function that returns the second grocery item from `groceries` argument
function getSecondGroceryItem(groceries) {
    // write your code here...
    return groceries[1]; // replace empty string with what you see is fit
}
// Step 3:
// Write a getGroceriesCount that returns the length of the `groceries` argument
function getGroceriesCount(groceries) {
    // write your code here...
    return groceries.length; // replace zero with what you see is fit
}
// Step 4:
// Write a getLastGroceryItem function that returns the last grocery item from `groceries` argument
function getLastGroceryItem(groceries) {
    // write your code here...
    return groceries[groceries.length - 1]; // replace empty string with what you see is fit
}
// Step 5:
// Write a removeLastGroceryItem function that removes the last grocery item and return it
function removeLastGroceryItem(groceries) {
    // write your code here...
    return groceries.pop() || ""; // replace empty string with what you see is fit
}
// Step 6:
// Write a addNewGroceries function that adds two new and different grocery items to the end of the groceries argument
// and returns the modified array
function addNewGroceries(groceries, itemOne, itemTwo) {
    // write your code here...
    groceries.push(itemOne, itemTwo);
    return groceries; // replace empty array with what you see is fit
}
// Step 7:
// Write a getFirstThreeGroceryItems function that returns a new array that contains the first three grocery items
function getFirstThreeGroceryItems(groceries) {
    // write your code here...
    return groceries.slice(0, 3); // replace empty array with what you see is fit
}
