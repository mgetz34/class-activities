// Array.prototype.forEach()
// const myArray = [2, 4, 6, 8];

// // myArray.forEach((num) => console.log(num));

// // String.prototype.toLowerCase()
// const person = {
//   name: 'Eric',
//   age: 28,
//   occupation: 'Full-Stack Web Developer',
// };

// console.log(person.occupation.toLowerCase());

// // Prototype methods on constructor function
function Movie(title, releaseYear) {
  this.title = title;
  this.releaseYear = releaseYear;

  //prototype: {loginfo: f, getAge: f}
}

//1. creates a new empty object
//2. assigns the keyword of this to the newly created object
//3. auto returns the object from the function
//4. creates a hidden property called __proto__ = link back to the constructor functions prototype property
const superman = new Movie('Superman', 1978);
console.log(superman);

Movie.prototype.logInfo = function () {
  console.log(`${this.title} was released in ${this.releaseYear}`);
};

// Movie.prototype.getAge = function () {
//   console.log(`age is whatever.....`)
// }

// superman.logInfo();
// superman.getAge();
