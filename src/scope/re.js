// Var

var firstName; // cuando solo declaramos sin valor, este es "undefined"
firstName = "Oscar";
console.log(firstName);


var lastName = "David"; // declaring and asigning
lastName = "Ana"; // reasigning
console.log(lastName);

var secondName = "David";  // declaring and asigning
var secondName = "Gabriel"; // redeclaring and reasigning 
console.log(secondName);


// Let

let fruit = "Apple" // declarar y asignar
fruit = "Kiwi" // re-asigning
// let fruit = "Orange" // (X) ERROR No podemos re-declarar con let.




// Const 

const animal = 'dog'; // declarar y asigar
// animal = 'cat'; // (X) ERROR No podemos re-asignar NI re-declarar con const.
console.log(animal);


const vehicles = [];
vehicles.push("toyota");
console.log(vehicles);

vehicles.pop(); // En este caso estamos un metodo de eliminacion =/= reasignar o redeclarar
console.log(vehicles);
