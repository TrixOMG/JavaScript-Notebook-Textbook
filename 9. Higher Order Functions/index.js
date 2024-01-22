const callbackFunction = (n) => {
  return n ** 2;
};

function cube(callbackFunction, n) {
  return callbackFunction(n) * n;
}

console.log(cube(callbackFunction, 3));

// Higher order function returning an other function
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};

console.log(higherOrder(2)(3)(10)); //4+9+10=23

// forEach
const numbers = [1, 2, 3, 4, 5];

const sumArray = (arr) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  };
  arr.forEach(callback);

  return sum;
};

console.log(sumArray(numbers));

function sayHello() {
  console.log("Hello");
}
setInterval(sayHello, 1000); // prints hello in every second, 1000ms is 1s
