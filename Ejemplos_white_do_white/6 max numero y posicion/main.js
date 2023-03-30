let n = parseInt(prompt("ingrese numero"));
let indice = 1;
let max_n = n
let indice_max = indice

while(n !== 0){
    n =parseInt(prompt("ingrese numero"));
    indice++
    console.log(`${indice}`)

    while(n>max_n){
        max_n=n;
        indice_max=indice
    
    }
};
while(n == 0){
    alert("el numero mayor es "+max_n+ " y su indice es "+indice_max)
    if(n==0) break
};



