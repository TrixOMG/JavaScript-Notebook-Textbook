# Conditionals (Условные операторы)

## If Else

```js
// syntax
if (condition) {
  // this part of code runs for truthy condition
} else {
  // this part of code runs for false condition
}
```

## Switch

```js
switch (caseValue) {
  case 1:
    // code
    break;
  case 2:
    // code
    break;
  case 3:
    // code
    break;
  default:
  // code
}
```

## Ternary Operators (Тернарные операторы)

```js
condition ? "code, if condition is true" : "code, if condition is false";

let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
```
