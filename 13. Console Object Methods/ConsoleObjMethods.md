# Console Object Methods

## console.log()

We use console.log() to show output on the browser console.

We can substitute values and also we can style the logging out put using %c.

- Substitution

```js
console.log("%d %s of JS", 30, "Days"); // 30 Days of JS
```

- CSS

We can style logging message using css.

```js
console.log("%c30 Days Of JavaScript", "color:green"); // log output is green
console.log(
  "%c30 Days%c %cOf%c %cJavaScript%c",
  "color:green",
  "",
  "color:red",
  "",
  "color:yellow"
); // log output green red and yellow text
```

## console.warn()

We use console.warn() to give warning on browser.
For instance to inform or warn deprecation of version of a package or bad practices.

```js
console.warn("This is a warning");
console.warn(
  "You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!"
);
console.warn("Warning is different from error");
```

## console.error()

The console.error() method shows an error messages.

```js
console.error("This is an error message");
console.error("We all make mistakes");
```

## console.table()

The console.table() method display data as a table on the console.
Displays tabular data as a table.

The console.table() takes one required argument data, which must be an array or an object, and one additional optional parameter columns.

```js
const user = {
  name: "Pavel",
  title: "Software engineer",
  country: "Russia",
  city: "Moscow",
  age: 22,
};
console.table(user);
```

## console.time()

Starts a timer you can use to track how long an operation takes.
You give each timer a unique name, and may have up to 10,000 timers running on a given page.

When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.

```js
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

console.time("Regular for loop");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const [name, city] of countries) {
  console.log(name, city);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countries.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("forEach loop");

/*
Finland Helsinki
Sweden Stockholm
Norway Oslo
Regular for loop: 0.037841796875 ms
Finland Helsinki
Sweden Stockholm
Norway Oslo
for of loop: 0.239990234375 ms
Finland Helsinki
Sweden Stockholm
Norway Oslo
forEach loop: 0.238037109375 ms
*/
```

## console.info()

It displays information message on browser console.

```js
console.info("30 Days Of JavaScript");
```

## console.assert()

The console.assert() methods writes an error message to the console if the assertion is false.

If the assertion is true, nothing happens.

The first parameter is an assertion expression. If this expression is false, an Assertion failed error message will be displayed.

```js
console.assert(4 > 3, "4 is greater than 3"); // no result
console.assert(3 > 4, "3 is not greater than 4"); // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`;
  console.log("the # is " + i);
  console.assert(i % 2 === 0, {
    number: i,
    errorMessage: errorMessage,
  });
}
```

## console.group()

The console.group() can help to group different log groups.

```js
const names = ["Pavel", "Brook", "David", "John"];
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const user = {
  name: "Pavel",
  title: "Software engineer",
  country: "Russia",
  city: "Moscow",
  age: 22,
};
const users = [
  {
    name: "Pavel",
    title: "Software engineer",
    country: "Russia",
    city: "Moscow",
    age: 22,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

console.group("Names");
console.log(names);
console.groupEnd();

console.group("Countries");
console.log(countries);
console.groupEnd();

console.group("Users");
console.log(user);
console.log(users);
console.groupEnd();
```

## console.count()

It prints the number of times the console.count() is called. It takes a string label parameter.

It is very helpful to count the number of times a function is called.

```js
const func = () => {
  console.count("Function has been called");
};
func();
func();
func();
/*
Function has been called: 1
Function has been called: 2
Function has been called: 3
*/
```

## console.clear()

The console.clear() cleans the browser console.
