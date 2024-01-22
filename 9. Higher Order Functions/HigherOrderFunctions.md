# Higher Order Function

Higher order functions are functions which take other function as a parameter or return a function as a value.

The function passed as a parameter is called callback.

## Callback

A callback is a function which can be passed as parameter to other function.

```js
// Возводит число в квадрат и возвращает его
const callbackFunction = (n) => {
  return n ** 2;
};

// Вызывает функцию, возводящую число в квадрат и
// результат умножает на это же число (получается число в кубе)
function cube(callbackFunction, n) {
  return callbackFunction(n) * n;
}

console.log(cube(callbackFunction, 3)); // 27
```

## Returning function

Higher order functions return function as a value.

```js
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
console.log(higherOrder(2)(3)(10)); //
```

The forEach method uses call back.

```js
const numbers = [1, 2, 3, 4, 5];

const sumArray = (arr) => {
  let sum = 0;

  const callback = function (element) {
    sum += element;
  };

  arr.forEach(callback);

  //OR

  //arr.forEach(function(element){
  //sum+=element;
  //})

  return sum;
};

console.log(sumArray(numbers)); // 15
```

## Setting Time

In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.

- setInterval
- setTimeout

### Setting Interval using a setInterval function

In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time.

The setInterval global method take a callback function and a duration as a parameter.

The duration is in milliseconds and the callback will be always called in that interval of time.

```js
function callback() {
  // code
}
setInterval(callback, duration);
```

```js
function sayHello() {
  console.log("Hello");
}
setInterval(sayHello, 1000); // prints hello in every second, 1000ms is 1s
```

### Setting Interval using setTimeout

```js
function sayHello() {
  console.log("Hello");
}
setTimeout(sayHello, 2000); // it prints hello after it waits for 2 seconds.
```
