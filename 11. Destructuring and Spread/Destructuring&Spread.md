# Destructuring and Spread

Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

## Destructuring arrays

```js
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;

console.log(numOne, numTwo, numThree); // 1 2 3

const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, bodyTemp, boilingTemp] =
  scientificConstants;

console.log(e, pi, gravity, bodyTemp, boilingTemp); // 2.72 3.14 9.81 37 100
```

```js
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack;

console.log(frontEnd); // ["HTML", "CSS", "JS", "React"]
console.log(backEnd); // ["Node", "Express", "MongoDB"]
```

If we like to skip on of the values in the array we use additional comma.
The comma helps to omit the value at that specific index.

```js
const numbers = [1, 2, 3];
let [numOne, , numThree] = numbers; //2 is omitted

console.log(numOne, numThree); // 1 2

// Complex Example:
const student = [
  "David",
  ["HTML", "CSS", "JS", "React"],
  [98, 85, 90, 95],
];

const [name, skills, [, , jsScore, reactScore]] = student;

console.log(name, skills, jsScore, reactScore);
// David (4) ["HTML", "CSS", "JS", "React"] 90 95
```

We can use default value in case the value of array for that index is undefined:

```js
const names = [undefined, "Brook", "David"];
let [
  firstPerson = "Pavel",
  secondPerson,
  thirdPerson,
  fourthPerson = "John",
] = names;

console.log(
  firstPerson,
  secondPerson,
  thirdPerson,
  fourthPerson
); // Pavel Brook David John
```

We can not assign variable to all the elements in the array.
We can destructure few of the first and we can get the remaining as array using spread operator(...).

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3);
console.log(rest);
/*
1 2 3
[4, 5, 6, 7, 8, 9, 10]
*/
```

### Destructuring during iteration

```js
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

for (const [country, city] of countries) {
  console.log(country, city);
}
```

## Destructuring Object

When we destructure object, the name of the variable we use to destructure should be exactly the same as the key or property of the object.

```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let { width, height, area, perimeter } = rectangle;

console.log(width, height, area, perimeter); // 20 10 200 undefined
```

### Renaming during destructuring

```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let {
  width: w,
  height: h,
  area: a,
  perimeter: p,
} = rectangle;

console.log(w, h, a, p); // 20 10 200 undefined
```

If the key is not found in the object the variable will be assigned to undefined.
Sometimes the key might not be in the object, in that case we can give a default value during declaration.

```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let { width, height, area, perimeter = 60 } = rectangle;

console.log(width, height, area, perimeter); //20 10 200 60
```

```js
const rectangle = {
  width: 30,
  height: 10,
  area: 200,
  perimeter: 80,
};
let { width, height, area, perimeter = 60 } = rectangle; // modification did not occur
console.log(width, height, area, perimeter); //30 10 200 80
```

### Object parameter without destructuring

```js
// Without destructuring
const rect = {
width: 20,
height: 10
}
const calculatePerimeter = (rectangle) => {
return 2 \* (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter(rect)) // 60
//with destructuring
```

### Object parameter with destructuring

```js
const rect = {
  width: 20,
  height: 10,
};

const calculatePerimeter = ({ width, height }) => {
  return 2 * (width + height);
};

console.log(calculatePerimeter(rect)); // 60
```

### Destructuring during iteration

```js
const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}
```

## Spread or Rest Operator

When we destructure an array we use the spread operator(...) to get the rest elements as array.
In addition to that we use spread operator to spread array elements to another array.

### Spread operator to get the rest of array elements

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3); // первые 3
console.log(rest); // остальные
```

### Spread operator to copy array

```js
const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers);
```

### Spread operator to copy object

```js
const user = {
  name: "Pavel",
  title: "Software Developer",
  country: "Russia",
  city: "Moskow",
};

const copiedUser = { ...user };
console.log(copiedUser);
```

Modifying or changing the object while copying:

```js
const user = {
  name: "Pavel",
  title: "Software Developer",
  country: "Russia",
  city: "Moskow",
};

const copiedUser = {
  ...user,
  education: "Bachleor's degree",
  name: "Paul",
};
console.log(copiedUser);
/*
{
  name: 'Paul',
  title: 'Software Developer',
  country: 'Russia',
  city: 'Moskow',
  education: "Bachleor's degree"
}
*/
```

### Spread operator with arrow function

Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator.

```js
const sumAllNums = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
};

console.log(sumAllNums(1, 2, 3, 4, 5)); // 15
```
