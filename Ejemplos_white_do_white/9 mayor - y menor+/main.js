let n = parseInt(prompt("Ingrese el numero"));
let bp = 0;
let bn = 0;
let Mayor_negativo = 0;
let Menor_positivo = 0;

while(n!==0){
    n = parseInt(prompt("Ingrese el numero"));
    while(n<0){
        while(bn == 0){
            Mayor_negativo=n;
            bn++;
        }

        while(bn==1){
            while(n<Mayor_negativo){
                Mayor_negativo=n
            }
        }
    }
}

while(n==0){
    alert("Mayor menos es "+ Mayor_negativo)
    if(n==0)break
}