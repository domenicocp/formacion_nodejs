function printstuff(stuff){
    console.log(stuff)
}

//printstuff("Prueba ok");

function mainfunction(anotherfunction,value){
    anotherfunction(value);
}

mainfunction(printstuff,"Desde funcion");