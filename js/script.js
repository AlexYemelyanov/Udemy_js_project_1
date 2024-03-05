'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const movieDB = {
		movies: [
			'Логан',
			'Лига справедливости',
			'Ла-ла лэнд',
			'Одержимость',
			'Скотт Пилигрим против...',
		],
	};

	const adv = document.querySelectorAll('.promo__adv img'),
		genre = document.querySelector('.promo__genre'),
		bgr = document.querySelector('.promo__bg'),
		movieList = document.querySelector('.promo__interactive-list'),
		filmName = document.querySelector('.adding__input'),
		addForm = document.querySelector('form.add'),
		checkBox = document.querySelector('[type="checkbox"]'),
		btn = document.querySelector('button');

	addForm.addEventListener('submit', (event) => {
		event.preventDefault();

		let newFilm = filmName.value;
		const favorite = checkBox.checked;

		if (newFilm) {
			if (newFilm.length > 21) {
				newFilm = `${newFilm.substring(0, 22)}...`;
			}

			if (favorite) {
				console.log('Добавляем любимый фильм!');
			}

			movieDB.movies.push(newFilm);
			sortArr(movieDB.movies);
			movieInsert(movieDB.movies, movieList);
		}

		event.target.reset();
	});

	const deleteAdv = (arr) => {
		arr.forEach((item) => {
			item.remove();
		});
	};

	const makeChanges = () => {
		genre.textContent = 'драма';
		bgr.style.background = `url(../img/bg.jpg)`;
	};

	const sortArr = (arr) => {
		arr.sort();
	};

	const movieInsert = function (films, parent) {
		parent.innerHTML = '';

		sortArr(films);

		films.forEach((film, item) => {
			parent.innerHTML += `
        <li class="promo__interactive-item">${item + 1}. ${film}
            <div class="delete"></div>
        </li>`;
		});

		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				movieDB.movies.splice(i, 1);
				movieInsert(films, parent);
			});
		});
	};

	deleteAdv(adv);
	makeChanges();

	movieInsert(movieDB.movies, movieList);
});
