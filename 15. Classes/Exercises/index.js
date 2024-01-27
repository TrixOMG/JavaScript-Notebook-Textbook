class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  get getName() {
    return this.name;
  }

  set setAge(age) {
    this.age = age;
  }

  saySomething() {
    console.log("I am an animal!");
  }

  getInfo() {
    return `My name is ${this.name} and I am ${this.age} years old, i have ${this.legs} legs and i am colored ${this.color}.`;
  }
}

const animal1 = new Animal("Bork", 1, "Black", 4);

console.log(animal1.getInfo());

class Cat extends Animal {
  constructor(gender, name, age, color, legs) {
    super(name, age, color, legs);
    this.gender = gender;
  }
  saySomething() {
    console.log("Meow!");
  }
}

class Dog extends Animal {
  constructor(gender, name, age, color, legs) {
    super(name, age, color, legs);
    this.gender = gender;
  }
  saySomething() {
    console.log("Bark!");
  }
}

const cat1 = new Cat("female", "Miranda", 1, "Black", 4);
const dog1 = new Dog("male", "Brook", 10, "Brown", 4);

cat1.saySomething();
dog1.saySomething();

console.log(dog1.getInfo());

//Lv.3
