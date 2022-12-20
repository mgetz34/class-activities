// TODO: Refactor the class to a factory function.
const Lesson = (title, description) => {
  this.title = title,
    this.description = description
}

function information() {
  console.log(this.title, this.description);
}

// class Lesson {
//   constructor() {
//     this.title = 'Module 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }

const csForJS = new Lesson('Module 17 - Computer Science', 'CS for JS');
csForJS.information();
