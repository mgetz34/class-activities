// Constructor function which can be used to create objects containing the properties "raining", "noise", and the "makeNoise()" function
function Animal(raining, noise) {
  //raining key: True
  //noise key: Woof
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = () => {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

// Sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
// console.log(dogs.noise);
// console.log(cats.noise);
// Calling dogs and cats makeNoise methods
// dogs.makeNoise();
// cats.makeNoise();

// If we want, we can change an object's properties after they're created
// cats.raining = true;
// cats.makeNoise();

const dogs = new Animal(true, 'Woof!');
const cats = new Animal(true, 'Meow!');

const massHysteria = (dogs, cats) => {
  //dogs = {raining: true,  noise: "woof"}
  //cats = {raining = false, noise: "meow"}  

  if (dogs.raining === true && cats.raining === true) {
    console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
  }
};

massHysteria(dogs, cats);
