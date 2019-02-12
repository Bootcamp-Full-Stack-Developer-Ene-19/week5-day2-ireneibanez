//* Construir mediante []:
  //* **Ejercicio** Crea un array de 3 enteros

  const newArray = [3, 5, 7];

  //* **Ejercicio** Crea un array de 3 strings

  const newArray = ['blue', 'yellow', 'red'];

  //* **Ejercicio** Crea un array con 2 enteros y un string 

  const newArray = [2, 5, 'sandwich'];


  //* Construir mediante new:
  //* **Ejercicio** Crea un array de 3 enteros

  meassures = newArray(3);
  meassures[0] = 25;
  meassures[1] = 50;
  meassures[2] = 75;

  //* **Ejercicio** Crea un array de 3 strings

  fruits = newArray(3);
  fruits[0] = 'platano';
  fruits[1] = 'apple';
  fruits[2] = 'apricot';

  //* **Ejercicio** Crea un array con 2 enteros y un string

  days = newArray(3);
  days[0] = 15;
  days[1] = 10;
  days[2] ='monday';

  //* **Ejercicio** ¿ Qué diferencia hay entre `let e = [3]` y `let f = new Array(3)` ?
  // En el primer caso la variable e se trata de un array de una sola osición que contiene el número entero 3. En el segundo caso la variable f contiene un array con 3 posiciones que se encuentra vacío de momento.



//   1. **Ejercicio** Transformar el array de números 
    
//   `const numberArrays = [1, 2, 3, 4, 5];` 
  
//   multiplicando por 5 **( map )**

const numberArrays = [1, 2, 3, 4, 5];
let fifthArray = numberArrays.map(num => num*5);
console.log (fifthArray);



// 1. **Ejercicio** Buscar el primer elemento mayor que 4 en el siguiente array

//     `const numberArrays = [1, 2, 3, 4, 5];` 

const numberArrays = [1, 2, 3, 4, 5];
let lookForBiggerThanFour = numberArrays.find(num => num > 4);
console.log(lookForBiggerThanFour);


// 1. **Ejercicio** Buscar el primer elemento que empieze por eva en el array 

//     `const miArray = ['pepe', 2, 'evaristo', 4, 'eva'];`

const miArray = ['pepe', 2, 'evaristo', 4, 'eva'];
let lookForEvaAndNext = miArray.find(word => word.toString().startswith('eva'));
console.log(lookForEvaAndNext);



// 1. **Ejercicio** Hacer el sumatorio de un array numérico **( reduce )**:

//     `const miArray = ['pepe', 2, 'evaristo', 4, 'eva'];`

let miArray = ['pepe', 2, 'evaristo', 4, 'eva'];
let newArray = [];
for (let i=0; i<miArray.length; i++) {
    if (typeof miArray[i] === 'number') {
       newArray.push(miArray[i]);
    }
}

let sumNumArray = newArray.reduce((function(acum, num) {return acum + num}), 0);

console.log(sumNumArray);


// 1. **Ejercicio** Contar el numero de elementos que son string en el siguiente array **(reduce)**:

//     `const miArray = ['pepe', 2, 'evaristo', 4, 'eva'];`

let miArray = ['pepe', 2, 'evaristo', 4, 'eva'];
let newArray = [];
for (let i=0; i<miArray.length; i++) {
    if (typeof miArray[i] === 'string') {
       newArray.push(1);
    }
}

let sumNumArray = newArray.reduce((function(acum, num) {return acum + num}));

console.log(sumNumArray);



// **Ejercicio** Modificar array usando **push**.

//     `const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];` a

//     `['Manzanas', 'Peras', 'Castañas', 'Nueces']` 

let arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];
arrayOriginal.push('Nueces');
console.log(arrayOriginal);


// 1. **Ejercicio** Modificar array usando **concat**.

//     `const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];` a

//     `['Manzanas', 'Peras', 'Castañas', 'Nueces']` 

let arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];
let newArray = ['Nueces'];
console.log(arrayOriginal.concat(newArray));

// 1. **Ejercicio** Modificar array usando **splice**.

//     `const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];` a

//     `['Manzanas', 'Peras', 'Nueces'

let arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];
arrayOriginal.splice(2, 1, 'Nueces');
console.log(arrayOriginal);


// 2. **Ejercicio** Añadir elemento a un array usando **splice**

//     `const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];` a

//     `['Manzanas', 'Peras', 'Castañas', 'Nueces']` .

let arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];
arrayOriginal.splice(3, 0, 'Nueces');
console.log(arrayOriginal);


// # Set

// 1. **Ejercicio** Contruye un conjunto con tres frutas: Pera, Manzana y Naranja

let mySet = new Set(['Pera', 'Manzana', 'Naranja']);
console.log(mySet);


