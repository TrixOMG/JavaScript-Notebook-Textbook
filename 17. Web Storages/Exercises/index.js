const userInfo = {
  fistName: "Pavel",
  lastName: "Nikitin",
  age: 22,
  country: "Russia",
  city: "Moscow",
};

sessionStorage.setItem(
  "userInfo",
  JSON.stringify(userInfo)
);

console.log(sessionStorage.getItem("userInfo"));

const userInfoFromStorage = JSON.parse(
  sessionStorage.getItem("userInfo")
);

console.log(userInfoFromStorage);
