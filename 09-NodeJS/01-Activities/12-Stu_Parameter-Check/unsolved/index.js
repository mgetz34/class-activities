// It's done when I have created a file, index.js, in the working directory.

// It's done when I use process.argv to assign two arguments to variables.


//parseInt converts to an interger
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

console.log(typeof num1);
console.log(typeof num2)

// console.log(process.argv)
// console.log(num1);
// console.log(num2);
// It's done when I compare those two variables to see whether they are the same or not.

console.log(num1 === num2);
// It's done if the program returns true when the values are the same and false if they are not.