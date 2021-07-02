const app = new Vue({
    el: "#app",
    data: {
        message: 'test',
        tasks: [],
        newTodo: '',
        id: 1
    },
    methods: {
        addTodo() {
            this.tasks.push({name: this.newTodo, status: false, id: this.id})
            this.newTodo = ''
            this.id++
        },
        remove(todo){
            const index = this.tasks.findIndex( task => {
                return task.id === todo.id
            }) 
            this.tasks.splice(index, 1)
        }
    }
})