//1
const input = document.querySelector("input");
const decrease = document.querySelector("#dec");
const increase = document.querySelector("#inc");

decrease.addEventListener("click", () => {
  if (input.value <= 0) {
    return;
  }
  input.value--;
});
increase.addEventListener("click", () => {
  input.value++;
});

//2 не получилось с = .  Пишу две цифры потом на знаки - + * / и выходит результат
var inputCalc1 = document.querySelector(".input1");
var inputCalc2 = document.querySelector(".input2");
var minus = document.querySelector("#minus");
var plus = document.querySelector("#plus");
var times = document.querySelector("#times");
var divide = document.querySelector("#divide");
var equal = document.querySelector("#equal");
var result = document.querySelector("#result");

minus.addEventListener("click", () => {
  var minusResult = parseInt(inputCalc1.value) - parseInt(inputCalc2.value);
  result.textContent = minusResult;
});
plus.addEventListener("click", () => {
  var plusResult = parseInt(inputCalc1.value) + parseInt(inputCalc2.value);
  result.textContent = plusResult;
});
times.addEventListener("click", () => {
  var timesResult = parseInt(inputCalc1.value) * parseInt(inputCalc2.value);
  result.textContent = timesResult;
});
divide.addEventListener("click", () => {
  var divideResult = parseInt(inputCalc1.value) / parseInt(inputCalc2.value);
  result.textContent = divideResult;
});

//3

var clickBtn = document.querySelector(".click");
clickBtn.addEventListener("click", () => {
  var textAppear = prompt("Напишите что-нибудь");
  document.querySelector(".change").innerHTML = textAppear;
});
