
const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { // funcion interna : entramos a un closure
        const inner = 2;
        console.log(myNumber,myGlobal);

    function  child(){
            console.log(inner, myNumber,myGlobal);          
    }

    return child();   
    }   
    return parent();
}

myFunction();

// { scope      [closure} contexto de ejecucion ]