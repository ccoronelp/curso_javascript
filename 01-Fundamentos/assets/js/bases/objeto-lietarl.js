let personaje = {
    nombre : 'Laura',
    codeName : 'Osa',
    vivo: true,
    edad: 26,
    coords:{
        lat:124,
        lng:-118.79
    },
    trajes:['Chompa','polo','pantalon'],
    direccion:{
        zip: '1088,90212',
        ubicacion: 'Los sausales 280',
    },
};

console.log(personaje);
console.log('Nombre:',personaje['nombre']);
console.log('Edad: ',personaje.edad);
console.log('Latitid: ',personaje.coords.lat);
console.log('Num de trajes: ', personaje.trajes.length);
console.log('Último traje: ',personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
// console.log('Vivo: ', personaje[x]);


// mas detalles*..........*

delete personaje.edad;

personaje.casado = true;

const entriesPares = Object.entries(personaje);

Object.freeze(personaje);

personaje.dinero = 1212121212121;
personaje.direccion.ubicacion = "Pedro Nieto";

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje)
console.log(propiedades, valores);
