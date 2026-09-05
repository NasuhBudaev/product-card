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
// Пример вывода: citiesParameters(city, temp);
// Покажет: Сейчас в городе Каспийск температура - 20 градусов по Цельсию (в моем конкретном случае)

// начало 4 задания, (!)используются оба вида сравнения
let speedComparison = currentSpeed > lightSpeed ? "Сверхсветовая скорость" : "Субсветовая скорость";
if (currentSpeed === lightSpeed) {
  speedComparison = "Скорость света";
}
// Пример вывода: console.log(speedComparison);
// Покажет: Сверхсветовая скорость (в моем конкретном случае)

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
// Пример вывода: transaction(budget);
// Покажет: Хлеб приобретен, спасибо за покупку! (в моем конкретном случае)

// начало 7 задания: совмещено с 6-м заданием.
  const name = "Насух";
  const surname = "Будаев"; 
  let age = 26;

// начало 6 задания: идет позже 7-го из-за зависимости порядка между функциями и их переменными
function getName(name, surname, age) {
  console.log(`Меня зовут ${name} ${surname}, мне ${age} лет`);
  return { name, surname, age };
}
// Пример вывода: getName(name, surname, age);
// Покажет: Меня зовут Насух Будаев, мне 26 лет