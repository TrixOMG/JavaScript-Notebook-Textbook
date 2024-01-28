const skills = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Node",
  "Python",
];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Pavel",
  lastName: "Nikitin",
  age: 22,
  isMarried: false,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;

const skillsToJSON = JSON.stringify(skills);
console.log(skillsToJSON);

const stringifyAge = JSON.stringify(age);
console.log(stringifyAge);

console.log(typeof stringifyAge);

const studentWithSelectedKeys = JSON.stringify(student, [
  "firstName",
  "lastName",
  "skills",
]);
console.log(studentWithSelectedKeys);

const findUserWithMostSkillsFromJSON = (usersData) => {
  const usersObj = JSON.parse(usersData, (key, value) => {
    let newSkillsValue =
      key === "skills" ? value.length : value;
    return newSkillsValue;
  });

  const userWithMostSkills = {
    name: "",
    numberOfSkills: 0,
  };

  for (const user in usersObj) {
    if (
      usersObj[user].skills >
      userWithMostSkills.numberOfSkills
    ) {
      userWithMostSkills.numberOfSkills =
        usersObj[user].skills;
      userWithMostSkills.name = user;
    }
  }

  return userWithMostSkills;
};

console.log(
  "findUserWithMostSkillsFromJSON:",
  findUserWithMostSkillsFromJSON(txt)
);
