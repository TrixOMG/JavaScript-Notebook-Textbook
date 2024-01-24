# Sets and Maps

## Set

Set is a collection of unique elements. Set can only contains unique elements.

```js
const companies = new Set();
console.log(companies); // Set(0) {}
```

### Set from Array

```js
const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const setOfLanguages = new Set(languages);
onsole.log(setOfLanguages); // Set(4) {"English", "Finnish", "French", "Spanish"}
```

### Iteration through Set elements

```js
for (const lang of setOfLanguages) {
  console.log(lang);
}

// English
// Finnish
// French
// Spanish
```

### Adding element to a Set

```js
const companies = new Set(); // creating an empty set
console.log(companies.size); // 0

companies.add("Google"); // add element to the set
companies.add("Facebook");
companies.add("Amazon");
companies.add("Oracle");
companies.add("Microsoft");
console.log(companies.size); // 5 elements in the set
console.log(companies); // Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}
```

### Deleting Set element

```js
console.log(companies.delete("Google"));
console.log(companies.size); // 4 elements left in the set
```

### Checking if Set has an element

```js
console.log(companies.has("Apple")); // false
console.log(companies.has("Facebook")); // true
```

### Clearing Set

```js
companies.clear();
console.log(companies); // Set(0) {}
```

### Example of Use

```js
const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];
const langSet = new Set(languages);
console.log(langSet); // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size); // 4

const counts = [];
const count = {};

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l);
  console.log(filteredLang); // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length });
}
console.log(counts);
/*
[
  { lang: 'English', count: 3 },
  { lang: 'Finnish', count: 1 },
  { lang: 'French', count: 2 },
  { lang: 'Spanish', count: 1 },
]
*/
```





