import _debounce from 'lodash.debounce';
import countryCardTpl from '../partials/country-card.hbs';
import API from '../js/fetchCountries';

const input = document.querySelector('.country-input');
const cardContainer = document.querySelector('.js-country');

input.addEventListener('input', _debounce(onSearch, 500));

function onSearch() {
  const searchQuery = input.value;
  API.fetchCountryByName(searchQuery).then(renderCountryCard).catch(onFetchError);
}

function renderCountryCard(country) {
  const markup = countryCardTpl(country);
  cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('WTF');
}
