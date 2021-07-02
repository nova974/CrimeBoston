const app = new Vue({
    el: "#app",
    data: {
        message: 'test',
        tasks: [],
        newTodo: '',
        id: 1,
        visibility: "all"
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
    },
    computed: {
        filterTasks() {
            if(this.visibility === "all"){
                return this.tasks
            }
            
            if(this.visibility === "active"){
                return this.tasks.filter( task => !task.status)    
            }

            if(this.visibility === "completed"){
                return this.tasks.filter( task => task.status)
            }                 
        }
    }
})