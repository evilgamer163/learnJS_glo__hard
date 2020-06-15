'use strict';

const day = document.querySelectorAll('.day');
const weekList = document.querySelector('.week-list');

let date = new Date();
let today = date.getDay();

let weeks = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

const addDay = () => {
    day.forEach( (item, index, arr) => {
        item.textContent = weeks[index];
        arr[0].style.fontStyle = 'italic';
        arr[arr.length-1].style.fontStyle = 'italic';
        arr[today].style.fontWeight = '700';
    });
};

addDay();

