const paragraph = document.querySelector("p");
console.log(paragraph);

const secondPById = document.getElementById("p2");
console.log(secondPById);

const paragraphsNodeList = document.querySelectorAll("p");
console.log(paragraphsNodeList);

for (let i = 0; i < paragraphsNodeList.length; i++) {
  if (i === 3)
    paragraphsNodeList[i].innerText = "Fourth paragraph";

  console.log(paragraphsNodeList[i].innerText);
}
