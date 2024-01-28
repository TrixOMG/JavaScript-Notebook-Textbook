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

const usersObj = JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value == "string" && key != "email"
      ? value.toUpperCase()
      : value;
  return newValue;
});
console.log(usersObj);
