class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  printInfo() {
    console.log(`Area: ${this.area}`);
    console.log(`Perimeter: ${this.perimeter}`);
  }
}

const shape1 = new Shape(20, 15)
shape1.printInfo();

module.exports = Shape;
