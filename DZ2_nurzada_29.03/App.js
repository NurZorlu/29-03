// 1st hw, вы говорили, что главное построить правильно архитектуру. Названия key неудачные, не обращайте внимания
var starbucks = {
  coffee: {
    latte: "Cinnamon Dolce Latte",
    latte1: "Cinnamon Dolce Latte without the cinnamon dolce topping",

    mocha: "Caffè Mocha",
    mocha1: "Caffè Mocha without the whipped cream",
  },
  hotTea: {
    chai: "Chai",
    chai1: "Very delicious chai from Thailand",

    greytea: "Earl Grey",
    greytea1: "Greyteafrom wonderful world",
  },
  frappucino: {
    fraptype1: {
      cakefrap: "Strawberry Funnel Cake Frappuccino",
      cakefrap1: "Strawberry Funnel Cake Frappuccino without the whipped cream",

      chipfrap: "Java Chip Frappuccino",
      chipfrap1:
        "Java Chip Frappuccino without the java chips and whipped cream",
    },
    fraptype2: {
      crumblefrap: "Mocha Cookie Crumble Frappuccino",
      crumblefrap1:
        "Mocha Cookie Crumble Frappuccino without the Frappuccino chips or whipped cream",
    },
  },
};

// 2nd hw
var city = [
  "Bishkek",
  "Los Angeles",
  "Chicago",
  "New York",
  "Houston",
  "Dallas",
  "Philadelphia",
  "Seattle",
];

for (var i = 0; i < city.length; i++) {
  if (city[i].length > 7) {
    console.log(city[i]);
  }
}

// 3rd hw
var day = Number(prompt("Вводите число от 1 до 7, чтобы узнать день недели"));

switch (day) {
  case 0:
    break;
  case 1:
    console.log("Понедельник! эээх");
    break;
  case 2:
    console.log("Вторник! эээхуууу");
    break;
  case 3:
    console.log("Среда, когда это неделя закончится");
    break;
  case 4:
    console.log("Четверг, ого завтра пятница");
    break;
  case 5:
    console.log("Ураа пятница");
    break;
  case 6:
    console.log("Cубботааа, есть занятие по фронтенду");
    break;
  case 7:
    console.log("Воскресенье");
    break;

  default:
    console.log("Ошибка");
    break;
}
