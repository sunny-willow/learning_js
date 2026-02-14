'use strict'; //использование строгого режима

console.log(sum(1, 2));
// 3
console.info(sum(63, 15));
// 78
console.info(sum('12', 7));
// 19

let button = document.getElementById('but'); //Получаем доступ к элементу как к JS объекту по id

button.addEventListener('click', function() { //по клику выполняет функцию, кстати - анонимную
    let firstNum = document.getElementById('first-num');
    let secNum = document.getElementById('sec-num');
    let res = sum(firstNum.value, secNum.value); //через точку аттрибут value тега input
    let result = document.getElementById('res');
    result.innerHTML = res; //innerHTML отправит результат в HTML в тег output
})