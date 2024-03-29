const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = [
  "Finland",
  "Estonia",
  "Sweden",
  "Denmark",
  "Norway",
];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

// Lv.1
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] =
  constants;

console.log(pi);

//destructure rectange obj by it's keys:
let {
  width: w,
  height: h,
  radius: r,
  perimeter: per,
} = rectangle;

console.log(per);

//Lv.2

let sumOfScores = 0;
for (let { scores: s } of users) {
  sumOfScores += s;
}
console.log(sumOfScores);

//Find users with less than 2 skills:
const arrayOfUsernames = [];
for (let { name, skills } of users) {
  if (skills.length < 2) {
    arrayOfUsernames.push(name);
  }
}
console.log(arrayOfUsernames);

//Lv.3

//name, capital, population and languages of all countries
const getCountriesMainInfo = (data) => {
  const coutriesMainInfoObj = {};

  for (const {
    name,
    capital,
    languages: langs,
    population,
  } of data) {
    console.log(
      `Country: ${name}, Capital: ${capital}, Languages: ${langs.join(
        ", "
      )}, Population: ${population}.`
    );
  }
};

getCountriesMainInfo(countriesData);

const student = [
  "David",
  ["HTML", "CSS", "JS", "React"],
  [98, 85, 90, 95],
];

const [name, skills, [, , jsScore, reactScore]] = student;

console.log(name, skills, jsScore, reactScore);

//function convertArrayToObject
const students = [
  [
    "David",
    ["HTML", "CSS", "JS", "React"],
    [98, 85, 90, 95],
  ],
  [
    "John",
    ["HTML", "CSS", "JS", "React"],
    [85, 80, 85, 80],
  ],
];

function convertArrayToObject(array) {
  let finalArray = [];
  for (const [name, skills, scores] of array) {
    finalArray.push({ name, skills, scores });
  }
  return finalArray;
}

console.log(convertArrayToObject(students));

//Copy object
const oldStudent = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

const newStudent = { ...oldStudent };

// Add info:
newStudent.skills.frontEnd.push({
  skill: "Bootstrap",
  level: 8,
});

newStudent.skills.backEnd.push({
  skill: "Express",
  level: 9,
});

newStudent.skills.dataBase.push({
  skill: "SQL",
  level: 9,
});

newStudent.skills.dataScience.push("SQL");

console.log(newStudent);
