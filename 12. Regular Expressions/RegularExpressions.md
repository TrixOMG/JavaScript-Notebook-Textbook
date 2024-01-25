# Regular Expressions

A regular expression or RegExp is a small programming language that helps to find pattern in data.
A RegExp can be used to check if some pattern exists in a different data types.

To use RegExp in JavaScript either we use RegExp constructor or we can declare a RegExp pattern using two forward slashes followed by a flag.

We can create a pattern in two ways.

To declare a string we use a single quote, double quote a backtick to declare a regular expression we use two forward slashes and an optional flag.

The flag could be g, i, m, s, u or y.

## RegExp parameters

A regular expression takes two parameters. One required _search pattern_ and an _optional flag_.

### Pattern

A pattern could be a text or any form of pattern which some sort of similarity.

### Flags

Flags are optional parameters in a regular expression which determine the type of searching.

Some of the flags:

- g: a global flag which means looking for a pattern in whole text
- i: case insensitive flag(it searches for both lowercase and uppercase)
- m: multiline

## Creating a pattern with RegExp Constructor

Declaring regular expression without global flag and case insensitive flag.

```js
// without flag
let pattern = "love";
let regEx = new RegExp(pattern);
```

Declaring regular expression with global flag and case insensitive flag.

```js
let pattern = "love";
let flag = "gi";
let regEx = new RegExp(pattern, flag);
```

Declaring a regex pattern using RegExp object.

Writing the pattern and the flag inside the RegExp constructor

```js
let regEx = new RegExp("love", "gi");
```

## Creating a pattern without RegExp Constructor

Declaring regular expression with global flag and case insensitive flag.

```js
let regEx = /love/gi;
```

## RegExp Object Methods

### Testing for a match

test(): Returns true or false.

```js
const str = "I love JavaScript";
const pattern = /love/;
const result = pattern.test(str);
console.log(result); // true
```

### Array containing all of the match

_match()_: Returns an array containing all of the matches, including capturing groups, or null if no match is found.

If we do not use a global flag, match() returns an array containing the pattern, index, input and group.

```js
const str = "I love JavaScript";
const pattern = /love/;
const result = str.match(pattern);
console.log(result); // ["love", index: 2, input: "I love JavaScript", groups: undefined]
```

```js
const str = "I love JavaScript";
const pattern = /love/g;
const result = str.match(pattern);
console.log(result); // ["love"]
```

_search()_: Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

```js
const str = "I love JavaScript";
const pattern = /love/g;
const result = str.search(pattern);
onsole.log(result); // 2
```

### Replacing a substring

_replace()_: Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

```js
const txt =
  "Python is the most beautiful language that a human being has ever created.\
I recommend python for a first programming language";

matchReplaced = txt.replace(/Python|python/, "JavaScript");
console.log(matchReplaced);
// без флага "g" выполнит замену только в первом найденном месте
// с ним, заменит все "находки"
```

## One or more times (+)

```js
const pattern = /\d+/g; // d is a special character which means digits
const txt =
  "This regular expression example was made in January 25,  2024.";
const matches = txt.match(pattern);
console.log(matches); // ["25", "2024"], this is not what we want
```

## Period(.)

```js
const pattern = /[a]./g; // this square bracket means a and . means any character except new line
const txt = "Apple and banana are fruits";
const matches = txt.match(pattern);

console.log(matches); // ["an", "an", "an", "a ", "ar"]
```

## Zero or more times(\*)

The pattern may not occur or it can occur many times.

```js
const pattern = /[a].*/g; //. any character, + any character one or more times
const txt = "Apple and banana are fruits";
const matches = txt.match(pattern);

console.log(matches); // ['and banana are fruits']
```

## Zero or one time(?)

The pattern may not occur or it may occur once.

```js
const txt =
  "I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.";
const pattern = /[Ee]-?mail/g; // ? means optional
matches = txt.match(pattern);

console.log(matches); // ["e-mail", "email", "Email", "E-mail"]
```

## Quantifier in RegExp

We can specify the length of the substring we look for in a text using a curly bracket.

```js
const txt =
  "This regular expression example was made in December 6,  2019.";
const pattern = /\\b\w{4}\b/g; //  exactly four character words
const matches = txt.match(pattern);
console.log(matches); //['This', 'made', '2019']
```

```js
const txt =
  "This regular expression example was made in December 6,  2019.";
const pattern = /\d{4}/g; // a number and exactly four digits
const matches = txt.match(pattern);
console.log(matches); // ['2019']
```

```js
const txt =
  "This regular expression example was made in December 6,  2019.";
const pattern = /\d{1,4}/g; // 1 to 4
const matches = txt.match(pattern);
console.log(matches); // ['6', '2019']
```

## Cart ^

- Starts with

```js
const txt =
  "This regular expression example was made in December 6,  2019.";
const pattern = /^This/; // ^ means starts with
const matches = txt.match(pattern);
console.log(matches); // ['This']
```

- Negation

```js
const txt =
  "This regular expression example was made in December 6,  2019.";
const pattern = /[^A-Za-z,. ]+/g; // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const matches = txt.match(pattern);
console.log(matches); // ["6", "2019"]
```

## Exact Match

It should have ^ starting and $ which is an end.

```js
let pattern = /^[A-Z][a-z]{3,12}$/;
let name = "Asabeneh";
let result = pattern.test(name);

console.log(result); // true
```
