# Arrays

## Empty array

```js
const arr = Array();
// or
const arr = [];
```

## Creating array using split

```js
const arr = "JavaScript".split("");
```

(Члены массивов можно (и нужно) модифицирвовать)

## Methods to manipulate array

### Array Constructor

```js
const arr = Array(); // creates an an empty array
console.log(arr);

const eightEmptyValues = Array(8); // it creates eight empty values
console.log(eightEmptyValues); // [empty x 8]
```

### Creating static values with fill

```js
const arr = Array(); // creates an an empty array
console.log(arr);

const eightXvalues = Array(8).fill("X"); // it creates eight element values filled with 'X'
console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0); // it creates eight element values filled with '0'
console.log(eight0values); // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4); // it creates 4 element values filled with '4'
console.log(four4values); // [4, 4, 4, 4]
```

### Concat

```js
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList); // [1, 2, 3, 4, 5, 6]
```

### indexOf

```js
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.indexOf(5)); // -> 4
console.log(numbers.indexOf(0)); // -> -1
console.log(numbers.indexOf(1)); // -> 0
console.log(numbers.indexOf(6)); // -> -1
```

(Если возвращает -1, то значит, что элемента нет в массиве)

### lastIndexOf

It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

```js
const numbers = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(numbers.lastIndexOf(2)); // 7
console.log(numbers.lastIndexOf(0)); // -1
console.log(numbers.lastIndexOf(1)); //  6
console.log(numbers.lastIndexOf(4)); //  3
console.log(numbers.lastIndexOf(6)); // -1
```

### includes

Returns true/false

```js
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(5)); // true
console.log(numbers.includes(0)); // false
console.log(numbers.includes(1)); // true
console.log(numbers.includes(6)); // false

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // List of web technologies

console.log(webTechs.includes("Node")); // true
console.log(webTechs.includes("C")); // false
```

### isArray

To check if data type is an array

```js
const numbers = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers)); // true

const number = 100;
console.log(Array.isArray(number)); // false
```

### toString

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString()); // 1,2,3,4,5

const names = ["Pavel", "John", "Martha", "Steve"];
console.log(names.toString()); // Pavel,John,Martha,Steve
```

### join

It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string.
By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.

```js
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // List of web technologies

console.log(webTechs.join()); // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs.join(" # ")); // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"
```

### slice

To cut out a multiple items in range.
It takes two parameters: starting and ending position.
It doesn't include the ending position.

Will not mutate array.

```js
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.slice()); // -> it copies all  item
console.log(numbers.slice(0)); // -> it copies all  item
console.log(numbers.slice(0, numbers.length)); // it copies all  item
console.log(numbers.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position
```

### splice

It takes three parameters: Starting position, number of times to be removed and number of items to be added.

Will mutate array.

```js
const numbers = [1, 2, 3, 4, 5];
numbers.splice();
console.log(numbers); // -> remove all items

const numbers = [1, 2, 3, 4, 5];
numbers.splice(0, 1);
console.log(numbers); // remove the first item

const numbers = [1, 2, 3, 4, 5, 6];
numbers.splice(3, 3, 7, 8, 9);
console.log(numbers.splice(3, 3, 7, 8, 9)); // -> [1, 2, 3, 7, 8, 9]
//it removes three items and replace three items
```

### push

Adding item in the end.

```js
// syntax
const arr = ["item1", "item2", "item3"];
arr.push("new item");
console.log(arr); // ['item1', 'item2','item3','new item']
```

### pop

Removing item in the end.

```js
const numbers = [1, 2, 3, 4, 5];
numbers.pop(); // -> remove one item from the end
console.log(numbers); // -> [1,2,3,4]
```

### shift

Removing item in the beginning.

```js
const numbers = [1, 2, 3, 4, 5];
numbers.shift(); // -> remove one item from the beginning
console.log(numbers); // -> [2,3,4,5]
```

### unshift

Adding array element in the beginning of the array

```js
const numbers = [1, 2, 3, 4, 5];
numbers.unshift(0); // -> add one item from the beginning
console.log(numbers); // -> [0,1,2,3,4,5]
```

### reverce

Reverce the order of an array.

```js
const numbers = [1, 2, 3, 4, 5];
numbers.reverse(); // -> reverse array order
console.log(numbers); // [5, 4, 3, 2, 1]

numbers.reverse();
console.log(numbers); // [1, 2, 3, 4, 5]
```

### every

Определяет, соответствуют ли все члены массива заданному условию.

```js
// включает ли в себя массив все члены другого массива
function isArrayIncludesMultipleValues(array, values) {
  return values.every((value) => array.includes(value));
}

const arr = [1, 2, 3, 4, 5];
console.log(arr.every((member) => member > 5)); // false
```
