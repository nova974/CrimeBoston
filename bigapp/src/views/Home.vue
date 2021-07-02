<template>
  <ul>
    <li v-for="beer in beersAllYeah" :key="beer.uid">
      <p>brand: {{beer.brand}}</p>
      <router-link to="/about"><p>name: {{beer.name}}</p></router-link>
      <p>alcohol: {{beer.alcohol}}</p>
    </li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'beerList',
    computed: { 
      //...mapGetters(['beers']);
      ...mapGetters({beersAllYeah: 'beers'})
    }
  }
  
</script>