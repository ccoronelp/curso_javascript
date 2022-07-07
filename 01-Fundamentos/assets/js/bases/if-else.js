let a = 9;

if (a>=10) { //undefine, null, asignación
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

console.log('Fin del programa');

const hoy = new Date(); //{}
let day = hoy.getDay();

if (day === 0){
    console.log('Domingo');
} 
if (day === 1) {
    console.log('Lunes');
}
if (day === 2) {
    console.log('Martes');
}
if (day === 3) {
    console.log('Miércoles');
}

//---------//

const semana = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado'
}

const semana2 = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];

console.log(semana2[day]);