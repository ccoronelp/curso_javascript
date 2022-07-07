let a = 10;
let b = a;
a = 30;

console.log({a,b});

let juan = {nombre:'Juan'};
let ana = {...juan};
ana.nombre = 'Ana';

console.log({juan,ana});

const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {
    nombre:'Piter'
};

let tony = cambiaNombre(peter);
console.log({peter,tony});

//Areglos******

const frutas = ['manzana','pera','piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('mango');

console.table({frutas, otrasFrutas});