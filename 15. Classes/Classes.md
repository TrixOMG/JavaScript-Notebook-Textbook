# Classes

JavaScript is an object oriented programming language.

Everything in JavaScript is an object, with its properties and methods.

We create class to create an object.

A Class is like an object constructor, or a "blueprint" for creating objects.

We instantiate a class to create an object.

The class defines attributes and the behavior of the object, while the object, on the other hand, represents the class.

Once we create a class we can create object from it whenever we want.

_Creating an object from a class_ is called _class instantiation_.

_Object literal_ is a _singleton_.

If we want to get a similar object, we have to write it. However, class allows to create many objects. This helps to reduce amount of code and repetition of code.

## Defining Classes

To define a class in JavaScript we need the keyword class , the name of a class in _CamelCase_ and block code(two curly brackets). Let us create a class name Person.

```js
class Person {
  // code goes here
}
```

## Class Instantiation

Instantiation class means creating an object from a class. We need the keyword new and we call the name of the class after the word new.

```js
class Person {
  // code goes here
}
const person = new Person();
console.log(person); // Person {}
```

## Class Constructor

The constructor is a builtin function which allows as to create a blueprint for our object.

The constructor function starts with a keyword _constructor_ followed by a parenthesis.

Inside the parenthesis we pass the properties of the object as parameter.

We use the this keyword to attach the constructor parameters with the class.

```js
class Person {
  constructor(firstName, lastName) {
    console.log(this); // Check the output from here
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person = new Person();

console.log(person); // Person {firstName: undefined, lastName:undefined}
```

All the keys of the object are undefined. When ever we instantiate we should pass the value of the properties. Let us pass value at this time when we instantiate the class.

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("Pavel", "Nikitin");

