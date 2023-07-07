let edad = 18;
let nacionalidad = "Argentino";
let pasaporte = false; 

if(edad >=18){
    console.log("Tramite 1 correcto , pase al next")
    if(nacionalidad == "Argentino"){
        console.log("Tramite 2 correcto , pase a la siguente instancia")
        if(pasaporte == true){
            console.log("los tramites estan correctos , puede viajar")
        }else{
            console.log("Por favor pida su pasaporte con el FORM-1000X")
        }
    }else{
        console.log("no posee la nacionalidad para viajar")
    }
}else{
    console.log("no tiene la edad suficiente , para viajar solo")
}