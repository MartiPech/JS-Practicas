let n = parseInt(prompt("Ingresa un numero para ver si es primo"));
let d = 2 ;
let num_primo = true;


while(d<n){
    if(n%d==0){
        num_primo=false
        break
    }
    d ++
}

if(num_primo===false){
    alert("no es numero primo")
}else{
    alert("ES PRIMO")
}