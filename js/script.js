'use strict';

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);


function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if (!countryName.length) {
        countryName = 'Poland';
    }

    fetch(url + countryName)
        .then(function (resp) {
            return resp.json();
        })
        .then(showCountriesList);
};


function showCountriesList(resp) {

    countriesList.innerHTML = '';

    resp.forEach(function (item) {

        var liEl = document.createElement('div');

        liEl.innerHTML += '<li class="space"> <span>Country: </span>' + item.name + '</li>';
        liEl.innerHTML += '<li class="space"> <span>Capital: </span>' + item.capital + '</li>';
        liEl.innerHTML += '<li class="space"> <span>Region: </span>' + item.region + '</li>';
        liEl.innerHTML += '<li class="space"> <span>Land area: </span>' + item.area + '<span id="sup"> km</span></li>';
        liEl.innerHTML += '<li class="space"> <span>Population: </span>' + item.population + '</li>';
        liEl.innerHTML += '<li class="space"> <span>Language: </span>' + item.demonym + '</li>';
        liEl.innerHTML += '<li class="space"> <span>Currency: </span>' + item.currencies + '</li>';

        countriesList.appendChild(liEl);

    });
};