# Data Types

1. Примитивные
2. Непримитивные (Object References)

Примитивные типы данных были разобраны ранее.

Непримитивные типы данных:

- Objects
- Arrays

Примитивные данные "immutable", то есть их нельзя "модифицировать". Пример:

```js
let word = "JavaScript";
word[0] = "Y";
console.log(word); // JavaScript (модификация не прошла)
```

## Non-Primitive Data Types

Non-primitive data types are modifiable or mutable. We can modify the value of non-primitive data types after it gets created.

(Непримитивные типы данных можно модифицировать после создания)

```js
let nums = [0, 1, 2];
nums[0] = 10;
console.log(nums); // [10, 1, 2]
```

Non-primitive data types cannot be compared by value.

(Непримитивные типы данных нельзя сравнивать по их значениям)

```js
let nums = [1, 2, 3];
let numbers = [1, 2, 3];
console.log(num == numbers); // false
```

```js
let userOne = {
  name: "Pavel",
  role: "student",
  country: "Russia",
};

let userTwo = {
  name: "Pavel",
  role: "student",
  country: "Russia",
};

console.log(userOne == userTwo); // false
```

Rule of thumb, we do not compare non-primitive data types. Do not compare arrays, functions, or objects. Non-primitive values are referred to as reference types, because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.

(Не сравнивать непримитивные типы данных (массивы, функции или объекты) Непримитивные типы данных являются ссылочными типами, поскольку они сравниваются по ссылке, а не по значению. Два объекта строго равны, только если они ссылаются на один и тот же базовый объект.)

## Math Object

In JavaScript the Math Object provides a lots of methods to work with numbers.

(Даёт методы для работы с числовыми переменными)

```js
const PI = Math.PI;

console.log(PI); // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI)); // 3 to round values to the nearest number

console.log(Math.round(9.81)); // 10

console.log(Math.floor(PI)); // 3 rounding down

console.log(Math.ceil(PI)); // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, returns the maximum value

const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random() * 11); // creates random number between 0 and 10
console.log(num);

//Absolute value
console.log(Math.abs(-10)); // 10

//Square root
console.log(Math.sqrt(100)); // 10

console.log(Math.sqrt(2)); // 1.4142135623730951

// Power (степень)
console.log(Math.pow(3, 2)); // 9

console.log(Math.E); // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046

// Trigonometry
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);
```

## Long Literal Strings

A string could be a single character or paragraph or a page. If the string length is too big it does not fit in one line. We can use the backslash character "/\" at the end of each line to indicate that the string will continue on the next line.

(Можно использовать бэкслеш чтобы перенести часть string на новую строку)

```js
const paragraph =
  "Hello \
                  World!";
```

## Escape Characters

The most common escape characters:

\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")

## Template Literals (Template Strings) (Шаблонные строки)

To create a template strings, we use two back-ticks. We can inject data as expressions inside a template string. To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign.

(Для создания нужно использовать (``). Для внедрения туда переменной - (${}))

```js
console.log(`The sum of 2 and 3 is 5`); // statically writing the data
let a = 2;
let b = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}`); // injecting the data dynamically
```

Using a string template or string interpolation method, we can add expressions, which could be a value, or some operations (comparison, arithmetic operations, ternary operation).

(Можно добавлять выражения)

```js
let a = 2;
let b = 3;
console.log(`${a} is greater than ${b}: ${a > b}`);
```

## String Methods

- substr(): It takes two arguments, the starting index and number of characters to slice.

```js
console.log("JavaScript".substr(4, 6)); // Script
```

- substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.

```js
console.log("JavaScript".substring(0, 4)); // Java
```

- split(): The split method splits a string at a specified place.

```js
console.log("Pavel Nikitin".split(" ")); // ["Pavel", "Nikitin"]
```

- trim(): Removes trailing space in the beginning or the end of a string.

```js
console.log("     Pavel Nikitin   ".trim()); // "Pavel Nikitin"
```

- includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.

```js
console.log("Pavel Nikitin".includes("ki")); // "true"
```

(It is case sensitive!!!)

- replace(): takes as a parameter the old substring and a new substring.

(Может принимать RegEx)

```js
console.log("Pavel Nikitin".replace("Pavel", "John")); // "John Nikitin"
```

- charAt(): Takes index and it returns the value at that index

```js
let fullName = "Pavel Nikitin";
console.log(fullName.charAt(fullname.length - 1)); // "n"
```

- charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index

```js
let fullName = "Pavel Nikitin";
console.log(fullName.charCodeAt(fullname.length - 1)); // 110
```

- indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1

(Туда можно пихать стринги и символы)

- lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1

- startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).

```js
let string = "My name is Slim Shady";

console.log(string.startsWith("My ")); // true
console.log(string.startsWith("S")); // false
```

- endsWith() - та же история, но наоборот

- search(): it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.

```js
let string =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string.search("love")); // 2
console.log(
  string.search(/javascript/gi)
) // 7
``;
```

(Может принимать RegEx)

- match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null.

```js
let patternOne = /love/; // with out any flag
let patternTwo = /love/gi; // g-means to search in the whole text, i - case insensitive

let string =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string.match("love"));
//["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]

console.log(string.match(patternTwo)); // ["love", "love", "love"]
```

Extracting numbers from text using regular expression:

```js
let txt =
  "В 2020 я поступил в университет. В 2024 году я закончу МАДИ.";
let regEx = /\d+/;

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx)); // ["2", "0", "2", "0", "2", "0", "2", "4"]
console.log(txt.match(/\d+/g)); // ["2020", "2024"]
```

- repeat(): it takes a number as argument and it returns the repeated version of the string.

```js
let string = "love";
console.log(string.repeat(10)); // lovelovelovelovelovelovelovelovelovelove
```

## Changing Data Type (Casting)

- Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.

```js
let num = "10";
let numInt = Number(num);

console.log(numInt); // 10
```

```js
let num = "10";
let numInt = +num;

console.log(numInt); // 10
```

parseInt может переводить числа из различных систем счисления в десятичную.
Для этого необходимо передать второй параметр, который будет являться системой счисления
(2, 16 ...).
