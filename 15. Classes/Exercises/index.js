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
class Statistics {
  constructor(arrayOfValues) {
    this.arrayOfValues = arrayOfValues;
  }

  get getCount() {
    return this.arrayOfValues.length;
  }

  get getSum() {
    return this.arrayOfValues.reduce((a, b) => a + b, 0);
  }

  get getMin() {
    return Math.min(...this.arrayOfValues);
  }

  get getMax() {
    return Math.max(...this.arrayOfValues);
  }

  get getRange() {
    return this.getMax - this.getMin;
  }

  get getMean() {
    return this.getSum / this.getCount;
  }

  get getMedian() {
    return this.arrayOfValues.sort((a, b) => a - b)[
      Math.floor(this.getCount / 2)
    ];
  }

  get getMode() {
    const setOfValues = new Set(this.arrayOfValues);
    let mode = 0;
    let maxCount = 0;
    for (const val of setOfValues) {
      const count = this.arrayOfValues.filter(
        (value) => value === val
      ).length;
      if (count > maxCount) {
        maxCount = count;
        mode = val;
      }
    }
    return mode;
  }

  get getVariance() {
    const mean = this.getMean;
    const squareDiffs = this.arrayOfValues.map((value) => {
      const diff = value - mean;
      return diff * diff;
    });
    const avgSquareDiff =
      squareDiffs.reduce((a, b) => a + b, 0) /
      this.getCount;
    return avgSquareDiff;
  }

  get getStandardDeviation() {
    return Math.sqrt(this.getVariance);
  }

  get getFreqDist() {
    const freqDist = {};
    for (const val of this.arrayOfValues) {
      if (freqDist[val]) {
        freqDist[val] += 1;
      } else {
        freqDist[val] = 1;
      }
    }
    return freqDist;
  }
}

ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33,
  27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26,
];

const stats = new Statistics(ages);
console.log("Count:", stats.getCount);
console.log("Max:", stats.getMax);
console.log("Mean:", stats.getMean);
console.log("Median:", stats.getMedian);
console.log("Min:", stats.getMin);
console.log("Mode:", stats.getMode);
console.log("Range:", stats.getRange);
console.log("Sum:", stats.getSum);
console.log("Variance:", stats.getVariance);
console.log(
  "Standard Deviation:",
  stats.getStandardDeviation
);
console.log("Frequency Distribution:", stats.getFreqDist);
