# Event Listeners

Common HTML events: onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload.

We can add event listener method to any DOM object.

We use addEventListener() method to listen different event types on HTML elements.

The addEventListener() method takes two arguments, an event _listener_ and a _callback_ function.

```js
selectedElement.addEventListener(
  "eventlistner",
  function (e) {
    // the activity you want to occur after the event will be in here
  }
);
// or

selectedElement.addEventListener("eventlistner", (e) => {
  // the activity you want to occur after the event will be in here
});
```

## Click

To attach an event listener to an element, first we select the element then we attach the addEventListener method.

The event listener takes _event type_ and _callback function_ as argument.

```js
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  console.log("e gives the event listener object:", e);
  console.log(
    "e.target gives the selected element: ",
    e.target
  );
  console.log(
    "e.target.textContent gives content of selected element: ",
    e.target.textContent
  );
});
```

An event can be also attached directly to the HTML element as inline script.

## OnClick

```html
<button onclick="clickMe()">Click Me</button>
<script>
  const clickMe = () => {
    alert("We can attach event on HTML element");
  };
</script>
```

## Double Click

```js
const button = document.querySelector("button");
button.addEventListener("dblclick", (e) => {
  console.log("e gives the event listener object:", e);
  console.log(
    "e.target gives the selected element: ",
    e.target
  );
  console.log(
    "e.target.textContent gives content of selected element: ",
    e.target.textContent
  );
});
```

## Mouse Enter

```js
const button = document.querySelector("button");
button.addEventListener("mouseenter", (e) => {
  console.log("e gives the event listener object:", e);
  console.log(
    "e.target gives the selected element: ",
    e.target
  );
  console.log(
    "e.target.textContent gives content of selected element: ",
    e.target.textContent
  );
});
```

- _click_ - when the element clicked
- _dblclick_ - when the element double clicked
- _mouseenter_ - when the mouse point enter to the element
- _mouseleave_ - when the mouse pointer leave the element
- _mousemove_ - when the mouse pointer move on the element
- _mouseover_ - when the mouse pointer move on the element
- _mouseout_ - when the mouse pointer out from the element
- _input_ - when value enter to input field
- _change_ - when value change on input field
- _blur_ - when the element is not focused
- _keydown_ - when a key is down
- _keyup_ - when a key is up
- _keypress_ - when we press any key
- _onload_ - when the browser has finished loading a page

## Getting Value from an input element

We usually fill forms and forms accept data.

Form fields are created using input HTML element.

Let us build a small application which allow us to calculate body mas index of a person using two input fields, one button and one p tag.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <h1>Body Mass Index Calculator</h1>

    <input
      type="text"
      id="mass"
      placeholder="Mass in Kilogram"
    />
    <input
      type="text"
      id="height"
      placeholder="Height in meters"
    />
    <button>Calculate BMI</button>

    <script>
      const mass = document.querySelector("#mass");
      const height = document.querySelector("#height");
      const button = document.querySelector("button");

      let bmi;
      button.addEventListener("click", () => {
        bmi = mass.value / height.value ** 2;
        alert(`your bmi is ${bmi.toFixed(2)}`);
        console.log(bmi);
      });
    </script>
  </body>
</html>
```

## Input event and change

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <h1>Data Binding using input or change event</h1>

    <input type="text" placeholder="say something" />
    <p></p>

    <script>
      const input = document.querySelector("input");
      const p = document.querySelector("p");

      input.addEventListener("input", (e) => {
        p.textContent = e.target.value;
      });
    </script>
  </body>
</html>
```

## Blur event

In contrast to input or change, the blur event occur when the input field is not on focus.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <h1>Giving feedback using blur event</h1>

    <input
      type="text"
      id="mass"
      placeholder="say something"
    />
    <p></p>

    <script>
      const input = document.querySelector("input");
      const p = document.querySelector("p");

      input.addEventListener("blur", (e) => {
        p.textContent = "Field is required";
        p.style.color = "red";
      });
    </script>
  </body>
</html>
```

## Keypress, Keydown, Keyup

We can access all the key numbers of the keyboard using different event listener types. Let us use keypress and get the keyCode of each keyboard keys.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <h1>Key events: Press any key</h1>

    <script>
      document.body.addEventListener("keypress", (e) => {
        alert(e.keyCode);
      });
    </script>
  </body>
</html>
```
