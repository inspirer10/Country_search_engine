'use strict';

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);


function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if (!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function (resp) {
            return resp.json();
        })
        .then(showCountriesList);
}


function showCountriesList(resp) {
    countriesList.innerHTML = '';

    resp.forEach(function (item) {
        var liCountry = document.createElement('li');
        var liCapital = document.createElement('li');
        var liRegion = document.createElement('li');
        liCountry.innerText = item.name;
        liCapital.innerText = item.capital;
        liRegion.innerText = item.region
        countriesList.appendChild(liCountry);
        countriesList.appendChild(liCapital);
        countriesList.appendChild(liRegion);
    });

}