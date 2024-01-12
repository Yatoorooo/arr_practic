'use strict';


 const arr = [1,2,4,77,111,100,55,23,323,1111, 21321];
  // Сортировка массиву:
 arr.sort(function(a,b){
     return a - b;
 });
 console.log(arr);
 // Вирізати з 2 по 4(включно) єлемент массиву:
 let newArr = arr.splice(1,3);
 // Вивод стокового Arr зі змінами:
 console.log(newArr);


