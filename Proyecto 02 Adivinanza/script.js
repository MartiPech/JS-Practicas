let numeros = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");
let radomNum = Math.floor((Math.random()*100)+1)


function chequearNum(){
    let numero = parseInt(numeros.value);
    
    if(numero <1 || numero >100 || isNaN(numero)){
        mensaje.textContent = "Por favor ponga un numero del 1 al 100 "
    

        }else if (numero == radomNum){
            mensaje.textContent = "FELICITACIONES GANASTE";
            mensaje.style.color = "green";
            numeros.disabled = true;
         
        }else if(numero < radomNum){
            mensaje.textContent = "Es mas grande el numero a llegar";
            mensaje.style.color = "black";
        }else{
            mensaje.textContent = "Es mas chico el numero a llegar";
            mensaje.style.color = "black";
        }
    

}



console.log(radomNum);