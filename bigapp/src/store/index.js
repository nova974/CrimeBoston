import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    beers: [],
    favoriteBeer : null
  },
  mutations: {
    addBeer(state, beer) {
      state.beers.push(beer)
    },
    setFavoriteBeer(state, beer){
      state.favoriteBeer = beer
    }
  },
  actions: {
    async getBeers(store) {
      const result = await fetch('https://random-data-api.com/api/beer/random_beer?size=5');
      const beers = await result.json();
      beers.forEach(beer => {
        store.commit('addBeer', beer);
      });
    },
  },
  modules: {},
  getters: {
    beers(state) {
      return state.beers;
    },
    beer(state) {
      return (id => {
        return state.beers.find(beer => {
          return beer.id === id
        })
      })
    },
    favoriteBeer(state){
      return state.favoriteBeer
    }
  },
});
