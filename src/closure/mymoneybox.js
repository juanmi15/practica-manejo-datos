
// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`)
// }

// moneyBox(5);
// moneyBox(2);


function  moneyBox(){
    let saveCoins = 0; // Cada que se abra una cuenta, empezará en 0
    function countCoins(coins){ // El argumento son las monedas que le pasaré
        saveCoins += coins; // Esto agrega los elemento que yo estoy pasando
        console.log(`MoneyBox: $${saveCoins}`);
    } 
    return countCoins;
}

const myMoneyBox = moneyBox(); // Creamos una constante para usarla con la funcion como referencia

myMoneyBox(5);
myMoneyBox(12);
myMoneyBox(3);

const moneyBoxAna = moneyBox();
moneyBoxAna(20);
moneyBoxAna(5);
moneyBoxAna(10);

//----------------------------------------------------------------------------
// Ejercicios de closures


function caloriasConsumidas (){
    let sumaDeGramos = 0;
    function totalIngesta(gramos){
        sumaDeGramos += gramos;
        if(sumaDeGramos > 2200 && sumaDeGramos < 2650 ){
            console.log(`Excelente trabajo lograste ${sumaDeGramos} kcal hoy, sigue asi!`);
        } else if(sumaDeGramos < 2199){ 
           console.log (`Aun no se logra el objetivo calorico de hoy ¡Sigue comiendo!`)
        } else {
            console.log(`Creo que debes reducir tu ingesta`)
        }
    }
        return totalIngesta
    }
 
    
    

const ingestaDeJuanm = caloriasConsumidas() 

ingestaDeJuanm(450);
ingestaDeJuanm(520);
ingestaDeJuanm(600);
ingestaDeJuanm(450);
ingestaDeJuanm(350);

//----------------------------------------------------------------------------

