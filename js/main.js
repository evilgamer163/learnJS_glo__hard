'use strict';

const today = document.querySelector('.today'),
    days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда',
            'Четверг', 'Пятница', 'Суббота'],
    months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 
            'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
    date = new Date(),
    day = date.getDay(),
    year = date.getFullYear() + ' года';

today.textContent = `Сегодня ${days[day]}, ${day} ${months[date.getMonth()]} 
                ${year}, `;