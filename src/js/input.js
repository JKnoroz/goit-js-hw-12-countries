import _debounce from 'lodash.debounce';
import countryCardTpl from '../partials/country-card.hbs';
import countriesListTpl from '../partials/countries-list.hbs';
import API from '../js/fetchCountries';
import notification from '../js/messages';

const input = document.querySelector('.country-input');
const cardContainer = document.querySelector('.js-country');

input.addEventListener('input', _debounce(onSearch, 500));

function onSearch() {
  clearInput();

  const searchQuery = input.value;
  if (!searchQuery) {
    return;
  }
  API.fetchCountryByName(searchQuery)
    .then(country => {
      if (country.length > 10) {
        tooMany();
      } else if (country.length > 1) {
        renderCountriesList(country);
      } else {
        renderCountryCard(country);
      }
    })
    .catch(console.log('WTF'));
}

function renderCountryCard(country) {
  const markup = countryCardTpl(country);
  cardContainer.innerHTML = markup;
}

function renderCountriesList(countries) {
  const markup = countriesListTpl(countries);
  cardContainer.innerHTML = markup;
}

function tooMany() {
  console.log('Too many matches found. Please enter a more specific query!');
}

function clearInput() {
  cardContainer.innerHTML = '';
}

function onFetchError(error) {
  alert('WTF');
}
