

const app = new Vue({
    el: "#app",
    data: {
        message: 'test',
        tasks: [],
        newTodo: '',
        currentEditingTask: {},
        id: 1,
        visibility: "all",
        state: 0
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
        },
        edit(todo){
            this.currentEditingTask = todo;
            document.getElementById('editTask_'+todo.id).focus()
            this.state = 1
            // this.tasks.name = todo.name
        },
        editTodo(todo){
            this.state = 0
            todo.status = 0
        },
        isEditing(todo) {
            return this.state === 1 && this.currentEditingTask.id === todo.id
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