/*forEach, at, concat, copyWithin, filter, find, findIndex, flat, includes, every, 
join, toString, indexOf, keys, values, entries, get, push, pop, shift, unshift, delete,
 splice, reduce. */


// Metodos
/*
push: Agregar un elemento al final del array
pop: Borrar el último elemento
unshift: Agregar un elemento al inicio del array
shift: Borrar el primer elemento

.slice(ini, end) = devuelve los elementos desde la posicion ini hasta end. 
splice: Agrear un elemento en una parte seleccionada del array

*/


// Arrays estáticos & Arrays dinámicos


// Construir un array 

// Forma convecional 
/* const arr = ["Diego", "Karen", "Oscar"];
 arr.push("Ana"); */

// Con una clase

class MyArray {
    constructor(){
        this.length = 0; // Los elementos iniciales en este array son = 0
        this.data = {}; // Aqui se guardará la informacion que agregaremos
    }
    get(index){ // metodo getter: nos da la oportunidad de obtener informacion de algun elemento
        return this.data[index]; // Esto nos devolvera la informacion guardada dependiendo de su indice
    }

    push(item){ // Para hacer crecer mi array, le ponemos un push + el item que se agregara en el array
        this.data[this.length] = item; // La longitud inicial es igual al numero de elementos iniciales = 0
        this.length++; // Cada que se agrega un item, entonces el length tambien aumentará
        return this.data // Entonces nos mostrara los datos deseados.
    }
}

const myArray = new MyArray();

/* Al ir al navegador colocamos:

    myArray.push("José"); /// Basicamente de esta manera agregaremos datos al array
    -> Object {0: "José"} /// y se veran reflejados en el objeto creado + su indice

    myArray.push("Carlos");
    -> Object {0: "José", 1: "Carlos"} /// Aqui veremos como el objeto es mas grande, sus indices y valores

    myArray.get(1);
    -> "Carlos" /// y de esta manera obtenemos la informacion del indice seleccionado.
*/


class MyArray2{
    constructor(){
        this.length = 0;
        this.element = {};
    }

    get(index){
        return this.element[index];
    }
    push(element){
        this.element[this.length] = element;
        this.length++;
        return this.element;
    }
    pop(){
        this.element[this.length] = element;
        this.length--;
        return this.element;
    }
}

const array2 = new MyArray2()

class CarList{
    constructor(){
        this.length = 0;
        this.cars = {}
    } 
    get(i){
       return this.cars[i];
    }
    push(car){
        this.cars[this.length] = car;
        this.length++;
        return this.cars;
    }
}

const newCar1 = new CarList();
// We can add -->     newCar1.push("toyota"); 
// We can use -->     newCar1.get(0);


// Agregar pop a las clases:

class WaterBrandList{
    constructor(){
        this.length = 0;
        this.waterBrands = {}
    } 
    get(index){
       return this.waterBrands[index];
    }
    push(item){
        this.waterBrands[this.length] = item;
        this.length++;
        return this.waterBrands;
    }
    pop(){
        const lastItem = this.waterBrands[this.length - 1];
        delete this.waterBrands[this.length - 1];
        this.length--;
        return lastItem;
    }
       
    delete(index){
        const item = this.waterBrands[index];
        this.shiftIndex(index);
        return item
    }
    shiftIndex(index){
        for(let i = index; i < this.length - 1; i++){
            this.waterBrands[i] = this.waterBrands[i + 1];
    }
        delete this.waterBrands[this.length - 1];

    }

    addFirst(item) {
        this.unshift(0);0
        this.waterBrands[0] = item;
        return item;
    }
    unshift(index) {
        this.length++;
        for (let i = this.length - 1; i > index - 1; i--) {
          this.waterBrands[i] = this.waterBrands[i - 1];
    }
    }



}
const newWater = new WaterBrandList(); 

newWater.push("Manantial");
newWater.push("St Pellegrino");
newWater.push("Great Value");

newWater.delete(1); // "St Pellegrino"
newWater(); // Length: 2 ----> 0: "Manantial" 1: "Great Value"

  
//-------------------------------    ----------------------------------------------------------------

class Frutas{
     constructor(){
        this.length = 0;
        this.NombreFrutas = {}
     }

     get(index){
        return this.NombreFrutas[index];
     }

     push(fruta){
        this.NombreFrutas[this.length] = fruta;
        this.length++;
        return this.NombreFrutas;
     }

     pop(){
        const ultimaFruta = this.NombreFrutas[this.length - 1]; // El ultimo elemento se guarda en ultimaFruta y me muestra cual es
        delete this.NombreFrutas[this.length - 1]; // Entonces con delete se borra ese ultimo elemento
        this.length--; // Legth disminuye su tamaño
        return ultimaFruta; // Nos devuelve el elemento que fue borrado
     }

     /* DELETE: Es un keyboard que se utiliza para borrar informacion dentro de un metodo, es algo que lleva una logica que nosotros le pongamos
     utilizaremos el DELETE para lograr cambiar el indice de los valores al remover uno o mas elementos y que de esta manera quede organizado */
     delete(index){
        const fruta = this.NombreFrutas[index];
        this.shiftIndex(index); // Con este metodo aseguramos que cada item se acomode en el indice que deben estar despues de borrar algun elemento

        return fruta;
     }
        shiftIndex(index){ // Generará los cambios al momentos de borrar un elemento (Esto es un metodo llamado shift)
            for(let i = index; i < this.length - 1; i++){ // cuando i = index (sera la posicion del elemento que queremos borrar)
                this.NombreFrutas[i] = this.NombreFrutas[i + 1];
        }   

        delete this.NombreFrutas[this.length - 1]; // Aqui borramos el indice del elemento borrado
        this.length--;
    }


}


const totalFrutas = new Frutas();

totalFrutas.push("Banana");
totalFrutas.push("Fresa"); 
totalFrutas.push("Mango"); 

/*Para utilizar el metodo pop de manera apropiada sin afectar el resto de elementos, debemos implementarlo con delete + otro metodo de correcion de index */

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






