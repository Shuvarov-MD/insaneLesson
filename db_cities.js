'use strict';

const data = {
	"RU": [
		{
			"country": "Россия",
			"count": "144500000",
			"cities": [
				{
					"name": "Рязань",
					"count": "538962",
					"link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
				},
				{
					"name": "Москва",
					"count": "12615882",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
				},
				{
					"name": "Санкт-Петербург",
					"count": "5383968",
					"link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Краснодар",
					"count": "918145",
					"link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
				},
				{
					"name": "Екатеринбург",
					"count": "1484456",
					"link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Ростов-на-Дону",
					"count": "1130305",
					"link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
				},
				{
					"name": "Воронеж",
					"count": "1054537",
					"link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
				}
			]

		},
		{
			"country": "Германия",
			"count": 82175684,
			"cities": [
				{
					"name": "Берлин",
					"count": "3613495",
					"link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
				},
				{
					"name": "Мюнхен",
					"count": "1456039",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
				},
				{
					"name": "Франкфурт-на-Майне",
					"count": "736414",
					"link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
				},
				{
					"name": "Кёльн",
					"count": "1080394",
					"link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
				}
			]
		},
		{
			"country": "Англия",
			"count": 53012456,
			"cities": [
				{
					"name": "Лондон",
					"count": " 8869898",
					"link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
				},
				{
					"name": "Манчестер",
					"count": "545500",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
				},
				{
					"name": "Эдинбург",
					"count": "488100",
					"link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Бристоль",
					"count": "567111",
					"link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
				}
			]

		}
	],
	"EN": [
		{
			"country": "Russia",
			"count": "144500000",
			"cities": [
				{
					"name": "Ryazan",
					"count": "538962",
					"link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
				},
				{
					"name": "Moscow",
					"count": "12615882",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
				},
				{
					"name": "St Petersburg",
					"count": "5383968",
					"link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Krasnodar",
					"count": "918145",
					"link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
				},
				{
					"name": "Yekaterinburg",
					"count": "1484456",
					"link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Rostov-on-Don",
					"count": "1130305",
					"link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
				},
				{
					"name": "Voronezh",
					"count": "1054537",
					"link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
				}
			]

		},
		{
			"country": "Germany",
			"count": 82175684,
			"cities": [
				{
					"name": "Berlin",
					"count": "3613495",
					"link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
				},
				{
					"name": "Munich",
					"count": "1456039",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
				},
				{
					"name": "frankfurt",
					"count": "736414",
					"link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
				},
				{
					"name": "Cologne",
					"count": "1080394",
					"link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
				}
			]
		},
		{
			"country": "United Kingdom",
			"count": 53012456,
			"cities": [
				{
					"name": "London",
					"count": " 8869898",
					"link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
				},
				{
					"name": "Manchester",
					"count": "545500",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
				},
				{
					"name": "Edinburgh",
					"count": "488100",
					"link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Bristol",
					"count": "567111",
					"link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
				}
			]

		}
	],
	"DE": [
		{
			"country": "Russland",
			"count": "144500000",
			"cities": [
				{
					"name": "Ryazan",
					"count": "538962",
					"link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
				},
				{
					"name": "Moskau",
					"count": "12615882",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
				},
				{
					"name": "Saint Petersburg",
					"count": "5383968",
					"link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Krasnodar",
					"count": "918145",
					"link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
				},
				{
					"name": "Jekaterinburg",
					"count": "1484456",
					"link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Rostow",
					"count": "1130305",
					"link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
				},
				{
					"name": "Woronesch",
					"count": "1054537",
					"link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
				}
			]

		},
		{
			"country": "Deutschland",
			"count": 82175684,
			"cities": [
				{
					"name": "Berlin",
					"count": "3613495",
					"link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
				},
				{
					"name": "München",
					"count": "1456039",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
				},
				{
					"name": "Frankfurt",
					"count": "736414",
					"link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
				},
				{
					"name": "Köln",
					"count": "1080394",
					"link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
				}
			]
		},
		{
			"country": "England",
			"count": 53012456,
			"cities": [
				{
					"name": "London",
					"count": " 8869898",
					"link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
				},
				{
					"name": "Manchester",
					"count": "545500",
					"link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
				},
				{
					"name": "Edinburgh",
					"count": "488100",
					"link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
				},
				{
					"name": "Bristol",
					"count": "567111",
					"link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
				}
			]

		}
	]
};

