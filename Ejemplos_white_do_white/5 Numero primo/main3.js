let n = parseInt(prompt("Ingrese numero"));
let num_primo = true;
   
    if(n==2){
        alert("Primo")
    }else if (n<2){
        alert("no primo")
    }else{
        for(i=2 ; i<n ; i++){
            if(n%i===0){
                num_primo = false;
                break
            }
        }
    }
    
    
    
    if(num_primo=== false){
        alert("no es primo")
    }else{
        alert("ES PRIMO ")
    }

