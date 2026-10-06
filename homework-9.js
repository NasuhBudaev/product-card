// Задание 6. Импорт массива из файла comments.js. import пишут в начале
import { commentsArray } from './comments.js'; 

// 2 Задание. Отсеивание элементов массива методом filter
const arrayNumbersOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayNumbersTwo = arrayNumbersOne.filter(number => number >= 5);
// Пример вывода: console.log(arrayNumbersTwo)
// Покажет: [5, 6, 7, 8, 9, 10]

// 3 Задание. Поиск элемента с типом string внутри массива
const everythingArray = ['Гарри Поттер', 'Парк Юрского периода', 'Ложка', 'Вилка', 'Тумба', 'Стол'];
const somethingArray = everythingArray.filter(thing => thing.includes('Ложка'));
// Пример вывода: console.log(everythingArray)
// console.log('В заданном массиве присутствует элемент:', somethingArray);
// Покажет: В заданном массиве присутствует элемент: ['Ложка']

// 4 Задание. Переворот массивов "задом - на - перед"
function reverseArrays(list) {
  list.reverse();
  console.log(list);
}
// Пример вывода: reverseArrays(arrayNumbersOne);
// reverseArrays(everythingArray);
// Покажет: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// Покажет: ['Стол', 'Тумба', 'Вилка', 'Ложка', 'Парк Юрского периода', 'Гарри Поттер']

// 7 Задание. Вывод из импорта элементов с содержанием ".com"
const commentsWithGoogleMail = commentsArray.filter(user => user.email.includes('.com'));
// Пример вывода: console.log(commentsWithGoogleMail);
// Покажет: Все элементы массива commentsArray, у которых в поле email содержится ".com"

// 8 Задание. Переборка массива и установка новых значений для разделенных групп
const rebuildingArrays = commentsArray.map(user => {
  if (user.id <= 5) {
    user.postId = 2;}
  else
    {user.postId = 1;}
    });
// Пример вывода: console.log(commentsArray);
// Покажет: Все элементы массива commentsArray с измененными значениями postId

// 9 Задание. Вывод только id и name из массива commentsArray
const newArray = commentsArray.map(({id, name}) => ({id, name}));
// Пример вывода: console.log(newArray);
// Покажет: Все элементы массива commentsArray с полями id и name

// 10 Задание. Проверка длины Body в массиве
const longAndShortLengts = commentsArray.map(user => ({ ...user, isInvalid: user.body.length > 180 }));
// Пример вывода: console.log(longAndShortLengts);
// Покажет: Все элементы массива commentsArray с полем isInvalid, которое будет true, 
// если длина body больше 180 символов, и false в противном случае

// 11 Задание. Вывод массива почт с помощть методов reduce и map
const uniteWithReduceEmails = commentsArray.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
// Пример вывода: console.log(uniteWithReduceEmails);
// Покажет: Все элементы массива commentsArray с полем email в виде массива

const uniteWithMapEmails = commentsArray.map(comment => comment.email);
// Пример вывода: console.log(uniteWithMapEmails);
// Покажет: Все элементы массива commentsArray с полем email в виде массива

// Задание 12
const emailsMapToString = uniteWithMapEmails.toString();
// Пример вывода: console.log(emailsMapToString);
// Покажет: Все элементы массива commentsArray с полем email в виде строки, разделенной запятыми

const emailsMapToJoin = uniteWithMapEmails.join(', ');
// Пример вывода: console.log(emailsMapToJoin);
// Покажет: Все элементы массива commentsArray с полем email в виде строки, разделенной запятыми