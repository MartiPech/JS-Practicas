/*hacer un programa  . ingrese numeros . que el programa te diga cual es el primer menor y el segundo menor */

let n = parseInt(prompt("ingrese numero"));
let m1 = n;
let bandera=0;
let m2 =m1



while(n!== 0){
    n = parseInt(prompt("ingrese numero"));
    while(n<m1 && n!==0){
        m2=m1;
        m1=n;
    }

    while(bandera!==0){
        m2=n;
        bandera++
            while(n<m2 && n!==0){
                m2=n

            }
    }
}

while(n==0){
    alert("primer lugar "+ m1 +" segundo puesto "+ m2)
    if(n==0)break
}



















/*let n = parseInt(prompt("Ingrese numero"));
let indice = 1;
let i_min=indice
let i_max=indice
let n_max = n;
let n_min = n;

while(n!==0){
    n=parseInt(prompt("Ingrese numero"));
    indice++

    while(n_max<n){
        n_max=n;
        i_max=indice;
    }

    while(n_min>n && n!==0){
        n_min=n;
        i_min=indice
    }
}

while(n == 0){
    alert(" numero max "+ n_max+" indice del max "+ i_max+ " numero menor "+n_min+" indice del menor "+i_min );
    if(n==0)break
}
*/