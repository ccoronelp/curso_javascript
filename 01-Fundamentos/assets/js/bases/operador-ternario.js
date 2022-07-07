/*
* Días de la semana abrimos a las 09
* Pero los fines de semana abrimos a las 10
*/

// Entra a un sitio web, para consultar si está abierto hoy
let date = new Date();

const day = 0;
let horaActual = date.getHours();
horaActual = 11;
console.log(day,horaActual);

let openHour;
let message; // esta abierto o no, hoy abrimos a las:


openHour = ([0,6].includes(day)) ? 10:9;

message = (openHour>=horaActual)? 'Está cerrado':'Está abierto';


console.log(message);


