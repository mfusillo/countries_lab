import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countryURL: null,
      countries: []
    },
    mounted(){
      this.fetchListAllCountries();
    },
    methods: {
      fetchListAllCountries: function(){
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(countries => this.countries = countries);
      }
    }
  });
});
