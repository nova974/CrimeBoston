<template>
    <div>
        <h1>{{ name }} {{ counter }}</h1>
        <button @click="increment()">Ajouter</button>
        <button @click="decrement()">Supprimer</button>
    </div>
</template>

<script>
export default {
    props: {
        name: String
    },
    data: function() {
        return  {
            counter: 0
        }
    },
    methods: {
        increment: function() {
            this.counter++
        },
        decrement: function() {
            this.counter--
        }
    }
}
</script>

<style scoped>

</style>