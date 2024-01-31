# DOM Manipulaiton

## Creating an Element

To create an HTML element we use tag name.

Creating an HTML element using JavaScript is very simple and straight forward.

We use the method document.createElement().

The method takes an HTML element tag name as a string parameter.

```js
// syntax
document.createElement("tagname");
```

## Creating Elements

To create multiple elements we should use loop.

Using loop we can create as many HTML elements as we want.

After we create the element we can assign value to the different properties of the HTML object.

```js
let title;
for (let i = 0; i < 3; i++) {
  title = document.createElement("h1");
  title.className = "title";
  title.style.fontSize = "24px";
  title.textContent = i;
  console.log(title);
}
```

### Appending child to a parent element

To see a created element on the HTML document we should append it to the parent as a child element.

We can access the HTML document body using document.body.

The document.body support the appendChild() method.

```js
// creating multiple elements and appending to parent element
let title;
for (let i = 0; i < 3; i++) {
  title = document.createElement("h1");
  title.className = "title";
  title.style.fontSize = "24px";
  title.textContent = i;
  document.body.appendChild(title);
}
```

### Removing a child element from a parent node

After creating an HTML, we may want to remove element or elements and we can use the removeChild() method.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>
  <body>
    <h1>Removing child Node</h1>
    <ul>
      <li>30DaysOfPython Challenge</li>
      <li>30DaysOfJavaScript Challenge</li>
      <li>30DaysOfReact Challenge</li>
      <li>30DaysOfFullStack Challenge</li>
      <li>30DaysOfDataAnalysis Challenge</li>
      <li>30DaysOfReactNative Challenge</li>
      <li>30DaysOfMachineLearning Challenge</li>
    </ul>

    <script>
      const ul = document.querySelector("ul");
      const lists = document.querySelectorAll("li");
      for (const list of lists) {
        ul.removeChild(list);
      }
    </script>
  </body>
</html>
```

As we have see in the previous section there is a better way to eliminate all the inner HTML elements or the children of a parent element using the method innerHTML properties.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>
  <body>
    <h1>Removing child Node</h1>
    <ul>
      <li>30DaysOfPython Challenge</li>
      <li>30DaysOfJavaScript Challenge</li>
      <li>30DaysOfReact Challenge</li>
      <li>30DaysOfFullStack Challenge</li>
      <li>30DaysOfDataAnalysis Challenge</li>
      <li>30DaysOfReactNative Challenge</li>
      <li>30DaysOfMachineLearning Challenge</li>
    </ul>

    <script>
      const ul = document.querySelector("ul");
      ul.innerHTML = "";
    </script>
  </body>
</html>
```
