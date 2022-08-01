

// variables

var a; // declaration
var b = "b" // declaration and asignation
b = "bb" // re-asignation
var a = "aa" // re-declaration

//Global scope:
/**/

var fruit = "apple";

function bestFruit() {
    console.log(fruit);
}
bestFruit();    

function countries() {
    country = "Colombia"; // We are asignating but not declarating.(It will become global)
    console.log(country);
}

countries();
console.log(country);