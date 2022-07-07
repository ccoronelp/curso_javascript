let flighPrices = [144,262,174,322,153,137,279];
let animals = ['goats','cows','chickens'];

animals.push('cats');

let holaMundo=(value)=>{
    console.log(`HOla mundo: ${value}`);
};

animals.forEach(holaMundo);


let max = flighPrices[0];
let min = flighPrices[0];

let compareToMaximum = (value) =>{
    max = value > max ? value:max ;
}

let comparteToMinimum = (value) =>{
    min = value < min ? value : min;
}


flighPrices.forEach(compareToMaximum);


