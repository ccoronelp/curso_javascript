//Aquí voy a crear mi arreglo  donde agregaré mis tareas y tambeén crearé los métodos que 
// me permitirán manipular mi arreglo
export class TodoList {
    constructor(){
        this.todos = [];
    }

    nuevoTodo(todo){
        this.todos.push(todo);
    }

    eliminarTodo(id){
        this.todos = this.todos.filter( todo=> todo.id != id);
    }

    
    // esta función me permite manipular el estado completado de mi objeto
    // puede ser true o false y dependiendo de eso se marcará como: checket y completed
    marcarCompletado(id){
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                break;
            }
        }
    }

    eliminarCompletados(){
        this.todos = this.todos.filter(todo=> !todo.completado);
    }

}