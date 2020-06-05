const result = document.querySelector('.result');

let num = 266219,
    numArr = num.toString().split('');

console.log(numArr);

let res = 1;

for (let i = 0; i < numArr.length; i++) {
    res *= numArr[i];
}

res = res ** 3;
console.log(res);

result.textContent += res.toString().slice(0, 2);

