# JSON

JSON stands for JavaScript Object Notation.

The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text or string only.

JSON is a light weight data format for storing and transporting.

JSON is mostly used when data is sent from a server to a client.

JSON is an easier-to-use alternative to XML.

Example:

```json
{
  "users": [
    {
      "firstName": "Pavel",
      "lastName": "Nikitin",
      "age": 22,
      "email": "nikitin.pavel.163@gmail.com"
    },
    {
      "firstName": "Alex",
      "lastName": "James",
      "age": 25,
      "email": "alex@alex.com"
    },
    {
      "firstName": "Lidiya",
      "lastName": "Tekle",
      "age": 23,
      "email": "lidiya@lidiya.com"
    }
  ]
}
```

The above JSON example is not much different from a normal object.

The difference is the _key_ of a JSON object _should be with double quotes_ or _it should be a string_.

JavaScript Object and JSON are very similar that we can change JSON to Object and Object to JSON.

## Converting JSON to JavaScript Object

Mostly we fetch JSON data from HTTP response or from a file, but we can store the JSON as a string and we can change to Object for sake of demonstration.

In JavaScript the keyword JSON has parse() and stringify() methods.

When we want to change the JSON to an object we parse the JSON using JSON.parse().

When we want to change the object to JSON we use JSON.stringify().

```js
JSON.parse(json[, reviver])
// json or text, the data
// reviver is an optional callback function
/* JSON.parse(json, (key, value) => {

})
*/
```

```js
const usersText = `{
"users":[
  {
    "firstName": "Pavel",
    "lastName": "Nikitin",
    "age": 22,
    "email": "nikitin.pavel.163@gmail.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`;

const usersObj = JSON.parse(usersText, undefined, 4);
console.log(usersObj);
```

## Using a reviver function with JSON.parse()

To use the reviver function as a formatter, we put the keys we want to format.

```js
const usersText = `{
"users":[
  {
    "firstName": "Pavel",
    "lastName": "Nikitin",
    "age": 22,
    "email": "nikitin.pavel.163@gmail.com"
  },
  {
    "firstName": "Alex",
    "lastName": "James",
    "age": 25,
    "email": "alex@alex.com"
  },
  {
  "firstName": "Lidiya",
  "lastName": "Tekle",
  "age": 28,
  "email": "lidiya@lidiya.com"
  }
]
}`;

const usersObj = JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value == "string" && key != "email"
      ? value.toUpperCase()
      : value;
  return newValue;
});
console.log(usersObj);
```

## Converting Object to JSON

When we want to change the object to JSON we use JSON.stringify().

The stringify method takes one required parameter and two optional parameters.

The replacer is used as filter and the space is an indentations.

If we do not want to filter out any of the keys from the object we can just pass undefined.

```js
JSON.stringify(obj, replacer, space);
// replacer is used to filter out keys;
// space - number of spaces for indentation.
```

```js
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Node.js",
    ],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const txt = JSON.stringify(users, undefined, 4);
console.log(txt); // text means JSON because json is a string form of an object.
```

### Using a Filter Array with JSON.stringify()

The user object has long list of keys but we are interested only in few of them.

We put the keys we want to keep in array as show in the example and use it the place of the replacer.

```js
const user = {
  firstName: "Pavel",
  lastName: "Nikitin",
  country: "Russia",
  city: "Moscow",
  email: "nikitin.pavel.163@gmail.com",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Three.js",
  ],
  age: 22,
  isLoggedIn: false,
  points: 300,
};

const txt = JSON.stringify(
  user,
  ["firstName", "lastName", "country", "city", "age"],
  4
);
console.log(txt);

/*
{
    "firstName": "Pavel",
    "lastName": "Nikitin",
    "country": "Russia",
    "city": "Moscow",
    "age": 22
}
*/
```
