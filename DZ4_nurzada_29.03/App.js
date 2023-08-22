// 1 st HW
function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("hello"));

//Также можно
var reverse = (str) => str.split("").reverse().join("");

console.log(reverse("hello"));

// 2nd HW

var average = (array) => {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return console.log(sum / array.length);
};

average([2, 3, 4, 9]);

//3rd HW
var arrays = ["name", "John", "lastname", "Black", "age", "23"];
var obj = {};

for (var i = 0; i < arrays.length; i += 2) {
  obj[arrays[i]] = arrays[i + 1];
}

console.log(obj);

//4th HW

var groupArray = [];
var array = [
  null,
  123,
  undefined,
  null,
  "qwerty",
  34,
  65,
  undefined,
  null,
  null,
  43,
  "aerg",
  "пкцйк",
  null,
];
for (var i of array) {
  if (!groupArray.hasOwnProperty(typeof i)) {
    groupArray[typeof i] = [];
  }
  groupArray[typeof i].push(i);
}

groupArray.sort(function (a, b) {
  return a.length - b.length;
});
console.log(Object.values(groupArray));
