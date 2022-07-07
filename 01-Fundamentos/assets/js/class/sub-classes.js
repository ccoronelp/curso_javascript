class Persona {

    static _conteo = 0;

    static get conteo(){
        return Persona._conteo+' instancias creadas de la clase Persona';
    }

    static mensaje(){
        console.log(this.nombre);
        console.log('Hola a todos, soy un método estático');
    }

    nombre='';
    codigo='';
    frase='';
    comida='';

    /***  ================ */
    constructor(nombre='Sin valores', codigo='Sin valores', frase='Sin valores'){
        this.codigo=codigo;
        this.nombre=nombre;
        this.frase=frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es: ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy: ${this.nombre} y mi identificación es: ${this.codigo}`);
        
    }

    miFrase(){
        console.log(`Mi frase: ${this.frase}`);
    }
}

class Heroe extends Persona{
    clan='sin clan';
    
    constructor(nombre, codigo,frase){
        super(nombre,codigo,frase);// llama al constructor de la clase de donde extiende
        this.clan='The great programers';
    }
    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}


const jocar = new Heroe('Carlos','46999384','Hola soy programador');
console.log({jocar});
jocar.quienSoy();


