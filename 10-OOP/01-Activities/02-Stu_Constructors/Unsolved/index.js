// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

// ES6 Classes - syntastic sugar for constructor functions 

function Developer(name, tech) {
    this.name = name;
    this.tech = tech;
    this.introduction = () => {
        console.log(`Hello, my name is ${this.name} and my favorite technology is ${this.tech}`);
    }
}

// TODO: Create a new object using the 'Developer' constructor

const larry = new Developer("Larry", "JS");
const steve = new Developer("Steve", "HTML");
const jessie = new Developer("Jessie", "CSS");

// TODO: Call the 'introduction()' method on the new object

console.log(larry.introduction());
console.log(steve.introduction());
console.log(jessie.introduction());