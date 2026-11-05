import {cardsData} from './cards.js';
// Задание 3. Функция - текст который будет вставлен в HTML с уже вкропленными в него UI-данными 
// из массива cardsData
const createProductCard = (card) => `
  <li class="products__item card">
    <img src="${card.imgSrc}" alt="${card.imgAlt}" class="card__image">
    <span class="card__category">${card.category}</span>
    <h2 class="card__name">${card.name}</h2>
    <div class="card__description">
      <p>${card.description}</p>
    </div>
    <div class="card__compound compound">
      <span class="compound__name">Состав:</span>
      <ul class="compound__list">
        ${card.compound.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>
    <div class="card__price-container">
      <b class="card__price">Цена:</b>
      <span class="card__price card__price-value">${card.price.toLocaleString('ru-RU')} &#8381;</span>
    </div>
  </li>
`;

// Задание 4
const  accArrayProducts  =  cardsData.reduce ( ( acc , product ) => {
  return  [...acc, {[product . name] : product.description }]
}, [])
// Пример вывода: console.log(accArrayProducts);
// Выведет массив объектов где, ключем является название продукта, а значением - его описание

// Задание 5. Для того, чтобы пользователь не мог ввести что-то не то, мы будем проверять ввод в цикле.
const getCardsCount = () => {
  // 1) Создаем переменную, куда запишем финальное проверенное число
  let count;
  // 2) Запускаем цикл. Он будет работать ДО ТЕХ ПОР, пока count не станет нормальным числом
  while (count === undefined) {
    const input = prompt("Сколько карточек отобразить?");
    const parsedCount = Number(input);
    if (!Number.isInteger(parsedCount) || parsedCount < 1 || parsedCount > 5) {
      // Если ввели нецелочисленное или число меньше 1 или больше 5 — выводим предупреждение
      alert("Введите целое число от 1 до 5");
      // И НИЧЕГО не возвращаем. Цикл просто пойдет на следующий круг!
    } else {
      // ЕСЛИ ВСЁ ПРАВИЛЬНО — записываем результат в нашу переменную count
      count = parsedCount;
    }
  }
  // 3) Когда цикл наконец-то завершился (потому что count перестал быть undefined),
  // функция возвращает это число наружу.
  return count;
}

// Функция привязки шаблона из JS к указанному классу в HTML (.products)
const renderProductCards = (cardsData) => {
  const productsContainer = document.querySelector('.products');
  productsContainer.innerHTML = cardsData.map(createProductCard).join("");
}

const count = getCardsCount(); // Здесь хранится число которое ввели в функции getCardsCount

// Нарезка массива cardsData до count элементов и передача в функцию renderProductCards
if (count !== null) {
  renderProductCards(cardsData.slice(0, count));
}

