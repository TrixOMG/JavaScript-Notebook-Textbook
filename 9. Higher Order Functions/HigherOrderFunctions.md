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

The setInterval global method takes a callback function and a duration as a parameter.

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

setTimeout is a higher order function that executes some action at some time in the future.

The setTimeout global method takes a callback function and a duration as a parameter.

The duration is in milliseconds and the callback wait for that amount of time.

```js
function sayHello() {
  console.log("Hello");
}

setTimeout(sayHello, 1500); // it prints hello after it waits for 1.5 seconds.
```

## Functional Programming

All these builtin methods take callback function:
forEach, map, filter, reduce, find, every, some, and sort.

### forEach

forEach: Iterate an array elements.

We use forEach only with arrays.
It takes a callback function with elements, index parameter and array itself.
The index and the array optional.

```js
arr.forEach(function (element, index, arr) {
  console.log(index, element, arr);
});
// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
  console.log(index, element, arr);
});
// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) =>
  console.log(index, element, arr)
);
```

### map

Iterate an array elements and modify the array elements.
It takes a callback function with elements, index, array parameter and return a new array.

```js
const modifiedArray = arr.map(function (
  element,
  index,
  arr
) {
  return element;
});

// OR

const modifArray = arr.map((el, i, arr) => element);

/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/

//Example
const numbers = [1, 2, 3, 4, 5];
const numbersSquare = numbers.map((num) => num * num);

console.log(numbersSquare); // [1, 4, 9, 16, 25]
```

### filter

Filter out items which fullfill filtering conditions and return a new array.

```js
//Filter countries containing land
const countriesContainingLand = countries.filter(
  (country) => country.includes("land")
);

console.log(countriesContainingLand);

const countriesEndsByia = countries.filter((country) =>
  country.endsWith("ia")
);

console.log(countriesEndsByia);
```

### reduce

Reduce takes a callback function.
The call back function takes accumulator, current,
and optional initial value as a parameter and returns a single value.

It is a good practice to define an initial value for the accumulator value.
If we do not specify this parameter, by default accumulator will get array first value.
If our array is an empty array, then Javascript will throw an error.

```js
arr.reduce((acc, cur) => {
  // some operations goes here before returning a value
  return;
}, initialValue); // need to define initialValue to not get an error if array is empty
```

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum); // 15
```

### every

Checks if all the elements are similar in one aspect.
Returns boolean.

```js
const names = ["Pavel", "Mathias", "Elias", "Brook"];
const areAllStr = names.every(
  (name) => typeof name === "string"
); // Are all strings?

console.log(areAllStr); // true
```

### find

Returns the first element which satisfies the condition.

```js
const ages = [24, 22, 25, 32, 35, 18];
const age = ages.find((age) => age < 20);

console.log(age); // 18
```

```js
const scores = [
  { name: "Pavel", score: 95 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const score = scores.find((user) => user.score > 80);
console.log(score); // { name: "Pavel", score: 95 }
```

### findIndex

Returns the position (index) of the first element which satisfies the condition.

```js
const ages = [24, 22, 25, 32, 35, 18];

const age = ages.findIndex((age) => age < 20);
console.log(age); // 5
```

### some

Checks if some of the elements are similar in one aspect.
Returns boolean.

```js
const bools = [true, true, true, true];

const areSomeTrue = bools.some((b) => b === true);

console.log(areSomeTrue); //true
```

### sort

The sort method arranges the array elements either ascending or descending order.
By default, the sort() method sorts values as strings.
This works well for string array items but not for numbers.
If number values are sorted as strings and it give us wrong result.

Sort method modifys the original array.
It is recommended to copy the original data before you start using sort method.

```js
const products = [
  "Milk",
  "Coffee",
  "Sugar",
  "Honey",
  "Apple",
  "Carrot",
];
console.log(products.sort()); // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted
```

#### Sorting Numeric Values

```js
const numbers = [9.81, 3.14, 100, 37];
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers.sort()); //[100, 3.14, 37, 9.81]
numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers); // [3.14, 9.81, 37, 100]

numbers.sort((a, b) => {
  return b - a;
});
console.log(numbers); //[100, 37, 9.81, 3.14]
```

### Sorting Object Arrays

Whenever we sort objects in an array, we use the object key to compare.

```js
objArr.sort(function (a, b) {
  if (a.key < b.key) return -1;
  if (a.key > b.key) return 1;
  return 0;
});

// or

objArr.sort((a, b) => {
  if (a["key"] < b["key"]) return -1;
  if (a["key"] > b["key"]) return 1;
  return 0;
});

const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyob", age: 100 },
  { name: "Elias", age: 22 },
];
users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log(users); // sorted ascending
// [{...}, {...}, {...}, {...}]
```

