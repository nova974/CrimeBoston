<template>
  <div class="about">
  <ul>
    <li>
      <p>brand: {{getBeer.brand}}</p>
      <p>name: {{getBeer.name}}</p>
      <p>alcohol: {{getBeer.alcohol}}</p>
    </li>
  </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'beerList',
    computed: { 
      //...mapGetters(['beers']);
      ...mapGetters({beerDetail: 'beer'}),
      getBeer() {
          console.log(this.beerDetail(this.$route.params.id))
          console.log(this.$route.params.id)
          return this.beerDetail(this.$route.params.id)
      }
    },
    // data: () => {return{beer: null} }

  }

</script>
