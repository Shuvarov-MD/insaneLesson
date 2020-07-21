'use strict';

const createConstructorCities = data => {
	const selectCities = document.getElementById('select-cities'),
		closeButton = document.querySelector('.close-button'),
		button = document.querySelector('.button'),
		label = document.querySelector('.label'),
		listDefault = document.querySelector('.dropdown-lists__list--default'),
		listSelect = document.querySelector('.dropdown-lists__list--select'),
		listAutocomplete = document.querySelector('.dropdown-lists__list--autocomplete');

	listDefault.style.display = 'none';
	button.style['pointer-events'] = 'none';
	button.setAttribute('target', '_blank');

	const sortCities = arr => {
		arr.sort((a, b) => (+(a.count) > +(b.count) ? -1 : 1));
	};

	const createListDefault = data => {
		data.forEach(item => {
			const div = document.createElement('div');
			div.classList.add('dropdown-lists__countryBlock');
			div.innerHTML = `<div class="dropdown-lists__total-line" data-country="${item.country}">
                                    <div class="dropdown-lists__country">${item.country}</div>
                                    <div class="dropdown-lists__count">${item.count}</div>
                                </div>`;
			sortCities(item.cities);
			for (let i = 0; i < 3; i++) {
				const city = document.createElement('div');
				city.classList.add('dropdown-lists__line');
				city.setAttribute('data-city', item.cities[i].name);
				city.setAttribute('data-link', item.cities[i].link);
				city.innerHTML = `<div class="dropdown-lists__city dropdown-lists__city--ip">${item.cities[i].name}</div>
                    <div class="dropdown-lists__count">${item.cities[i].count}</div>`;
				div.append(city);
			}
			document.querySelector('.dropdown-lists__list--default .dropdown-lists__col').append(div);
		});
	};

	createListDefault(data);

	const createListAutocomplete = (matches, searchText) => {
		if (matches.length > 0) {
			matches.forEach(item => {
				const city = document.createElement('div');
				city.classList.add('dropdown-lists__line');
				city.setAttribute('data-city', item.name);
				city.setAttribute('data-link', item.link);
				const regexp = new RegExp(`^(${searchText})`, 'gi');
				city.innerHTML = `<div class="dropdown-lists__city dropdown-lists__city--ip">${item.name.replace(regexp, `<strong>$1</strong>`)}</div>
                    <div class="dropdown-lists__count">${item.count}</div>`;
				document.querySelector('.dropdown-lists__list--autocomplete .dropdown-lists__col').append(city);
			});
		}
	};

	const createListCountryAutocomplete = (matchesCountry, searchText) => {
		if (matchesCountry.length > 0) {
			matchesCountry.forEach(item => {
				const div = document.createElement('div');
				div.classList.add('dropdown-lists__countryBlock');
				const regexp = new RegExp(`^(${searchText})`, 'gi');
				div.innerHTML = `<div class="dropdown-lists__total-line" data-country="${item.country}">
                                        <div class="dropdown-lists__country">${item.country.replace(regexp, `<em>$1</em>`)}</div>
                                        <div class="dropdown-lists__count">${item.count}</div>
                                    </div>`;
				document.querySelector('.dropdown-lists__list--autocomplete .dropdown-lists__col').append(div);
			});
		}
	};

	const createListSelect = (data, country) => {
		data.forEach(item => {
			if (item.country === country) {
				const div = document.createElement('div');
				div.classList.add('dropdown-lists__countryBlock');
				div.innerHTML = `<div class="dropdown-lists__total-line" data-country="${item.country}">
                                        <div class="dropdown-lists__country">${item.country}</div>
                                        <div class="dropdown-lists__count">${item.count}</div>
                                    </div>`;
				sortCities(item.cities);
				item.cities.forEach(item => {
					const city = document.createElement('div');
					city.classList.add('dropdown-lists__line');
					city.setAttribute('data-city', item.name);
					city.setAttribute('data-link', item.link);
					city.innerHTML = `<div class="dropdown-lists__city dropdown-lists__city--ip">${item.name}</div>
                        <div class="dropdown-lists__count">${item.count}</div>`;
					div.append(city);
				});
				document.querySelector('.dropdown-lists__list--select .dropdown-lists__col').append(div);
			}
		});
	};


	const searchCities = searchText => {
		const matchesCountry = data.filter(item => {
			const regexp = new RegExp(`^${searchText}`, 'gi');
			return item.country.match(regexp);
		});
		createListCountryAutocomplete(matchesCountry, searchText);
		data.forEach(item => {
			const matches = item.cities.filter(city => {
				const regex = new RegExp(`^${searchText}`, 'gi');
				return city.name.match(regex);
			});
			createListAutocomplete(matches, searchText);
		});
		if (!document.querySelector('.dropdown-lists__list--autocomplete .dropdown-lists__col').childNodes.length) {
			const city = document.createElement('div');
			city.classList.add('dropdown-lists__line');
			city.innerHTML = `<div class="dropdown-lists__city dropdown-lists__city--ip">Ничего не найдено</div>`;
			document.querySelector('.dropdown-lists__list--autocomplete .dropdown-lists__col').append(city);
		}
	};


	document.body.addEventListener('click', event => {
		const target = event.target;
		if (target.matches('#select-cities')) {
			listDefault.style.transform = '';
			listDefault.style.opacity = '';
			listDefault.style.display = 'block';
			listAutocomplete.style.display = 'none';
			document.querySelector('.dropdown-lists__list--select .dropdown-lists__col').textContent = '';
			listSelect.style.display = 'block';
			listSelect.style.transform = '';
		} else if (target.closest('.close-button')) {
			selectCities.value = '';
			listSelect.style.display = 'none';
			document.querySelector('.dropdown-lists__list--select .dropdown-lists__col').textContent = '';
			listDefault.style.display = 'none';
			closeButton.style.display = 'none';
			button.style['pointer-events'] = 'none';
			button.setAttribute('href', '#');
			document.querySelector('.dropdown-lists__list--autocomplete .dropdown-lists__col').textContent = '';
			label.style.top = '';
			label.style.color = '';
		} else if (!target.matches('#select-cities') && !target.closest('.dropdown')) {
			listDefault.style.transform = '';
			listDefault.style.opacity = '';
			listDefault.style.display = 'none';
			listSelect.style.display = 'none';
			document.querySelector('.dropdown-lists__list--select .dropdown-lists__col').textContent = '';
			document.querySelector('.dropdown-lists__list--autocomplete .dropdown-lists__col').textContent = '';
		} else if (target.closest('.dropdown-lists__list--default .dropdown-lists__total-line')) {
			label.style.top = '-25px';
			label.style.color = '#00416A';
			closeButton.style.display = 'block';
			listDefault.style.transform = 'translateX(-100%)';
			listDefault.style.opacity = 0;
			createListSelect(data, target.closest('.dropdown-lists__total-line').getAttribute('data-country'));
			listSelect.style.transform = 'translateX(-100%)';
			listSelect.style.opacity = 1;
			selectCities.value = target.closest('.dropdown-lists__total-line').getAttribute('data-country');
		} else if (target.closest('.dropdown-lists__list--select .dropdown-lists__total-line')) {
			listSelect.style.transform = 'translateX(0)';
			listSelect.style.opacity = 0;
			document.querySelector('.dropdown-lists__list--select .dropdown-lists__col').textContent = '';
			listDefault.style.transform = 'translateX(0)';
			listDefault.style.opacity = 1;
		} else if (target.closest('.dropdown-lists__line')) {
			label.style.top = '-25px';
			label.style.color = '#00416A';
			const link = target.closest('.dropdown-lists__line').getAttribute('data-link');
			selectCities.value = target.closest('.dropdown-lists__line').getAttribute('data-city');
			button.style['pointer-events'] = 'auto';
			button.setAttribute('href', `${link}`);
			closeButton.style.display = 'block';
			listDefault.style.display = 'none';
			document.querySelector('.dropdown-lists__list--select .dropdown-lists__col').textContent = '';
			document.querySelector('.dropdown-lists__list--autocomplete .dropdown-lists__col').textContent = '';
			listAutocomplete.style.display = 'none';
		} else if (target.closest('.dropdown-lists__list--autocomplete .dropdown-lists__total-line')) {
			createListSelect(data, target.closest('.dropdown-lists__total-line').getAttribute('data-country'));
			document.querySelector('.dropdown-lists__list--autocomplete .dropdown-lists__col').textContent = '';
			listAutocomplete.style.display = 'none';
			selectCities.value = target.closest('.dropdown-lists__total-line').getAttribute('data-country');
			listSelect.style.display = 'block';
		}
	});

	selectCities.addEventListener('input', () => {
		if (selectCities.value === '') {
			listDefault.style.display = 'block';
			listAutocomplete.style.display = 'none';
			document.querySelector('.dropdown-lists__list--autocomplete .dropdown-lists__col').textContent = '';
			label.style.top = '';
			label.style.color = '';
		} else {
			label.style.top = '-25px';
			label.style.color = '#00416A';
			listDefault.style.display = 'none';
			listSelect.style.display = 'none';
			document.querySelector('.dropdown-lists__list--autocomplete .dropdown-lists__col').textContent = '';
			listAutocomplete.style.display = 'block';
			searchCities(selectCities.value);
			closeButton.style.display = 'block';
		}
	});
};


