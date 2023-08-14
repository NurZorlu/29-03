// 1st HW
var arrNums = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50];
var newArray = arrNums.join().split(",");

for (var i = 0; i < newArray.length; i++) {
  if (newArray[i][0] === "2" || newArray[i][0] === "5") {
    console.log(newArray[i]);
  }
}

//2nd HW
function printType(parameter) {
  console.log(typeof parameter);
}
printType(false);
printType("hello world");
printType(45);

// 3rd HW
var tags = [
  "li",
  "div",
  "li",
  "p",
  "h1",
  "p",
  "h1",
  "div",
  "div",
  "li",
  "h1",
  "p",
  "h1",
  "ol",
  "br",
];
var count = {};

for (var tag of tags) {
  if (count[tag]) {
    count[tag]++;
  } else {
    count[tag] = 1;
  }
}

console.log(count);
