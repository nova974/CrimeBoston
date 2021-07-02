<template>
  <div class="about">
  <ul>
    <li>
      <p>brand: {{getBeer.brand}}</p>
      <p>name: {{getBeer.name}}</p>
      <p>alcohol: {{getBeer.alcohol}}</p>
      <button v-on:click ="addFavoriteBeer(getBeer)" > Add Favorite</button>
    </li>
  </ul>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'beerList',
    computed: { 
      //...mapGetters(['beers']);
      ...mapGetters({beerDetail: 'beer'}),
      getBeer() {
          return this.beerDetail(parseInt(this.$route.params.id))
      }
    },
    methods: {
      ...mapMutations(['setFavoriteBeer']),
      addFavoriteBeer(beer){
        this.setFavoriteBeer(beer)
      }
    }
    // data: () => {return{beer: null} }

  }

</script>
