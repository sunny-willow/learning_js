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

console.info("Заметки");

console.info(document.getElementsByTagName('h2'));

/*В качестве первого символа имени переменной можно использовать
буквы, символ доллара ($) и подчёркивание (_). Последующие символы
могут содержать всё вышеперечисленное, а также цифры.*/
const year = 1999; //const если не планируем переприсваивать переменную, иначе - let

const century = Math.trunc(1999/1000)+1; //Math.trunc() обрезает дробную часть
console.log(century);
const duration = 136;
console.log(duration % 60); //возвращает остаток от деления одного числа на другое.