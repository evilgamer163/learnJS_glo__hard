'use strict';

const getString = (str) => {
    if(typeof str !== 'string') {
        alert('Аргумент не является строкой!');
    } else {
        if(str.length > 30) {
            return str.trim().substring(0, 30) + '...';
        }
    }
};

document.write(getString(true));
document.write(getString('Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt dolorum nemo facere iusto. Facilis fuga quo veritatis pariatur similique, dolores placeat adipisci dolorum et officiis, tempore deserunt modi iste!'));

