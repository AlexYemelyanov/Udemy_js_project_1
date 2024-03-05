/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const adv = document.querySelectorAll('.promo__adv img');
const genre = document.querySelector('.promo__genre');
const bgr = document.querySelector('.promo__bg');
const movieList = document.querySelector('.promo__interactive-list');

adv.forEach((item) => {
	item.remove();
});

genre.textContent = 'драма';
console.log(bgr);
bgr.style.background = `url(../img/bg.jpg)`;

const movieDB = {
	movies: [
		'Логан',
		'Лига справедливости',
		'Ла-ла лэнд',
		'Одержимость',
		'Скотт Пилигрим против...',
	],
};
const movieInsert = (obj) => {
	let i = 1;
	movieList.innerHTML = '';
	obj.movies.sort();
	obj.movies.forEach((item) => {
		movieList.innerHTML += `
        <li class="promo__interactive-item">${i}. ${item}
            <div class="delete"></div>
        </li>
    `;
		i++;
	});
	console.log(obj.movies.length);
	// 	for (let i = 1; i <= movieDB.movies.length; i++) {

	// 	}
	//
};

movieInsert(movieDB);

// movieList.innerHTML = `
//     <li class="promo__interactive-item">${item}
//         <div class="delete"></div>
//     </li>
// `;
