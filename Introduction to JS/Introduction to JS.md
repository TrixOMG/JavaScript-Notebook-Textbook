### Adding JavaScript to a Web Page (Добавление JS к Веб-странице)

- Inline script (Встроенный скрипт)
- Internal script (Внутренний скрипт)
- External script (Внешний скрипт)
- Multiple External scripts (Множественные внешние скрипт)

Примеры находятся в index.html и external.js

> Your main.js file should be below all other scripts. It is very important to remember this.
> (main.js должен находиться ниже всех остальных скриптов. Это очень важно!)

### Data types (Типы данных)

The following are JavaScript primitive data types: String, Number, Boolean, undefined, Null, and Symbol.

(В JS Существуют примитивные (простые) типы данных)

#### Numbers (Числа)

- Integers: Integer (negative, zero and positive) numbers Example: ... -3, -2, -1, 0, 1, 2, 3 ...
- Float-point numbers: Decimal number Example ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...

(Целые числа и числа с плавающей точкой)

Strings
A collection of one or more characters between two single quotes, double quotes, or backticks.
(Коллекция одного или более символа между '', "", или ``) backtick - обратный апостроф.

```
let name = 'Pavel';
let surname = "Nikitin";
let dateOfBirth = `05.07.2002`;
```

#### Booleans (Булевые переменные)

A boolean value is either True or False. Any comparisons returns a boolean value, which is either true or false.

(Булевое значение может являться ИСТИНА или ЛОЖЬ. Любые сравнения возвращают Булевое значение)

```js
let showButton = false;
let showDropdown = true;
```

#### Undefined ("Неопределённый")

In JavaScript, if we don't assign a value to a variable, the value is undefined. In addition to that, if a function is not returning anything, it returns undefined.

(В JS если мы не зададим значение переменной, то её значение будет "неопределённым"(undefined))

```js
let firstName;
console.log(firstName); // undefined
```

#### Null ("Пустой")

Null in JavaScript means an empty value.

("Пустой" (Null) в JS означает пустое значение.)

```js
let emptyValue = null;
```

#### Checking Data Types (Проверка типов данных)

To check the data type of a certain variable, we use the typeof operator.

(Чтобы проверить тип данных определённой переменной используется typeof оператор)

```
console.log(typeof "Pavel");   // string
console.log(typeof 3);         // number
console.log(typeof 3.14);      //number
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // object type
```

#### Comments (Комментарии)

Remember that commenting in JavaScript is similar to other programming languages. Comments are important in making your code more readable. There are two ways of commenting:

(Комментарии делают код более читабельным. Всего существует 2 способа комментирования:)

- Single line commenting (Однострочное комментирование)
- Multiline commenting (Многострочное комментирование)

```js
//console.log('Hello');

/*
let name = 'Pavel';
let age = 1000;
console.log(name, age);
*/
```

#### Variables

Variables are containers of data. Variables are used to store data in a memory location. When a variable is declared, a memory location is reserved. When a variable is assigned to a value (data), the memory space will be filled with that data. To declare a variable, we use var, let, or const keywords.

()

For a variable that changes at a different time, we use let. If the data does not change at all, we use const. For example, PI, country name, gravity do not change, and we can use const. We will not use var in this challenge and I don't recommend you to use it. It is error prone way of declaring variable it has lots of leak. We will talk more about var, let, and const in detail in other sections (scope). For now, the above explanation is enough.

()

A valid JavaScript variable name must follow the following rules:

("Годная" или "Действительная" переменная в JS должна соответствовать следующим правилам:)

- A JavaScript variable name should not begin with a number. (Не должна начинаться с числа)
- A JavaScript variable name does not allow special characters except dollar sign and underscore. (Не должна содержать специальных символов помимо "$" и "\_")
- A JavaScript variable name follows a camelCase convention. (Должна быть в "камелКейсе")
- A JavaScript variable name should not have space between words. (Не должна иметь пробелов)

```js
let firstName;
let lastName;
let country;
let city;
let capitalCity;
let age;
let isMarried;

let first_name;
let last_name;
let is_married;
let capital_city;

let num1;
let num_1;
let _num_1;
let $num1;
let year2020;
let year_2020;
```

(Для декларирования классов используется "двойной" CamelCase)

```js
class FirstPerson {}
```

Пример использования переменных:

```js
// Declaring different variables of different data types
let firstName = "Pavel"; // first name of a person
let lastName = "Nikitin"; // last name of a person
let country = "Russia"; // country
let city = "Moscow"; // capital city
let age = 1000; // age in years
let isMarried = false;

console.log(firstName, lastName, country, city, age, isMarried);
// Pavel Nikitin Russia Moscow 1000 false

// Declaring variables with number values (Переменные с числовыми значениями)
let age = 1000; // age in years
const gravity = 9.81; // earth gravity  in m/s2
const boilingPoint = 100; // water boiling point, temperature in °C
const PI = 3.14; // geometrical constant
console.log(gravity, boilingPoint, PI);
//9.81 100 3.14
```

Переменные могут быть объявлены через запятую:

```js
// Variables can also be declaring in one line separated by comma, however I recommend to use a seperate line to make code more readble
let firstName = "Pavel",
  secondName = "Nikitin",
  live = "Russia";
console.log(name, job, live);
//Pavel Nikitin Russia
```
