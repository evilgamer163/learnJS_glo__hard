'use strict'

//Переменные
let lang = '',
    ruDaysWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    enDaysWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Fridey', 'Saturday', 'Sunday'],
    weeksArr = [
        ruDaysWeek,
        enDaysWeek
    ],
    namePerson = '';

lang = prompt('Введите значение переменной "lang" (ru/en)');

//Функция перебора массива
const sortDay = (arr) => {
    arr.forEach(item => {
        console.log(item);
    });
};


//<--- Задание № 1 --->
//if
if(lang === 'ru') {
    sortDay(ruDaysWeek);
} else if(lang === 'en') {
    sortDay(enDaysWeek);
} else {
    lang = prompt('Введите корректное значение! (ru/en)');
}

//switch-case
switch(lang) {
    case 'ru':
        sortDay(ruDaysWeek);
        break;
    case 'en':
        sortDay(enDaysWeek);
        break;
    default:
        lang = prompt('Введите корректное значение! (ru/en)');
        break;
}

//Многомерный массив
let days = lang === 'ru' ? weeksArr[0] : weeksArr [1];
console.log(days.toString());


//<--- Задание № 2 --->
namePerson = prompt('Введите имя:');

let position = (namePerson === 'Артем') ? 'директор' :
                (namePerson === 'Максим') ? 'преподаватель' : 'студент';

console.log(position);