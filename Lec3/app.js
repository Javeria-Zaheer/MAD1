// app.js

// Define a function that creates and returns an array of objects
function getData() {
    const arrayOfObjects = [
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 25 },
        { id: 3, name: 'Charlie', age: 35 }
    ];
    return arrayOfObjects;
}

// Export the function using CommonJS
module.exports = getData;

// Import the function (simulating a separate file)
const importedGetData = require('./app.js'); // Importing itself for demonstration

// Call the imported function to get the array of objects
const data = importedGetData();

// Log the values returned
console.log(data);
