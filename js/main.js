'use strict';

const getString = (str) => {
    if(typeof str !== 'string') {
        alert('Аргумент не является строкой!');
    } else {
        if(str.length > 30) {
            return str.trim().substring(0, 30) + '...';
        } else {
            return str.trim();
        }
    }
};

document.write(getString('     df12321312312312312'));
// document.write(getString('Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt dolorum nemo facere iusto. Facilis fuga quo veritatis pariatur similique, dolores placeat adipisci dolorum et officiis, tempore deserunt modi iste!'));

