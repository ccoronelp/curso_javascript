const persona = {
    nombre: 'Carlos',
    edad: 31
};

function Persona(nombre,edad){
    console.log('Se ejecutó esta linea');
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const maria = new Persona('Maria',18);
const laura = new Persona('Laura',25);

console.log(maria);
maria.imprimir();
laura.imprimir();