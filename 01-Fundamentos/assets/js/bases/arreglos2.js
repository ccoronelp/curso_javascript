let clubs = ['City','Liverpool','Leizip','Arsenal'];
console.log(clubs.length);

let primero = clubs[0];
let ultimo = clubs[clubs.length-1]

console.log({primero,ultimo});

// clubs.forEach((elemento,indice,arr)=>{
//     console.log({elemento,indice,arr});
// });

let nuevoLargo = clubs.push('Barcelona');
console.log({nuevoLargo, clubs});

nuevoLargo = clubs.unshift('Atleti','Leicester');
console.log({nuevoLargo,clubs});

//Borra el último elemento
nuevoLargo = clubs.pop();
console.log({nuevoLargo,clubs});

// borra elemento espesífico 
let posicion = 1;
// elementosEliminados = clubs.splice(posicion,1);
// console.log({elementosEliminados});
console.log({nuevoLargo, });

let indexCity = clubs.indexOf('City');

console.log(indexCity);
