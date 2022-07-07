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

const personita = new Persona('Carlos',31,'Keep it simple');
const laura = new Persona('Laura',25,'Solo se vive una vez');


// laura.quienSoy();
// laura.miFrase();
// laura.setComidaFavorita = 'Pollito con papas';
personita.setComidaFavorita = 'Cevichito';


console.log('Conteo estático',Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();