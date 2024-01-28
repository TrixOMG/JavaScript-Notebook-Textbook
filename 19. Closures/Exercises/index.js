// Create closure with has 3 inner functions
const mathOperations = () => {
  let number = 0;

  return {
    plusOne: function plusOne() {
      number++;
      return number;
    },

    minusOne: function minusOne() {
      number--;
      return number;
    },

    squared: function squared() {
      number = number ** 2;
      return number;
    },
  };
};

const doSomeMath = mathOperations();

console.log(doSomeMath.plusOne());
console.log(doSomeMath.plusOne());
console.log(doSomeMath.squared());
console.log(doSomeMath.minusOne());

const mathOperations1 = () => {
  let number = 0;

  return {
    plusOne: function plusOne() {
      number++;
    },

    minusOne: function minusOne() {
      number--;
    },

    squared: function squared() {
      number = number ** 2;
    },
    getCount: function getCount() {
      return number;
    },
  };
};

const doSomeMath1 = mathOperations1();

console.log(doSomeMath1.plusOne()); // undefined
console.log(doSomeMath1.plusOne()); // undefined
console.log(doSomeMath1.squared()); // undefined
console.log(doSomeMath1.minusOne()); // undefined
console.log(doSomeMath1.getCount()); // 3
