// 3 задание
const autoOwner = {
    firstName: "Насух",
    lastName: "Будаев",
    email: "nasuh.b@mail.ru",
    job: "Программист",
    position: "Middle Developer",
    age: 26,
    country: "Россия",
    city: "Каспийск",
    relationshipStatus: "Холост (к сожалению)" 
};

// 4 задание
const car = {
    brand: "Lada",
    model: "Granta",
    year: 2014,
    color: "Черный",
    transmission: "Ручная",
};
car.owner = autoOwner;

// 5 задание
function addMaxSpeed(car) {
  if ('maxSpeed' in car) {
    return; // Если есть, сразу прекращаем выполнение функции
  }
  else {
  car.maxSpeed = 220; }
}

// 6 задание
function showCarColor(car, color) {
  console.log(car[color]);
}
// Пример вывода: showCarColor(car, "color");
// Покажет: Черный

// 7 задание 
const products = ['Хлеб','Молоко','Яйца','Мясо','Сникерс'];

// 8 задание
const libraly = [
  { name: "Война и мир", author: "Лев Толстой", year: 1869, coverColor: "Красный", genre: "Роман" },
  { name: "Преступление и наказание", author: "Федор Достоевский", year: 1866, coverColor: "Синий", genre: "Роман" },
  { name: "Мастер и Маргарита", author: "Михаил Булгаков", year: 1967, coverColor: "Черный", genre: "Роман" },
  { name: "1984", author: "Джордж Оруэлл", year: 1949, coverColor: "Серый", genre: "Антиутопия" }
]
libraly.push({ name: "Гарри Поттер и философский камень", author: "Джоан Роулинг", year: 1997, coverColor: "Фиолетовый", genre: "Фэнтези" });
// Пример вывода: console.log(libraly);   
// Покажет: Весь список книг, включая добавленную книгу

// 9 задание
const marvelLibraly = [
  { name: "Человек-паук", author: "Стэн Ли", year: 1962, coverColor: "Красный", genre: "Супергеройский комикс" },
  { name: "Железный человек", author: "Стэн Ли", year: 1963, coverColor: "Красный и золотой", genre: "Супергеройский комикс" },
  { name: "Капитан Америка", author: "Джо Саймон и Джек Кирби", year: 1941, coverColor: "Синий, красный и белый", genre: "Супергеройский комикс" }
]
const newLibraly = [...libraly, ...marvelLibraly];
// Пример вывода: console.log(newLibraly);
// Покажет: Весь список книг, включая книги из библиотеки Marvel

// 10 задание
// Здесь я немного отошел от условия задания выбрав для определения редкости книг другой год и установив - 
// - критерий ДО а не ПОСЛЕ этого года
const setRarity = newLibraly.map(function(book) {
  book.isRare = false;
  if (book.year < 1950) {
    book.isRare = true;  }
  return book;
});
// Пример вывода: console.log(newLibraly); Покажет общий массив книг с новым качеством isRare