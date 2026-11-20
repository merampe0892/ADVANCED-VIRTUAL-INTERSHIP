"use strict";
//Basic types
let age = 25;
let hobby = "Soccer";
let isAdult = true;
let fruit = "apple";
//arrays
let fruits = ["apple", "orange"];
let arr = [22, "a", true];
let numArr = [[1], [2]];
//Tuples
let employee = [1, "Jack"];
let employees = [
  [2, "sarah"],
  [5, "Jack"],
];
//objects
let car = {
  brand: "Lexus",
  year: 2020,
};
let car1 = {
  brand: "Lexus",
  year: 2020,
};
let newCar = {
  brand: "Lexus",
  year: 2020,
};
//union
let x = 23;
let jackOccupation = "student";
//type assertions
let y = "a";
y = 35;
//functions
function add(x, y) {
  return x + y;
}
add(2, 5);
function sayHi() {
  console.log("Hi");
}
// sayHi();
//generics
function copyArr(arr) {
  return [...arr];
}
let numCopy = copyArr([1, 2, 3]);
let strCopy = copyArr(["1", "2", "3"]);
//Enums
var EyeColor;
(function (EyeColor) {
  EyeColor["brown"] = "Common eye color";
  EyeColor["blue"] = "Rare eye color";
  EyeColor["green"] = "Very Rare eye color";
})(EyeColor || (EyeColor = {}));
function displayStudent(student) {
  const info = student.name + "\n" + student.age + "\n" + student.eyeColor;
  document.body.innerText = info;
}
displayStudent({
  name: "Jack",
  age: 20,
  eyeColor: EyeColor.green,
});
//# sourceMappingURL=index.js.map
