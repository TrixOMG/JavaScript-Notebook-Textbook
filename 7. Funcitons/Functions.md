# Functions

## Function Declaration

A function can be declared or created in couple of ways:

- Declaration function
- Expression function
- Anonymous function
- Arrow function

```js
//declaring a function without a parameter
function functionName() {
  // code goes here
}
functionName(); // calling function by its name and with parentheses
```

## Function with many parameters

```js
// function with multiple parameters
function functionName(parm1, parm2, parm3,...){
  //code goes here
}
functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed
```

## Function with unlimited number of parameters

A function declaration provides a function scoped arguments array like object.
Anything we passed as argument in the function can be accessed from arguments object inside the functions.

```js
// Let us access the arguments object

function sumAllNums() {
  console.log(arguments);
}

sumAllNums(1, 2, 3, 4);
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
```

```js
// function declaration

function sumAllNums() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 1730
```

### Unlimited number of parameters in arrow function

Arrow function does not have the function scoped arguments object.
To implement a function which takes unlimited number of arguments in an arrow function we use spread operator followed by any parameter name.
Any thing we passed as argument in the function can be accessed as array in the arrow function.

```js
// Let us access the arguments object

const sumAllNums = (...args) => {
  // console.log(arguments), arguments object not found in arrow function
  // instead we use a parameter followed by spread operator (...)
  console.log(args);
};

sumAllNums(1, 2, 3, 4);
// [1, 2, 3, 4]
```

```js
// function declaration

const sumAllNums = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};

console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173
```

## Anonymous Function

(Без имени)

```js
const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun"
  );
};
```

### Expression Function

Expression functions are anonymous functions.
After we create a function without a name and we assign it to a variable.
To return a value from the function we should call the variable.

```js
// Function expression
const square = function (n) {
  return n * n;
};

console.log(square(2)); // -> 4
```

### Self Invoking Functions

Self invoking functions are anonymous functions which do not need to be called to return a value.

```js
(function (n) {
  console.log(n * n);
})(2); // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function (n) {
  return n * n;
})(10);

console.log(squaredNum);
```

## Arrow Function

Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.

```js
// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function

//function square(n) {
//  return n * n;
//}

//console.log(square(2)); // 4

const square = (n) => {
  return n * n;
};

console.log(square(2)); // -> 4

// if we have only one line in the code block, it can be written as follows, explicit return
const square = (n) => n * n; // -> 4
```

```js
//Valid
const printFullName = (firstName, lastName) =>
  `${firstName} ${lastName}`;

console.log(printFullName("Asabeneh", "Yetayeh"));
```

## Function with default parameters

Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used.
Both function declaration and arrow function can have a default value or values.

```js
// syntax
// Declaring a function
function functionName(param = value) {
  //code
}

// Calling function
functionName();
functionName(arg);

function greetings(name = "Peter") {
  let message = `${name}, welcome to 30 Days Of JavaScript!`;
  return message;
}

console.log(greetings()); // Peter, welcome to 30 Days Of JavaScript!
console.log(greetings("Pavel")); //Pavel, welcome to 30 Days Of JavaScript!
```
