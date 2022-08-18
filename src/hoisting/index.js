

console.log(nameOfDog);
var nameOfDog = "Elmo"; //Mostrará undefined pues la asignacion se hace despues del llamado

/*Basicamente lo que esta sucediendo es:
var nameOfDog;
console.log(nameOfDog); 
 */

nameOfCat();

function nameOfCat() {
    console.log(`El mejor perrito es: ${dog}`)
}

var dog = "Bruno" 

// El mejor perrito es undefined por que lo que realmente pasó fue:
/*
var dog;  -> No tiene asignacion o no tiene valor

nameOfCat();

function nameOfCat() {
    console.log(`El mejor perrito es: ${dog}`) -> No llega ninguna informacion = undefined
}
*/

/*El concepto de Hoisting fue pensado como una manera general de referirse a cómo funcionan los contextos de ejecución en JavaScript (específicamente las fases de creación y ejecución).

Las Variables y las funciones se procesan antes de ejecutar el código
Las funciones antes que las Variables
Conceptualmente, por ejemplo, una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código

Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código.

Buenas Prácticas: Las funciones se deben de declarar al inicio del código */