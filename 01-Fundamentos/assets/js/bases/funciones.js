function saludar(){
    console.log('Hola Mundo :D');
    return 1;
    console.log('Este código no se ejecutará porque ya retornamos 1');
}


const saludar2 = function(){
    console.log('Hola mundo 2');
}

nombre = 'Carlos';

const saludar3 = function(x){
    console.log(arguments);
    console.log('Hola: '+x);
}

// saludar();
// saludar2();
// saludar3("names",40,'hola', true);

const saludarFlecha = () => {
    console.log('Hola, función de flecha');
}

const saludarFlecha2 = (nom) =>{
    console.log('Hola: '+nom);
}

const saludarFlecha3 =()=>{console.log('holitas linea');}

// numerito = saludar();
// console.log(numerito);
// saludarFlecha2(nombre);
// saludarFlecha3();

const sumar = (a,b) => {
    return a+b;
}

const sumar2 = (a,b) => a+b;

const getAleatorio = () => Math.random();

console.log(getAleatorio());