function agregar(valor){
    document.getElementById("pantalla").value +=valor
}

function borrar(){
    document.getElementById("pantalla").value = ""
}

function resultado(){
    const valorPantalla = document.getElementById("pantalla").value;
    const calcular = eval(valorPantalla);
    document.getElementById("pantalla").value = calcular;
}