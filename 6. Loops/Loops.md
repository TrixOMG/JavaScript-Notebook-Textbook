# Loops

## for

```js
for(initialization, condition, increment/decrement){
  // code goes here
}
```

## while

```js
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

// 0 1 2 3 4 5
```

## do while

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 5);

// 0 1 2 3 4 5
```

## for of

```js
for (const element of arr) {
  // code goes here
}

const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}

// 1 2 3 4 5
```

## break

Используется для прерывания цикла

```js
for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// 0 1 2
```

## continue

Используется для пропуска текущей итерации цикла

```js
for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// 0 1 2 4 5
```
