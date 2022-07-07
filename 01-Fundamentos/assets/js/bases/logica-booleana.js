
const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negación');
console.log(true);
console.log(!true);

console.log(false);
console.log(!regresaFalse());

console.warn('And'); // True si todos los valores son verdaderos
console.log(true && true);//true
console.log(true && false);//es falso cuando alguno de ellos es falso

console.log('==============');
console.log(regresaFalse() && regresaTrue());// si ya detecta que un elemento es falso ya no sigue analizando
console.log(regresaTrue() && regresaFalse());

console.warn('OR');// es verdadero cuando alguno de ellos es verdadero
console.log(true || false);
console.log(true || true);

console.log(regresaTrue() || regresaFalse());

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;
const soyTrue = true;

const a1 = true && 'Hola mundo';
const a2 = 'Hola' && 'Mundo';
console.log(a1,a2);

const a3 = soyFalse || 'Ya no soy falso';
const a4 = 'Estoy al inicio' || soyFalse || soyUndefined || soyNull || 'Ya no soy falso de nuevo';
console.log({a3,a4});