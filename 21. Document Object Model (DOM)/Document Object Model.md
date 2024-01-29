# Document Object Model (DOM)

HTML document is structured as a JavaScript Object.

Every HTML element has a different properties which can help to manipulate it.

It is possible to get, create, append or remove HTML elements using JavaScript.

Selecting HTML element using JavaScript is similar to selecting using CSS.

To select an HTML element, we use _tag name_, _id_, _class name_ or other attributes.

## Getting element

We can access already created element or elements using JavaScript.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Document Object Model</title>
  </head>
  <body>
    <h1 class="title" id="first-title">First Title</h1>
    <h2 class="title" id="second-title">Second Title</h2>
    <h2 class="title" id="third-title">Third Title</h2>
    <h2 class="title" id="fourth-title">Fourth Title</h2>
  </body>
</html>
```

### Getting Elements by tag name

getElementsByTagName():takes a tag name as a string parameter and this method returns an HTMLCollection object.

An HTMLCollection is an array like object of HTML elements.

The length property provides the size of the collection.

Whenever we use this method we can access the individual elements using index or after loop through each individual items.

An HTMLCollection does not support all array methods therefore we should use regular for loop instead of forEach.

```js
document.getElementsByTagName("tagnme");
```

```js
const allTitles = document.getElementsByTagName("h2");

console.log(allTitles); //HTMLCollection(3)
console.log(allTitles.length); // 3

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]); // prints each element in the HTMLCollection
}
```

### Getting elements by class name

getElementsByClassName() method returns an HTMLCollection object.

An HTMLCollection is an array like list of HTML elements.

The length property provides the size of the collection.

It is possible to loop through all the HTMLCollection elements. See the example below

```js
document.getElementsByClassName("classname");
```

```js
const allTitles = document.getElementsByClassName("title");

console.log(allTitles); //HTMLCollection
console.log(allTitles.length); // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]); // prints each element in the HTMLCollection
}
```

### Getting an element by id

getElementById() targets a single HTML element. We pass the id without # as an argument.

```js
document.getElementById("id");
```

```js
let firstTitle = document.getElementById("first-title");
console.log(firstTitle);
```

### Getting elements by using querySelector methods

The document.querySelector method can select an HTML element or HTML elements by tag name, by id or by class name.

_querySelector_: can be used to select HTML element by its tag name, id or class.

If the tag name is used it selects only the first element.

```js
let firstTitle = document.querySelector("h1"); // select the first available h1 element
let firstTitle = document.querySelector("#first-title"); // select id with first-title
let firstTitle = document.querySelector(".title"); // select the first available element with class title
```

_querySelectorAll_: can be used to select html elements by its tag name or class.

It returns a nodeList which is an array like object which supports array methods.

We can use for loop or forEach to loop through each nodeList elements.

```js
const allTitles = document.querySelectorAll('h2') # selects all the available h2 elements in the page

console.log(allTitles.length) // 3
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i])
}

allTitles.forEach(title => console.log(title))
const allTitles = document.querySelectorAll('.title') // the same goes for selecting using class
```

## Adding attribute

An attribute is added in the opening tag of HTML which gives additional information about the element.

Common HTML attributes: id, class, src, style, href,disabled, title, alt.

```js
const titles = document.querySelectorAll("h2");
titles[3].className = "title";
titles[3].id = "fourth-title";
```

### Adding attribute using setAttribute

The setAttribute() method set any html attribute.

It takes two parameters the type of the attribute and the name of the attribute.

```js
const titles = document.querySelectorAll("h2");
titles[3].setAttribute("class", "title");
titles[3].setAttribute("id", "fourth-title");
```

### Adding attribute without setAttribute

We can use normal object setting method to set an attribute but this can not work for all elements.

Some attributes are DOM object property and they can be set directly.

```js
//another way to setting an attribute
titles[3].className = "title";
titles[3].id = "fourth-title";
```

### Adding class using classList

The class list method is a good method to append additional class.

It does not override the original class if a class exists rather it adds additional class for the element.

```js
//another way to setting an attribute: append the class, doesn't override
titles[3].classList.add("title", "header-title");
```

### Removing class using remove

Similar to adding we can also remove class from an element.

We can remove a specific class from an element.

```js
//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.remove("title", "header-title");
```

## Adding Text to HTML element

An HTML is a build block of an opening tag, a closing tag and a text content. We can add a text content using the property _textContent_ or _innerHTML_.

### Adding Text content using textContent

The textContent property is used to add text to an HTML element.

```js
const titles = document.querySelectorAll("h1");
titles[3].textContent = "Fourth Title";
```

### Adding Text Content using innerHTML

Most people get confused between textContent and innerHTML. textContent is meant to add text to an HTML element, however innerHTML can add a text or HTML element or elements as a child.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>DOM</title>
  </head>
  <body>
    <div class="wrapper">
      <h1>Asabeneh Yetayeh challenges in 2020</h1>
      <h2>30DaysOfJavaScript Challenge</h2>
      <ul></ul>
    </div>
    <script>
      const lists = `
    <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`;
      const ul = document.querySelector("ul");
      ul.innerHTML = lists;
    </script>
  </body>
</html>
```

## Adding style

We can add any CSS property to an HTML-element:

```js
const titles = document.querySelectorAll("h2");
titles.forEach((title, i) => {
  title.style.fontSize = "24px"; // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.backgroundColor = "green";
  } else {
    title.style.backgroundColor = "red";
  }
});
```
