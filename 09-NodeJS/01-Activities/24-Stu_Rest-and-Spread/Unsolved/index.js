// // Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// // TODO: Which operator is being used here?
// //spread, adding song array to new array "newSongs", no extra data passed
const newSongs = [...songs];

// // TODO: What do you expect to be logged in the console?
console.log(newSongs); //['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  //array.reduce() method adds all items in an array using the previous total adding to each incremented index value of the array
  //"reducing" down to a single sum
  //a = accumulatior 
  //b = current value
  return array.reduce((a, b) => a + b, 0);
};

// // TODO: What do you expect to be logged in the console?
console.log(addition(1, 2, 3)); //6

// TODO: What is this syntax that is being used as the parameter?
//rest operator, dont know how many arguments will be passed
const additionSpread = (...array) => {
  //array = []
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3)); //6

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3, 4, 100)); //110
