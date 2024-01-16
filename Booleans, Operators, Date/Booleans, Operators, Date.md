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

### alert()
