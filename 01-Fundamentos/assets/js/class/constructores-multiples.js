class Persona{
    static constConObj({nombre,apellidos,pais}){
        return new Persona(nombre,apellidos,pais);
    }

    constructor(nombre,apellido,pais){
        this.nombre=nombre;
        this.apellido=apellido;
        this.pais=pais;
    }

    getInfo(){
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1 = 'Carlos',
        apellido1 = 'Coronel Pérez',
        pais1 = 'Perú';

const perro = {
    nombre: 'Hércules',
    apellidos: 'Coronel Cabanillas',
    pais: 'Perú'
}

const madre = {
    nombre: 'Liceth',
    apellidos: 'Cabanillas Prado',
    pais: 'Perú'
}

const p1 = new Persona(nombre1,apellido1,pais1);
const p2 = Persona.constConObj(perro);
const p3 = Persona.constConObj(madre);
p1.getInfo();
p2.getInfo();
p3.getInfo();