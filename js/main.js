'use strict';

// <--- Переменные --->
const today = document.querySelector('.today'),
    today2 = document.querySelector('.today2'),
    date = new Date(),
    days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда',
            'Четверг', 'Пятница', 'Суббота'],
    months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 
            'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
    year = date.getFullYear() + ' года';

// <--- Функции --->
const getDayName = () => {
    const day = date.getDay();
    return days[day];
};

const getTodayDate = () => {
    const month = date.getMonth();
    return month + ' ' + months[month];
};

const getTimeLength = (item) => {
    return parseInt(item.toString()[item.toString().length-1]);
};

const getTime = () => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = '';

    switch(hours) {
        case 1:
        case 21:
            time += `${hours} час `;
            break;
        case 2:
        case 3:
        case 4:
        case 22:
        case 23:
            time += `${hours} часа `;
            break;
        default:
            time += `${hours} часов `;
            break;
    }

    if(minutes === 11 || minutes === 12 || minutes === 13 || minutes === 14) {
        time += `${minutes} минут`;
    } else {
        switch(getTimeLength(minutes)) {
            case 1:
                time += `${minutes} минута`;
                break;
            case 2:
            case 3:
            case 4:
                time += `${minutes} минуты`;
                break;
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                time += `${minutes} минут`;
                break;
        }
    }

    if(seconds === 11 || seconds === 12 || seconds === 13 || seconds === 14) {
        time += ` ${seconds} секунд`;
    } else {
        switch(getTimeLength(seconds)) {
            case 1:
                time += ` ${seconds} секунда`;
                break;
            case 2:
            case 3:
            case 4:
                time += ` ${seconds} секунды`;
                break;
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                time += ` ${seconds} секунд`;
                break;
        }
    }
    return time;
};

const formatDate = (item) => {
    if(item.length === 1) {
        item = '0' + item;
    }
    return item;
};

const getDateAndTime = () => {
    let day = formatDate(date.getDay().toString());
    let month = formatDate((date.getMonth() + 1).toString());
    let year = formatDate(date.getFullYear().toString());
    let hours = formatDate(date.getHours().toString());
    let minutes = formatDate(date.getMinutes().toString());
    let seconds = formatDate(date.getSeconds().toString());

    
    today2.innerHTML = `${formatDate(day)}.${formatDate(month)}.${formatDate(year)} 
                - ${formatDate(hours)}:${formatDate(minutes)}:${formatDate(seconds)}`;
};

// <--- Вызов функций --->
today.textContent += `${getDayName()}, ${getTodayDate()} 2020 года, ${getTime()}`;

getDateAndTime();

setInterval(() => {
    today2.innerHTML = '';
    getDateAndTime();
}, 1000);