// 1. **Ejercicio** Comprueba si Naranja esta dentro del conjunto que has creado antes.

mySet.has('Naranja');

// 1. **Ejercicio** Comprueba la longitud del conjunto.

mySet.size;

// 1. **Ejercicio** Añade una Granada al conjunto.

mySet.add('Granada');

// 1. **Ejercicio** Crea un array con los elementos que hay en el conjunto y devuelvelo ordenados.

let mySet = new Set(['Pera', 'Manzana', 'Naranja']);
let setArray = [];
setArray.push(mySet);
setArray.sort();
console.log(setArray);

// 1. **Ejercicio** Borra la manzana.

mySet.delete('Manzana');

// # Map

// 1. **Ejercicio** Contruye una guia telefonica con los compañeros de clase. Toma como clave el
// numero de teléfono y como valor el nombre del compañero.

let phoneGuide = new Map([[111111111, 'Lucho'], [222222222, 'Edu'], [333333333, 'Alvaro'], [444444444, 'Javi'], [555555555, 'Irene']]);
console.log(phoneGuide);


// 1. **Ejercicio** Crea una función que compruebe que un número está dentro de la guía.

function checkNumber(number) {
    return phoneGuide.has(number);
}

checkNumber(111111111);

// 1. **Ejercicio** Crea una función que dado un nombre compruebe que la guia contiene algún 
// nombre que contenga el nombre pasado por parámetro.
let phoneGuide = new Map([[111111111, 'Lucho'], [222222222, 'Edu'], [333333333, 'Álvaro'], [444444444, 'Javi'], [555555555, 'Irene']]);
function checkName(name) {
    let checked = false;
    phoneGuide.forEach(value => {
        if(value === name) {
            checked = true;
        }
    })
    return checked;
}
checkName('Irene');

    

// 1. **Ejercicio** Añade un nuevo compañero ficticio con tu número de telefono. ¿Qué pasa?

phoneGuide.set(555555555, 'Juan');
//Mi nombre se ve sustituido por el nombre introducido.

// 1. **Ejercio** Crea un array ordenado por nombre con valores { nombre, telefono } a partir de
// la guía.
let phoneGuide = new Map([[111111111, 'Lucho'], [222222222, 'Edu'], [333333333, 'Alvaro'], [444444444, 'Javi'], [555555555, 'Irene']]);

let phoneGuideArray = [];

phoneGuide.forEach((value, key) => (phoneGuideArray.push([value, key])));

phoneGuideArray.sort((a, b) => {
    if(a[0] < b[0]) {
        return -1;
    } else if(a[0] > b[0]) {
        return 1;
    } else {
        return 0;
    }
});

console.log(phoneGuideArray);


// # Dates

// 1. **Ejercicio** Realiza un script que escriba en el documento la fecha y hora actual

let date = new Date();
document.write(date);

// 1. **Ejercicio** Realiza un script que pida un nombre y dos apellidos e indique el tiempo que se tardó en introducir los datos.
// Para pedir los datos se puede utilizar la forma `var nombre = prompt("Introduce el Nombre:");` que
// guardará en `nombre` el nombre sacando por pantalla una ventana donde introducirlos.
let date = new Date();
let name = prompt('Introduce el nombre:');
let surname = prompt('Introduce los apellidos');
let dateNow = Date.now();
const diff = dateNow.getTime() - date.getTime();

// 1. **Ejercicio** Realiza un script pida un mes y año e imprima los dias de ese mes de la forma 1(miércoles), 2(jueves), ...
let month = prompt('Introduce un mes');
let year = prompt('Introduce el año');
let date = new Date();

date.setMonth(month);
date.setFullYear(year);
date.setDay(1);


// 1. **Ejercicio** Dada la siguiente fecha 05/02/1985 calcula el día sumandole 30, 90 y 180 días.
let date = new Date('February 05, 1985');
let mili = date.getMilliseconds();
let treinta = 2592000000;
let noventa = 7776000000;
let cientoOchenta = 15552000000; 

date.setMilliseconds(mili + treinta);
console.log(date);
date.setMilliseconds(mili + noventa);
console.log(date);
date.setMilliseconds(mili + cientoOchenta);
console.log(date);

// # Moment

// Con moment y la librería de los locales se tiene una potencia grandísima para trabajar con 
// fechas.

// 1. **Ejercicio** Dada la siguiente fecha 05/02/1985, cual es nombre del dia si le sumas 30, 90 y 180 días.
let dateMoment = moment('1985-02-05');
dateMoment.add(30, 'days');
console.log(dateMoment.format('dddd'));
dateMoment.add(60, 'days');
console.log(dateMoment.format('dddd'));
dateMoment.add(90, 'days');
console.log(dateMoment.format('dddd'));

