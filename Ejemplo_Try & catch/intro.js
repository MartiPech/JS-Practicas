//La idea con esto es que puedar manejar los errores esperados

try{   
    //llamar al backend
    console.log("llamar al backend");
    /*
    setTimeout( () => { CON ESTO SE PUEDE HACER ASYNC Y SE SALTA UNAS COSAS 

    },1000)
    */
        throw('El ciente no esta listo');
}catch(error){
    //tomamos el error para que haga algo que creemos que sea correcto
    console.log('algo fallo ', error);


}finally{
    //se ejecucta si arroja error o no 
    console.log('Se ejecuta siempre ')
}

//