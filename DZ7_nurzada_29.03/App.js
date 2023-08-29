//Загадки
document.querySelectorAll(".zagadka").forEach((element) => {
  const showAnswerBtn = element.querySelector(".show_answer");
  const answerZagadka = element.querySelector(".answer");

  showAnswerBtn.addEventListener("click", () => {
    answerZagadka.style.display =
      answerZagadka.style.display === "none" ? "block" : "none";
    showAnswerBtn.style.backgroundColor =
      answerZagadka.style.display === "none" ? "green" : "red";
    showAnswerBtn.innerText =
      answerZagadka.style.display === "none"
        ? "Показать ответ"
        : "Скрыть ответ";
  });
});

//Дз 2
function minMaxNums(...nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  return min + max;
}
console.log(minMaxNums(1, 2, 2, 3, 5, 65, 67, 43, 24, 65, 100));
