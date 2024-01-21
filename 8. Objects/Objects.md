# Objects

## Scope

Variables scopes can be:

- Global
- Local

Anything declared without let, var or const is scoped at global level.

### Window Global Object

```js
a = "JavaScript"; // declaring a variable without let or const make it available in window object and this found anywhere
b = 10; // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
}
console.log(a, b); // accessible
```

### Global scope

A globally declared variable can be accessed everywhere in the same file.
But the term global is relative.
It can be global to the file or it can be global relative to some block of codes.

```js
let a = "JavaScript"; // is a global scope it will be found anywhere in this file
let b = 10; // is a global scope it will be found anywhere in this file

function letsLearnScope() {
  console.log(a, b); // JavaScript 10, accessible
  if (true) {
    let a = "Python";
    let b = 100;
    console.log(a, b); // Python 100
  }
  console.log(a, b);
}

letsLearnScope();

console.log(a, b); // JavaScript 10, accessible
```

### Local scope

A variable declared as local can be accessed only in certain block code.

- Block Scope
- Function Scope

```js
//scope.js
let a = "JavaScript"; // is a global scope it will be found anywhere in this file
let b = 10; // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope() {
  console.log(a, b); // JavaScript 10, accessible
  let value = false;
  // block scope
  if (true) {
    // we can access from the function and outside the function but
    // variables declared inside the if will not be accessed outside the if block
    let a = "Python";
    let b = 20;
    let c = 30;
    let d = 40;
    value = !value;
    console.log(a, b, c, value); // Python 20 30 true
  }
  // we can not access c because c's scope is only the if block
  console.log(a, b, value); // JavaScript 10 true
}
letsLearnScope();
console.log(a, b); // JavaScript 10, accessible
```

A variable declared with _var_ only scoped to function but variable declared with _let_ or _const_ is block scope(function block, if block, loop block, etc).
Block in JavaScript is a code in between two curly brackets ({}).

```js
function letsLearnScope() {
  var gravity = 9.81;
  console.log(gravity);
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
  var gravity = 9.81;
  console.log(gravity); // 9.81
}
console.log(gravity); // 9.81

for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // 3
```

In ES6 and above there is let and const, so you will not suffer from the sneakiness of var.
When we use let our variable is block scoped and it will not infect other parts of our code.

```js
function letsLearnScope() {
  // you can use let or const, but gravity is constant
  const gravity = 9.81;
  console.log(gravity);
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
  const gravity = 9.81;
  console.log(gravity); // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
// console.log(i), Uncaught ReferenceError: i is not defined
```

## Object

Empty object

```js
const person = {};
```

### Getting values from an object

```js
const person = {
  firstName: "Pavel",
  lastName: "Nikitin",
  age: 22,
  country: "Russia",
  city: "Moscow",
  skills: [
    "HTML",
    "CSS",
    "TailwindCSS",
    "JavaScript",
    "React",
    "Node",
    "Three.js",
  ],
  getFullName: function () {
    return `${this.firstName}${this.lastName}`;
  },
  "phone number": "+79153430203",
};

// accessing values using .
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.location); // undefined

// value can be accessed using square bracket and key name
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);
console.log(person["age"]);
console.log(person["location"]); // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person["phone number"]);
```

### Setting new key for an object

```js
const person = {
  firstName: "Pavel",
  lastName: "Nikitin",
  age: 22,
  country: "Russia",
  city: "Moscow",
  skills: [
    "HTML",
    "CSS",
    "TailwindCSS",
    "JavaScript",
    "React",
    "Node",
    "Three.js",
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
person.country = "Finland";
person.title = "Software Engineer";
person.skills.push("SasS");
person.isMarried = false;

// Important!
person.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(", ");
  let lastSkill = this.skills.splice(
    this.skills.length - 1
  )[0];

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
  return statement;
};
// Important!

console.log(person);
console.log(person.getPersonInfo());
```

We can't use an arrow function as object method because the word this refers to the window inside an arrow function instead of the object itself.

### Object methods

- Object.assign: to copy an object without modifying the original object.

```js
const person = {
  firstName: "Pavel",
  lastName: "Nikitin",
  age: 22,
  country: "Russia",
  city: "Moscow",
  skills: [
    "HTML",
    "CSS",
    "TailwindCSS",
    "JavaScript",
    "React",
    "Node",
    "Three.js",
  ],
  address: {
    street: "Ismailova",
    pobox: "123123",
    city: "Moscow",
  },
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const copyPerson = Object.assign({}, person);
console.log(copyPerson);
```

- Object.keys: to get all keys from an object.

```js
const keys = Object.keys(copyPerson);
console.log(keys); //['firstName', 'age', 'country','city', 'skills', 'getPersonInfo']
const address = Object.keys(copyPerson.address);
console.log(address); //['street', 'pobox', 'city']
```

- Object.values: to get all values from an object.

```js
const values = Object.values(copyPerson);
console.log(values);
```

- Object.entries: to get the keys and values in an array

```js
const entries = Object.entries(copyPerson);
console.log(entries);
```

- Object.hasOwnProperty: to check if the object has the key.

```js
console.log(copyPerson.hasOwnProperty("name"));
console.log(copyPerson.hasOwnProperty("score"));
```
