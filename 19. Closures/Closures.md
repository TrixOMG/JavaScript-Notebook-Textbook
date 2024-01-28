# Closures

# Closure

JavaScript allows writing function inside an outer function.

We can write as many inner functions as we want.

If inner function access the variables of outer function then it is called closure.

```js
function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    return count;
  }

  return innerFunction;
}
const innerFunc = outerFunction();

console.log(innerFunc()); // 1
console.log(innerFunc()); // 2
console.log(innerFunc()); // 3
```

JavaScript has first-class functions, which means it is possible for _outerFunction_ to return a reference to _innerFunction_ when outerFunction is executed.

Это значит, что когда мы вызываем _outerFunction_ то она сразу возвращает _innerFunction_, пропуская своё иное "содержимое".

Значит мы всегда как бы сразу вызываем внутреннюю функцию.

При этом внутренняя функция может пользоваться переменными, что "выше" по скоупу, при этом переменные сохраняют свои значения от вызова к вызову и не сбрасываются.

More Examples:

```js
function outerFunction() {
  let count = 0;
  function plusOne() {
    count++;
    return count;
  }
  function minusOne() {
    count--;
    return count;
  }

  return {
    plusOne: plusOne(),
    minusOne: minusOne(),
  };
}
const innerFuncs = outerFunction();

console.log(innerFuncs.plusOne); // 1
console.log(innerFuncs.minusOne); // 0
```

Функция обязательно должна вызываться через переменную, инициализированную ею. (строки 55-58)

Иначе ничего работать не будет.

## Пример с несколькими функциями в closure:

Только при таком написании получается множество раз вызывать одну и ту же функцию, при этом меняя значения "внутренней" переменной.

```js
// Create closure with has 3 inner functions
const mathOperations = () => {
  let number = 0;

  return {
    plusOne: function plusOne() {
      number++;
      return number;
    },

    minusOne: function minusOne() {
      number--;
      return number;
    },

    squared: function squared() {
      number = number ** 2;
      return number;
    },
  };
};

const doSomeMath = mathOperations();

console.log(doSomeMath.plusOne()); // 1
console.log(doSomeMath.plusOne()); // 2
console.log(doSomeMath.squared()); // 4
console.log(doSomeMath.minusOne()); // 3
```

Похожим образом можно "имитировать" приватные методы, не возвращая при этом значения:

```js
// Create closure with has 3 inner functions
const mathOperations = () => {
  let number = 0;

  return {
    plusOne: function plusOne() {
      number++;
    },

    minusOne: function minusOne() {
      number--;
    },

    squared: function squared() {
      number = number ** 2;
    },
    getCount: function getCount() {
      return number;
    },
  };
};

const doSomeMath = mathOperations();

console.log(doSomeMath.plusOne()); // undefined
console.log(doSomeMath.plusOne()); // undefined
console.log(doSomeMath.squared()); // undefined
console.log(doSomeMath.minusOne()); // undefined
console.log(doSomeMath.getCount()); // 3
```

Вместо прописывания заново имён функций, можно использовать анонимные функции, будет работать точно так же.
