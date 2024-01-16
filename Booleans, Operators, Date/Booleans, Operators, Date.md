# Booleans, Operators, Date

## Booleans

```js
let trueValue = 4 > 3;
let falseValue = 10 > 100;
```

### Truthy values (Значения, возвращающие ИСТИНУ)

- All numbers(positive and negative) are truthy except zero (любые числа = true, 0 = false)
- All strings are truthy except an empty string ('') (любые string = true, пустая строка = false)
- The boolean true

### Falsy values (Значения, возвращающие ЛОЖЬ)

- false
- 0
- -0
- "" (empty string)
- null
- undefined
- NaN

### Undefined

If we declare a variable and if we do not assign a value, the value will be undefined. In addition to this, if a function is not returning the value, it will be undefined.

(Если мы объявляем переменную и если мы не присваиваем ей значение, то значение будет undefined. Также если функция не возвращает значение, оно будет undefined)

```js
let firstName;
console.log(firstName); //undefined
```

### Null

```js
let empty = null;
console.log(empty); //null, means no value (нет значения)
```

## Operators

### Arithmetic Operators

- Modulus(%): `a % b` (остаток от деления)
- Exponential(**): `a ** b` (возведение в степень)

```js
let numOne = 4;
let numTwo = 3;

let remainder = numOne % numTwo; // Остаток
let powerOf = numOne ** numTwo; // В степени

console.log(remainder, powerOf); // 1, 64
```

### Comparison Operators

- `==` Equal in value only: Equivalent (равны только по значению)
- `===` Equal in value and data type: Exactly equal (в точности равны)

As rule of thumb, if a value is not true with == it will not be equal with ===. Using === is safer than using ==.

(Если значение не ИСТИНА при `==`, то оно не будет иметь то же значение при `===`)

(Использование `===` более безопасно)

Порядок в котором выполняются операторы по ссылке:
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence>

## Window Methods

### Window alert() method

Displays an alert box with a specified message and an OK button. It is a builtin method and it takes on argument.

```js
alert("Hello World!");
```

### Window prompt() method

The window prompt methods display a prompt box with an input on your browser to take input values and the input data can be stored in a variable. The prompt() method takes two arguments. The second argument is optional.

(Метод prompt() отображает окно с запросом на ввод данных. Вводимые данные можно сохранять в переменные. Имеет 2 аргумента, второй - опциональный)

```js
let number = prompt("Enter number", "Insert number here");
console.log(number);
```

### Window confirm() method

The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button. A confirm box is often used to ask permission from a user to execute something. Window confirm() takes a string as an argument. Clicking the OK yields true value, whereas clicking the Cancel button yields false value.

(Отображает диалоговое окно, выходное значение (true/false) можно загнать в переменную)

```js
const agree = confirm("Are you sure you like to delete?");
console.log(agree); // result will be true or false based on what you click on the dialog box
```

(More methods will be described later)

## Date object

### Creating a time object

```js
const now = new Date();
console.log(now); //Tue Jan 16 2024 16:59:57 GMT+0300 (Москва, стандартное время)
```

### Getting full year

```js
const now = new Date();
console.log(now.getFullYear());
```

### Getting month

```js
const now = new Date();
console.log(now.getMonth()); // month(0-11)
```

### Getting date

```js
const now = new Date();
console.log(now.getDate()); // day(1-31)
```

### Getting day (Of the week)

```js
const now = new Date();
console.log(now.getDay());
// Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)
```

### Getting hours

```js
const now = new Date();
console.log(now.getHours());
```

### Getting minutes

```js
const now = new Date();
console.log(now.getMinutes());
```

### Getting seconds

```js
const now = new Date();
console.log(now.getSeconds());
```

## Getting time

This method give time in milliseconds starting from January 1, 1970. It is also known as Unix time.

```js
const now = new Date();
console.log(now.getTime());
// или
const allSeconds = Date.now();
console.log(allSeconds);
```
