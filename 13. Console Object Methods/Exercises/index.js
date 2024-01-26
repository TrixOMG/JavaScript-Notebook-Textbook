console.assert(10 > 2 * 7, "10 is less than 14");

// Checking speed difference between different loops:

const arr = new Array(100);

for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.floor(Math.random() * 100);
}
console.group("Random array");
console.log(arr);
console.groupEnd();

console.group("Different loops");

console.time("Regular for loop");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const member of arr) {
  console.log(member);
}
console.timeEnd("for of loop");

console.time("forEach loop");
arr.forEach((m) => console.log(m));
console.timeEnd("forEach loop");

console.time("while loop");
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}
console.timeEnd("while loop");

console.groupEnd();
