if (true) {
    console.log("Hola");
} else{
    console.log("Soy Falso");
}

var edad = 18; // Dato se cambia a partir de la edad del Usuario

if (edad === 18){ //Datos deben ser estricamente igual
    console.log("Aprobado 1ra Vez");
} else if (edad > 18){ //Datos deben ser mayor a 18
    console.log("Aprobado");
} else { //Cualquier otro resultado
    console.log("Denegado");
}

//Operador Ternario if y else en una sola linea

condition ? true : false;

var numero = 1;
//? Significa Entonces
var resultado = numero === 1 ? "Resultado siendo 1" : "Resultado no es 1";

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario GANO con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "el usuario GANO con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("el usuario GANO con " + op3)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};

resultado(op1,op3) //el usuario GANO con Piedra```
