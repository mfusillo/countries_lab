import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countries: [],
      selectedCountry: {name: ''},
      favouriteCountries: []
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
      ,
      addFavouriteCountry: function(selectedCountry){
        this.favouriteCountries.push(selectedCountry)
      }
    }
  });
});
