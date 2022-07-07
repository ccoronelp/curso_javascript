const creaPersona = () => {
    return {
        nombre: nombre,
        apellido: apellido,
    }
}

const crearPersona = (nombre, apellido) => ({nombre,apellido});

const persona = crearPersona('Carlos','Coronel');

// La fución creaPersona y crearPersona hace lo mismo ****

const imprimeArgumentos = (...x) => {
    return x;
}

imprimeArgumentos(10,true,false,'Fernando','hola');

const argumentos = imprimeArgumentos(10,true,false,'Fernando','hola');
console.log({argumentos});

const [edad,casado,vivo,nombre,saludo] = imprimeArgumentos(31,false,true,'Carlos','Vive');

console.log(edad);


const {apellido:newApellido} = crearPersona('Laura','Cabanillas');
console.log(newApellido);

//******* destructuración de argumoentos */
const chiclayano = {
    nombre      : 'Carlos',
    codName     : 'Jokar',
    vivo        : true,
    edad        : 31,
    propiedades : ['moto','reloj','frigobar']
}

const imprimePropiedades = ({nombre='Sin nombre',codName='son chapa',vivo=true,edad=0,propiedades=[]}) =>{
    console.log({nombre});
    console.log({codName});
    console.log({vivo});
    console.log({edad});
    console.log({propiedades});
}

imprimePropiedades(chiclayano);

