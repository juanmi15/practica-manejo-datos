
function fruits(){
    if(true){
        var fruit1 = "Apple"; // function scope
        let fruit2 = "Orange"; // block scope
        const fruit3 = "Banana"; // block scope
        
        console.log(fruit2); // It will run because it is in the same block as its variable
    }

    console.log(fruit1);
  
    console.log(fruit3);

}

fruits();