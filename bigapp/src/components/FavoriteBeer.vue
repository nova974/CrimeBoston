<template>
<pre> {{beer | json}}  </pre>    
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'FavoriteBeer',
    computed:{
        ...mapGetters({beer:"favoriteBeer"})
    }
}
</script>
