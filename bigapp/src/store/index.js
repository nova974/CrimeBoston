import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    beers: []
  },
  mutations: {
    addBeer(state, beer) {
      state.beers.push(beer)
    },
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
      console.log(state.beers) 
      return (id => {
        console.log(id) 
        return state.beers.find(beer => {
        return beer.id === id
      }
    )}
   )}
  },
});