const sortArr = (data, cookie) => {
	if (cookie === 'RU' || cookie === 'EN' || cookie === 'DE') {
		data.forEach((item, index) => {
			if (item.country === 'Россия' || item.country === 'United Kingdom' || item.country === 'Deutschland') {
				const newItem = item;
				data.splice(index, 1);
				data.unshift(newItem);
			}
		});
	}
};




const createResponse = () => fetch('./db_cities.json', { method: 'GET', headers: { 'Content-Type': 'application/json' } });

const createSpinner = () => {
	const spinner = document.createElement('div');
	spinner.setAttribute('id', 'circularG');
	spinner.innerHTML = `
        <div id="circularG_1" class="circularG"></div>
        <div id="circularG_2" class="circularG"></div>
        <div id="circularG_3" class="circularG"></div>
        <div id="circularG_4" class="circularG"></div>
        <div id="circularG_5" class="circularG"></div>
        <div id="circularG_6" class="circularG"></div>
        <div id="circularG_7" class="circularG"></div>
        <div id="circularG_8" class="circularG"></div>
    `;
	document.querySelector('.main').append(spinner);
};

let cookies = document.cookie.split("; ");
cookies = cookies[0].split('=');

if (cookies[1] !== 'RU' && cookies[1] !== 'EN' && cookies[1] !== 'DE') {
	createResponse().then(response => {
		document.querySelector('.input-cities').style.display = 'none';
		createSpinner();
		const language = prompt('Выберите язык - RU, EN, DE').toUpperCase();
		document.cookie = `lang=${language}; max-age=3600`;
		document.querySelector('.input-cities').style.display = 'none';
		cookies = document.cookie.split("; ");
		cookies = cookies[0].split('=');

		if (response.status !== 200) {
			throw new Error('status network not 200');
		}
		response.text().then(data => {
			data = JSON.parse(data);
			localStorage.setItem('data', JSON.stringify(data[cookies[1]]));
			data = data[cookies[1]];
			sortArr(data, cookies[1]);
			setTimeout(() => {
				document.querySelector('#circularG').style.display = 'none';
				document.querySelector('.input-cities').style.display = 'block';
				createConstructorCities(data);
			}, 3000);
		});
	}).catch(error => {
		console.error(error);
	});
} else {
	const dataLang = JSON.parse(localStorage.getItem('data'));
	sortArr(dataLang, cookies[1]);
	createConstructorCities(dataLang);
}
