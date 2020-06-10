'use strict';

//<--- Задание № 1 --->
let arr = ['74', '21', '53', '44', '28', '32', '77'];

const numbers = () => {
    let newArr = [];
    for (let i = 0; i < arr.length; i ++) {
        // if(arr[i].indexOf('2') === 0 || arr[i].indexOf('4') === 0) {
        //     newArr.push(arr[i]);
        // }
        if(arr[i].charAt(0) === '2' || arr[i].charAt(0) === '4') {
            newArr.push(arr[i]);
        }
    }

    return newArr;
};

console.log(numbers());
console.log(numbers().toString());


//<--- Задание № 2 --->
let arrNums = [],
    naturalNums;

//Functions
const arrayFilling = (arr) => {
    for(let i = 1; i <=100; i++) {
        arr[i - 1] = i;
    }
};

const isSimpleNum = (number) => {
    if(number <= 1) {
        return false;
    } else if(number === 2) {
        return true;
    } else {
        for(let i = 2; i < number; i++) {
            if(number % i === 0) {
                return false;
            }
        }
        return true;
    }
};

const showNaturalsArray = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i] + ` Делители этого числа: 1 и ${arr[i]}`);
    }
};

// Call functions
arrayFilling(arrNums);
naturalNums = arrNums.filter(isSimpleNum);
showNaturalsArray(naturalNums);

