const cars = ['Ford','Mazda','Zusuki','Toyota','Jac'];

let i = 0;

console.warn('While');

while (cars[i]) {
    if (i===1){
        i++;
        continue;
    }
    console.log(cars[i]);
    //i=i+1;
    i++;
}

console.warn('Do While');

j=10;

do {
    console.log(cars[j]);
    j++;
} while (cars[j]);