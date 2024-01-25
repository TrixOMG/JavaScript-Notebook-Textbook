const rectangle = {
  width: 30,
  height: 10,
  area: 200,
  perimeter: 80,
};
let { width, height, area, perimeter = 60 } = rectangle;
console.log(width, height, area, perimeter); //30 10 200 80

const user = {
  name: "Pavel",
  title: "Software Developer",
  country: "Russia",
  city: "Moskow",
};

const copiedUser = {
  ...user,
  education: "Bachleor's degree",
  name: "Paul",
};
console.log(copiedUser);