console.log(person1); // Person {firstName: "Pavel", lastName: "Nikitin"}
```

Many objects using Person Class:

```js
class Person {
  constructor(firstName, lastName) {
    console.log(this); // Check the output from here
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("Pavel", "Nikitin");
const person2 = new Person("Brook", "Johnes");
const person3 = new Person("Abraham", "Linkoln");

console.log(person1);
console.log(person2);
console.log(person3);
/*
Person {firstName: "Asabeneh", lastName: "Yetayeh"}
Person {firstName: "Lidiya", lastName: "Tekle"}
Person {firstName: "Abraham", lastName: "Yetayeh"}
*/
```

Adding more properties:

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}

const person1 = new Person(
  "Pavel",
  "Nikitin",
  22,
  "Russia",
  "Moscow"
);

console.log(person1);
```

## Default values with constructor

```js
class Person {
  constructor(
    firstName = "Pavel",
    lastName = "Nikitin",
    age = 250,
    country = "Russia",
    city = "Moscow"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}

const person1 = new Person(); // it will take the default values
const person2 = new Person(
  "Lidiya",
  "Tekle",
  28,
  "Finland",
  "Espoo"
);

console.log(person1);
console.log(person2);
```

## Class methods

In a class we can create class methods.

Methods are JavaScript functions inside the class.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

const person1 = new Person(
  "Pavel",
  "Nikitin",
  22,
  "Russia",
  "Moscow"
);

const person2 = new Person(
  "Lidiya",
  "Tekle",
  28,
  "Finland",
  "Espoo"
);

console.log(person1.getFullName());
console.log(person2.getFullName());
```

## Properties with initial value

When we create a class for some properties we may have an initial value.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0; // here
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}
```

## getter

The get method allow us to access value from the object.

We write a get method using keyword get followed by a function.

Instead of accessing properties directly from the object we use getter to get the value.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
}

const person1 = new Person(
  "Pavel",
  "Nikitin",
  22,
  "Russia",
  "Moscow"
);
const person2 = new Person(
  "Lidiya",
  "Tekle",
  28,
  "Finland",
  "Espoo"
);

console.log(person1.getScore); // We do not need parenthesis to call a getter method
console.log(person2.getScore);

console.log(person1.getSkills);
console.log(person2.getSkills);
```

## setter

The setter method allow us to modify the value of certain properties.

We write a setter method using keyword set followed by a function.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
}

const person1 = new Person(
  "Pavel",
  "Nikitin",
  22,
  "Russia",
  "Moscow"
);
const person2 = new Person(
  "Lidiya",
  "Tekle",
  28,
  "Finland",
  "Espoo"
);

person1.setScore = 1;
person1.setSkill = "HTML";
person1.setSkill = "CSS";
person1.setSkill = "JavaScript";

person2.setScore = 1;
person2.setSkill = "Planning";
person2.setSkill = "Managing";
person2.setSkill = "Organizing";

console.log(person1.score);
console.log(person2.score);

console.log(person1.skills);
console.log(person2.skills);
```

Regular method added:

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
  getPersonInfo() {
    // this method was added
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills
        .slice(0, this.skills.length - 1)
        .join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;
    let formattedSkills = skills
      ? `He knows ${skills}`
      : "";

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
}

const person1 = new Person(
  "Pavel",
  "Nikitin",
  22,
  "Russia",
  "Moscow"
);

const person2 = new Person(
  "Lidiya",
  "Tekle",
  28,
  "Finland",
  "Espoo"
);
const person3 = new Person(
  "John",
  "Doe",
  50,
  "Mars",
  "Mars city"
);

person1.setScore = 1;
person1.setSkill = "HTML";
person1.setSkill = "CSS";
person1.setSkill = "JavaScript";

person2.setScore = 1;
person2.setSkill = "Planning";
person2.setSkill = "Managing";
person2.setSkill = "Organizing";

console.log(person1.getScore);
console.log(person2.getScore);

console.log(person1.getSkills);
console.log(person2.getSkills);
console.log(person3.getSkills);

console.log(person1.getPersonInfo());
console.log(person2.getPersonInfo());
console.log(person3.getPersonInfo());
```

## Static method

The static keyword defines a static method for a class.

Static methods are not called on instances of the class.

Instead, they are called on the class itself.

These are often utility functions, such as functions to create or clone objects.

An example of static method is Date.now().

The now method is called directly from the class.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills
        .slice(0, this.skills.length - 1)
        .join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;

    let formattedSkills = skills
      ? `He knows ${skills}`
      : "";

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
  static favoriteSkill() {
    const skills = [
      "HTML",
      "CSS",
      "JS",
      "React",
      "Python",
      "Node",
    ];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }
  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let dateMonthYear = date + "." + month + "." + year;
    let time = hours + ":" + minutes;
    let fullTime = dateMonthYear + " " + time;
    return fullTime;
  }
}

console.log(Person.favoriteSkill()); // called from class itself
console.log(Person.showDateTime());
```

The static methods are methods which can be used as utility functions.

## Inheritance

Using inheritance we can access all the properties and the methods of the parent class. This reduces repetition of code.

```js
class ChildClassName extends {
  //code goes here
}

class Student extends Person {
  saySomething() {
    console.log('I am a child of the person class')
  }
}

const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
console.log(s1)
console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())
```

## Overriding methods

We can customize the parent methods, we can add additional properties to a child class.

If we want to customize, the methods and if we want to add extra properties, we need to use the constructor function the child class too.

Inside the constructor function we call the super() function to access all the properties from the parent class.

If the same method name used in the child class, the parent method will be overridden.

```js
class Student extends Person {
  constructor(
    firstName,
    lastName,
    age,
    country,
    city,
    gender
  ) {
    super(firstName, lastName, age, country, city);
    this.gender = gender;
  }

  saySomething() {
    console.log("I am a child of the person class");
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills
        .slice(0, this.skills.length - 1)
        .join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;

    let formattedSkills = skills
      ? `He knows ${skills}`
      : "";
    let pronoun = this.gender == "Male" ? "He" : "She";

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
}

const s1 = new Student(
  "Pavel",
  "Nikitin",
  22,
  "Russia",
  "Moscow",
  "Male"
);
const s2 = new Student(
  "Lidiya",
  "Tekle",
  28,
  "Finland",
  "Helsinki",
  "Female"
);
s1.setScore = 1;
s1.setSkill = "HTML";
s1.setSkill = "CSS";
s1.setSkill = "JavaScript";

s2.setScore = 1;
s2.setSkill = "Planning";
s2.setSkill = "Managing";
s2.setSkill = "Organizing";

console.log(s1);

console.log(s1.saySomething());
console.log(s1.getFullName());
console.log(s1.getPersonInfo());

console.log(s2.saySomething());
console.log(s2.getFullName());
console.log(s2.getPersonInfo());
```
