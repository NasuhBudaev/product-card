// Покраска всех карточек в зеленый цвет

const productCards = document.querySelectorAll('.card');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF';

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash) // card здесь просто любое название для итерируемого элемента
})

// Покраска первой карточки в синий цвет

const firstProductCard = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash
})

// Открытие сайта Google.com

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle);


function openGoogle() {
  const answer = confirm('Вы уверены, что хотите открыть сайт Google.com?');

  if (answer === true) {
    window.open('https://www.google.com', '_blank');    }
  else {
    return;
  }
  }

// Вывод консоль лог

const outputLogButton  = document.querySelector('#output-console-log');     // Для себя: объявление константы для задачи, привязка к айди кнопки.

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4')); // Для себя: Триггер - клик. Выполняет фунцию вывода сообшения в лог

function outputConsoleLog(message) {
  // alert(message) 
  console.log(message)
}

// Вывод в лог заголовка, при указании на него мышью на странице сайта

const titleAim = document.querySelector('.catalog__title'); // Для себя: объявляем константу с подходящим под будущую задачу названием. Задача: найти первый элемент на странице с заданным классом - по сути ВЫБРАТЬ его
const titleText = titleAim.textContent                      // Для себя: Этой константа "копирует для себя" текст из предыдущей константы
titleAim.addEventListener('mouseover', function () {        // Для себя: Это триггер реагирующий на наведении мыши на класс из titleAim и выполняющий содержимое function
  console.log(titleText)                                    // Для себя: Выводит в лог текст из titleText
})

// Добавление кнопки которая меняет свои цвета по нажатию на неё

const coloredButton = document.querySelector('.colored-button_1') // Для себя: Поиск определенной кнопки по классу. Хотя можно было и по айди...
coloredButton.addEventListener('click', changeColors);

function changeColors() {
  coloredButton.classList.toggle('colored-button_1') // Для себя: скрывает первый класс по нажатию на кнопку оставляя другой класс другого цвета
}