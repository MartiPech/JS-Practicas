let numero_ingresaso = parseInt(prompt("Ingrese un numero"));

if((numero_ingresaso =="")||(isNaN(numero_ingresaso))){
    alert("no pusiste un numero")
}else{
    for(i=1; i<11; i++){
            let resultado =numero_ingresaso *i;
            alert("el numero ingresado "+numero_ingresaso +" X "+ i+ " = "+ resultado) 
    };
};