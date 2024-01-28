# Promises

## Promise

A Promise is a way to handle asynchronous operations in JavaScript.

It allows handlers with an asynchronous actions eventual success value or failure reason.

This lets asynchronous methods return values like synchronous methods:

instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation completed successfully.
- rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value, or rejected with a reason (error).

When either of these options happens, the associated handlers queued up by a promise's then method are called.

(If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.)

As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.

## Callbacks

(Callbacks and promises have differences)

```js
//Callback
const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback("It did not go well", skills);
  }, 2000);
};

const callback = (err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
};

doSomething(callback);

// after 2 seconds it will print
// It did not go well
```

```js
const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback(false, skills);
  }, 2000);
};

doSomething((err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
});

// after 2 seconds it will print the skills
// ["HTML", "CSS", "JS"]
```

### Promise constructor

We can create a new promise using the keyword _new_ followed by the word _Promise_ and _followed by a parenthesis_.

Inside the parenthesis, it takes a _callback function_.

The promise _callback function_ has _two parameters_ which are the _resolve_ and _reject_ functions.

```js
// syntax
const promise = new Promise((resolve, reject) => {
  resolve("success");
  reject("failure");
});
```

```js
// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject("Something wrong has happened");
    }
  }, 2000);
});

doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

// ["HTML", "CSS", "JS"]
```

```js
// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.includes("Node")) {
      resolve("fullstack developer");
    } else {
      reject("Something wrong has happened");
    }
  }, 2000);
});

doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.error(error));

// Something wrong has happened
```

## Fetch API

The Fetch API provides an interface for fetching resources (including across the network).

It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

We will use fetch to request url and APIS.

In addition to that let us demonstrate use case of promises in accessing network resources using the fetch API.

```js
const url = "https://restcountries.com/v2/all"; // countries api
fetch(url)
  .then((response) => response.json()) // accessing the API data as JSON
  .then((data) => {
    // getting the data
    console.log(data);
  })
  .catch((error) => console.error(error)); // handling error if something wrong happens
```

## Async and Await

Async and await is an elegant way to handle promises. It is easy to understand and it clean to write.

```js
const square = async function (n) {
  return n * n;
};

square(2); // Promise {<resolved>: 4}
```

The word _async_ in front of a function means that function will return a _promise_.

The above square function instead of a value it returns a promise.

To access the value from the promise, we will use the keyword await.

```js
const square = async function (n) {
  return n * n;
};
const value = await square(2);
console.log(value); // 4
```

Now, as you can see from the above example writing async in front of a function create a promise and to get the value from a promise we use await.

Async and await go together, one can not exist without the other.

- promise

```js
const url = "https://restcountries.com/v2/all";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error));
```

- async and await

```js
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
fetchData();
```