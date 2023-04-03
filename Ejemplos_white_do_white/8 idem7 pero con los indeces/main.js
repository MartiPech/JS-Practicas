/*hacer un programa igual que el 7 pero ahora que te diga la posicion de que ingreso */

let n = parseInt(prompt("ingrese numero"));
let m1 = n;
let bandera=0;
let m2 =m1
let indice = 1;
let indice_m1 =indice
let indice_m2 = indice_m1


while(n!== 0){
    n = parseInt(prompt("ingrese numero"));
    indice++
    
    while(n<m1 && n!==0){
        m2=m1;
        m1=n;
        indice_m2=indice_m1
        indice_m1=indice
    }

    while(bandera!==0){
        m2=n;
        bandera++
        indice_m2= indice
            while(n<m2 && n!==0){
                m2=n
                indice_m2= indice

            }
            //break; 
    }
}

while(n==0){
    alert(  "primer lugar "+ m1 + "indice m1 "+indice_m1+
            " segundo puesto "+ m2+ " indice m2 "+indice_m2)
    if(n==0)break
}