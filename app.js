/* Ejercicio 1: Filtro de Arreglos 

Instrucciones: 

Crea una función llamada filtrarMayoresDeEdad que tome un arreglo de objetos personas, donde cada objeto tenga las propiedades nombre y edad. 
La función debe devolver un nuevo arreglo con solo las personas que tengan 18 años o más. 

*/

const personas = [
    { nombre: 'Juan Pérez', edad: 25 },
    { nombre: 'Maria Gómez', edad: 3 },
    { nombre: 'Carlos Díaz', edad: 41 },
    { nombre: 'Ana López', edad: 28 },
    { nombre: 'Pedro García', edad: 8 },
    { nombre: 'Lucia Martínez', edad: 16 },
    { nombre: 'Javier Hernández', edad: 29 },
    { nombre: 'Eva Sánchez', edad: 17 },
    { nombre: 'Francisco Rodríguez', edad: 39 },
    { nombre: 'Isabel Fernández', edad: 0 }
];

function filtrarMayoresDeEdad(peopleList) {
    return peopleList.filter(item => item.edad > 18)
}

// console.log(filtrarMayoresDeEdad(personas))

/* 
Ejercicio 2: Transformar y Filtrar Arreglos 
Instrucciones: 
Crea una función llamada transformarYFiltrar que tome un arreglo de números. 
La función debe devolver un nuevo arreglo que contenga los cuadrados de los números originales, 
pero solo aquellos cuadrados que sean mayores de 20. 
*/

function transformarYFiltrar(numberArray) {
    newArray = []

    numberArray.forEach(element => {
        if (element * element > 20) newArray.push(element)
    });

    return newArray
}

numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]

// console.log(transformarYFiltrar(numArray))

/* 
Ejercicio 3: Promesas y Asincronía 
Instrucciones: 
Simula una llamada a una API con fetch que obtiene datos de usuarios. 
Crea una función llamada obtenerUsuarios que use fetch para obtener los datos y los imprima en la consola. 
Maneja los errores adecuadamente utilizando try...catch. 
*/


async function obtenerUsuarios() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
        if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`)
        }

        const data = await res.json()
        console.log(data)
    }
    catch (e) {
        console.error(e)
    }
}

// obtenerUsuarios()

/* 
Ejercicio 4: Manipulación Compleja del DOM 
Instrucciones: 

Crea un archivo HTML con una lista desordenada (<ul>) y un botón. 
Usa JavaScript para agregar un nuevo elemento de lista (<li>) con el texto "Nuevo ítem" cada vez que se haga clic en el botón. 
Cada elemento de lista debe tener un botón para eliminarlo de la lista. 
*/

/*
Instrucciones: 
Ejercicio 5: Algoritmos y Estructuras de Datos 
Implementa una función llamada ordenarPorPropiedad que tome un arreglo de objetos y el nombre de una propiedad 
por la que se debe ordenar. 
La función debe devolver un nuevo arreglo con los objetos ordenados por la propiedad especificada. 
Nota: estos ejercicios ademas de subirlos se deben entregar personalmente para poder validar el correcto funcionamiento de los mismos. */

const personas2 = [
    { nombre: 'Juan Pérez', edad: 25, sueldo: 125 },
    { nombre: 'Maria Gómez', edad: 3 , sueldo: 3335 },
    { nombre: 'Carlos Díaz', edad: 41, sueldo: 23  },
    { nombre: 'Ana López', edad: 28, sueldo: 25  },
];

function ordenarPorPropiedad(myarray, myproperty) {
    myarray.sort((a, b) => a[myproperty] - b[myproperty])
    console.log(myarray)
}

ordenarPorPropiedad(personas2, 'edad')