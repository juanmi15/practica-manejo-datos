
function greeting (){
    let userName = "Ana";
    console.log(userName);

    if (userName === "Ana"){
        console.log(`Hello ${userName}`);
    }
}

greeting();
console.log(userName); // Esto no podra ser visualizada debido a que es una function scope, que solo funciona
//dentro de la funcion por el hecho de ser let/const. 
