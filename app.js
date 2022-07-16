function printstuff(stuff){
    console.log(stuff)
}

function mainfunction(anotherfunction,value){
    anotherfunction(value);
}

mainfunction(printstuff,"Desde funcion");