const selectCities = document.getElementById('select-cities'),
	closeButton = document.querySelector('.close-button'),
	button = document.querySelector('.button'),
	label = document.querySelector('.label'),
	listDefault = document.querySelector('.dropdown-lists__list--default'),
	listSelect = document.querySelector('.dropdown-lists__list--select'),
	listAutocomplete = document.querySelector('.dropdown-lists__list--autocomplete');

listDefault.style.display = 'none';
const lang = 'RU';
button.style['pointer-events'] = 'none';
button.setAttribute('target', '_blank');

const sortCities = arr => {
	arr.sort((a, b) => (+(a.count) > +(b.count) ? -1 : 1));
};

const createListDefault = (data, lang) => {
	data[lang].forEach(item => {
		const div = document.createElement('div');
		div.classList.add('dropdown-lists__countryBlock');
		div.innerHTML = `<div class="dropdown-lists__total-line" data-country=${item.country}>
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

createListDefault(data, lang);


const createListAutocomplete = matches => {
	if (matches.length > 0) {
		matches.forEach(item => {
			const city = document.createElement('div');
			city.classList.add('dropdown-lists__line');
			city.setAttribute('data-city', item.name);
			city.setAttribute('data-link', item.link);
			city.innerHTML = `<div class="dropdown-lists__city dropdown-lists__city--ip">${item.name}</div>
                <div class="dropdown-lists__count">${item.count}</div>`;
			document.querySelector('.dropdown-lists__list--autocomplete .dropdown-lists__col').append(city);
		});
	}
};

const createListCountryAutocomplete = matchesCountry => {
	if (matchesCountry.length > 0) {
		matchesCountry.forEach(item => {
			const div = document.createElement('div');
			div.classList.add('dropdown-lists__countryBlock');
			div.innerHTML = `<div class="dropdown-lists__total-line" data-country=${item.country}>
                                    <div class="dropdown-lists__country">${item.country}</div>
                                    <div class="dropdown-lists__count">${item.count}</div>
                                </div>`;
			document.querySelector('.dropdown-lists__list--autocomplete .dropdown-lists__col').append(div);
		});
	}
};

const createListSelect = (data, lang, country) => {
	data[lang].forEach(item => {
		if (item.country === country) {
			const div = document.createElement('div');
			div.classList.add('dropdown-lists__countryBlock');
			div.innerHTML = `<div class="dropdown-lists__total-line" data-country=${item.country}>
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
	const matchesCountry = data[lang].filter(item => {
		const regexp = new RegExp(`^${searchText}`, 'gi');
		return item.country.match(regexp);
	});
	createListCountryAutocomplete(matchesCountry);
	data[lang].forEach(item => {
		const matches = item.cities.filter(city => {
			const regex = new RegExp(`^${searchText}`, 'gi');
			return city.name.match(regex);
		});
		createListAutocomplete(matches);
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
		listDefault.style.display = 'block';
		listSelect.style.display = 'none';
		listAutocomplete.style.display = 'none';
		document.querySelector('.dropdown-lists__list--select .dropdown-lists__col').textContent = '';
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
		listDefault.style.display = 'none';
		listSelect.style.display = 'none';
		document.querySelector('.dropdown-lists__list--select .dropdown-lists__col').textContent = '';
		document.querySelector('.dropdown-lists__list--autocomplete .dropdown-lists__col').textContent = '';
	} else if (target.closest('.dropdown-lists__list--default .dropdown-lists__total-line')) {
		label.style.top = '-25px';
		label.style.color = '#00416A';
		closeButton.style.display = 'block';
		listDefault.style.display = 'none';
		createListSelect(data, 'RU', target.closest('.dropdown-lists__total-line').getAttribute('data-country'));
		selectCities.value = target.closest('.dropdown-lists__total-line').getAttribute('data-country');
		listSelect.style.display = 'block';
	} else if (target.closest('.dropdown-lists__list--select .dropdown-lists__total-line')) {
		listSelect.style.display = 'none';
		document.querySelector('.dropdown-lists__list--select .dropdown-lists__col').textContent = '';
		listDefault.style.display = 'block';
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
		createListSelect(data, 'RU', target.closest('.dropdown-lists__total-line').getAttribute('data-country'));
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
