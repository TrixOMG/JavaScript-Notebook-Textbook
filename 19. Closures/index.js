function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    return count;
  }

  return innerFunction;
}
const innerFunc = outerFunction();

console.log(innerFunc()); // 1
console.log(innerFunc()); // 2
console.log(innerFunc()); // 3
console.log(innerFunc()); // 4
console.log(innerFunc()); // 5
