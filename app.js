const app = new Vue({
    el: "#app",
    data: {
        message: 'test',
        tasks: [],
        newTodo: ''
    },
    methods: {
        addTodo() {
            this.tasks.push({name: this.newTodo, status: false})
            this.newTodo = ''
        }
    }
})