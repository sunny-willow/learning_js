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

if (century > 0) { //условный оператор if
    console.log('Век:', century);
} else {
    console.log('События произошли раньше первого века');
}

const isCenturyEqZero = century === 0;//такие переменные можно вставлять в условные операторы
console.log(isCenturyEqZero); //false

//строки можно задавать '' или ""
const description = 'It\'s action'
console.log(description + ' movie');
console.log(description.length);
console.log(description[2]); //но присвоить description[2] = что-либо нельзя

for (let i = 0; i < description.length; i++) { //вне цикла к char не обратиться
    const char = description[i]; //можно также с массивом
    console.log(char);
}

const genres = ['action', 'fantasy', 'sci-fi']; //массивы
genres.push('comedy');
console.log(genres);

const movie = { //объекты
    name: 'The Matrix',
    year: 1999,
    genres: ['action', 'fantasy', 'sci-fi']
};

console.log(movie.name);
const key = 'year';
console.log(movie[key]);
console.log(movie['na' + 'me']);
movie.name = 'Gatsby';
console.log(movie);
movie.genres.push('comedy');
movie.duration = 136;
console.log(movie);
delete movie.genres;
console.log(movie);

const keys = Object.keys(movie);
console.log(keys); //массив "ключей"

function createMovie(name, year) { //функции
    return {
        name: name,
        year: year
    };
}

function createMovie(name, year) { //тоже самое
    return {
        name,
        year
    };
}

console.log(createMovie('Ostwind', 2013), createMovie('Avatar', 2009));


