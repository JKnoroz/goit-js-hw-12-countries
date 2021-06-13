// import countryCardTpl from '../partials/countries-list.hbs';
// import countriesListTpl from '';

import _debounce from 'lodash.debounce';
import countryCardTpl from '../partials/country-card.hbs';

const input = document.querySelector('.country-input');
console.log(input);

input.addEventListener('input', _debounce(onSearch, 500));

function onSearch(e) {
  const searchQuery = input.value;

  fetchCountryByName(searchQuery)
    .then(renderCountryCard)
    .catch(error => {
      console.log(error);
    });
}

const cardContainer = document.querySelector('.js-country');

function fetchCountryByName(name) {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(response => {
    return response.json();
  });
}

function renderCountryCard(country) {
  const markup = countryCardTpl(country);
  cardContainer.innerHTML = markup;
}
