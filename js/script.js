import {movies} from './db.js';
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


let ul = document.querySelector('.promo__interactive-list')
let promo__bg = document.querySelector('.promo__bg')
let promo__genre = document.querySelector(".promo__genre");
let promo__title = document.querySelector(".promo__title");
let promo__descr = document.querySelector(".promo__descr")
let imdb = document.querySelector('.imd')
let kinopoisk = document.querySelector('.kinopoisk')




function reload(arr) {
    ul.innerHTML = ""
    arr.forEach((film) => {
        let del = document.createElement('div')
        let li = document.createElement('li')

        li.innerHTML = (arr.indexOf(film) + 1) + '. ' + film.Title
        // li.innerHTML =  film.Title
        li.classList.add('promo__interactive-item')
        del.classList.add('delete')
        del.onclick = () => {
         li.remove()
        }
        li.append(del)
        ul.append(li)
        li.onclick = () => {
            promo__bg.style.backgroundImage = `url(${film.Poster})`
            promo__genre.innerHTML = film.Genre
            promo__title.innerHTML = film.Title
            promo__descr.innerHTML = film.Plot

            promo__genre.style.color = film.color
            promo__title.style.color = film.color
            promo__descr.style.color = film.color

            imdb.innerHTML = "Year: "+film.Year
            kinopoisk.innerHTML = "Time: "+film.Runtime
        }
    });
    
}
reload(movies)





