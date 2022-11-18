// without rest
function add(x, y) {
  return x + y;
}
console.log(add(1, 2, 3, 4, 5)); // => 3

// rest parameter/operator -- when we dont know how many args will be passed 

// 1. rest
function add(...nums) {
  //nums = []
  console.log(nums)
  let sum = 0;
  for (let num of nums) sum += num;
  return sum;
}

// add(1); // => 1
// console.log(add(3, 3)); // => 6
console.log(add(1, 1, 4, 5)); // => 11

// 2. 
function howManyArgs(...args) {

  //args = []
  console.log(args);
  return `You passed ${args.length} arguments.`; // point out the template literal
}

console.log(howManyArgs(0, 1)); // You have passed 2 arguments.
console.log(howManyArgs("argument!", null, ["one", 2, "three"], 4)); // You have passed 4 arguments.

// spread opeartor -- adds an array of unknown/changing length into a new array
// 1. spread
const dragons = ["Drogon", "Viserion", "Rhaegal"];
const weapons = ["dragonglass", ...dragons, "wildfire"]; // notice the spread operator ...dragons

console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]
