// Theory START

// a = "JavaScript"; // declaring a variable without let or const make it available in window object and this found anywhere

// b = 10; // this is a global scope variable and found in the window object
// function letsLearnScope() {
//   console.log(a, b);
//   if (true) {
//     console.log(a, b);
//   }
// }
// console.log(a, b); // accessible

// letsLearnScope();

const person = {
  firstName: "Pavel",
  lastName: "Nikitin",
  age: 22,
  country: "Russia",
  city: "Moscow",
  skills: [
    "HTML",
    "CSS",
    "TailwindCSS",
    "JavaScript",
    "React",
    "Node",
    "Three.js",
  ],
  address: {
    street: "Ismailova",
    pobox: "123123",
    city: "Moscow",
  },
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const copyPerson = Object.assign({}, person);
console.log(copyPerson);

const keys = Object.keys(copyPerson);
console.log(keys); //['firstName', 'age', 'country','city', 'skills', 'getPersonInfo']
const address = Object.keys(copyPerson.address);
console.log(address); //['street', 'pobox', 'city']

const values = Object.values(copyPerson);
console.log(values);

const entries = Object.entries(copyPerson);
console.log(entries);

console.log(copyPerson.hasOwnProperty("firstName"));
console.log(copyPerson.hasOwnProperty("score"));

// Theory END

console.log("EXERCISES:");

// const dog = {};

// console.log(dog);

const dog = {
  name: "Bill",
  legs: 4,
  color: "brown",
  bark: function () {
    return "woof woof";
  },
};

dog.breed = "Labrador";
dog.getDogInfo = function () {
  return `My dog's name is ${this.name} and he has ${this.legs} legs and colored ${this.color}. His breed is ${this.breed}`;
};

console.log(dog);
console.log(dog.bark());

// find user with most skills

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

const findUserWithMostSkills = (usersObject) => {
  let userWithMostSkills = "";
  let maximumSkills = 0;

  for (let user in usersObject) {
    if (usersObject[user].skills.length > maximumSkills) {
      maximumSkills = usersObject[user].skills.length;
      userWithMostSkills = user;
    }
  }
  return {
    userWithMostSkills: userWithMostSkills,
    maximumSkills: maximumSkills,
  };
};

console.log(
  findUserWithMostSkills(users).userWithMostSkills
);

// Count logged in users

const countLoggedInUsers = (usersObject) => {
  let count = 0;
  for (userName in usersObject) {
    if (usersObject[userName].isLoggedIn === true) {
      count++;
    }
  }
  return count;
};

console.log(countLoggedInUsers(users));

// Count users having greater than or equal to 50 points from the following object.

const countUsersWithManyPoints = (usersObject) => {
  let count = 0;
  const pointThreshold = 50;

  for (userName in usersObject) {
    if (usersObject[userName].points >= pointThreshold) {
      count++;
    }
  }
  return count;
};

console.log(countLoggedInUsers(users));

// Find people who are MERN stack developer from the users object
function isArrayIncludesMultipleValues(array, values) {
  return values.every((value) => array.includes(value));
}

const countMERNDevs = (usersObject) => {
  let count = 0;
  let valuesSearchingFor = [
    "MongoDB",
    "Express",
    "React",
    "Node",
  ];

  for (userName in usersObject) {
    if (
      isArrayIncludesMultipleValues(
        usersObject[userName].skills,
        valuesSearchingFor
      )
    ) {
      count++;
    }
  }
  return count;
};

console.log(countMERNDevs(users));

//Seting my name in the users object without modifying the original users object
const usersWithMe = Object.assign({}, users);

delete Object.assign(usersWithMe, {
  Pavel: usersWithMe.Alex,
})["Alex"];

console.log(usersWithMe);

// console.log(Object.keys(users));
