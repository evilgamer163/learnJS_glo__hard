const result = document.querySelector('.result');

let num = 266219,
    numArr = num.toString().split(''),
    res = 1;

console.log(numArr);

for (let i = 0; i < numArr.length; i++) {
    res *= numArr[i];
}

res **= 3;
console.log(res);

result.textContent += res.toString().slice(0, 2);