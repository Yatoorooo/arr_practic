'use strict';


const arr = [1,2,4,77,111,100,55,23,323,1111, 21321,];

// Сортировка массиву:

let arrSrt = arr.sort();
console.log(arrSrt);

// Вирізати з 2 по 4(включно) єлемент массиву:
let newArr = arr.splice(2, 4);
console.log(newArr);

// Вивод стокового Arr зі змінами:
console.log(arr)