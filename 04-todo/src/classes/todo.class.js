//aquí voy a almacenar información de mi tarea
export class Todo {
    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime(); //numero
        this.completado = false;
        this.creado = new Date();
    }
}