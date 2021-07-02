<template>
  <ul>
    <FavoriteBeer> </FavoriteBeer>
    <li v-for="beer in beersAllYeah" :key="beer.uid">
      <p>brand: {{beer.brand}}</p>
      <router-link :to="/about/+beer.id"><p>name: {{beer.name}}</p></router-link>
      <p>alcohol: {{beer.alcohol}}</p>
    </li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'
  import FavoriteBeer from '../components/FavoriteBeer.vue'

  export default {
    name: 'beerList',
    components : {FavoriteBeer},
    computed: { 
      //...mapGetters(['beers']);
      ...mapGetters({beersAllYeah: 'beers'})
    }
  }
  
</script>