// переменные 3 задания
const city = "Каспийск";
const temp = 20;
// переменные 4 задания
const lightSpeed = 299792;
const currentSpeed = 300000;
// переменная 5 задания
const budget = 10;

// начало 3 задания
function citiesParameters(city, temp) {
  console.log(`Сейчас в городе ${city} температура - ${temp} градусов по Цельсию`);
  return { city, temp };
}

// начало 4 задания, (!)используются оба вида сравнения
citiesParameters(city, temp);

let speedComparison = currentSpeed > lightSpeed ? "Сверхсветовая скорость" : "Субсветовая скорость";
if (currentSpeed === lightSpeed) {
  speedComparison = "Скорость света";
}
console.log(speedComparison);

//начало 5 задания
function transaction (budget) {
  const product = "Хлеб";
  const priceProduct = 3;
  if (budget >= priceProduct) {
      console.log(`${product} приобретен, спасибо за покупку!`);
  }
  else {
      console.log(`Вам не хватает ${priceProduct - budget}$, пополните баланс`);
  }
}

transaction(budget);

// начало 7 задания: совмещено с 6-м заданием.
  const name = "Насух";
  const surname = "Будаев"; 
  let age = 26;

// начало 6 задания: идет позже 7-го из-за зависимости порядка между функциями и их переменными
function getName(name, surname, age) {
  console.log(`Меня зовут ${name} ${surname}, мне ${age} лет`);
  return { name, surname, age };
}

getName(name, surname, age);