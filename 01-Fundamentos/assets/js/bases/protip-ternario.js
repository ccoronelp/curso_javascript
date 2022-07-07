const elMayor = (a,b) => (a>b)?a:b;


const tieneMembresia = (miembro) => (miembro)? '2 USD':'5 USD';

console.log('El mayor es:' + elMayor(20,21));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArrr= [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Tor':'Loki',
    elMayor(15,20),
    tieneMembresia(true),
];

console.log(amigosArrr);

const nota = 55;
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A':
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B':
              nota >= 75 ? 'C+':
              nota >= 70 ? 'C' : 'F';

console.log({nota,grado});