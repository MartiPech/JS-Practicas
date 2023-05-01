/* hacer un programa que pide que ingreses un numero y te dice si es primo o no  */

/*let N = parseInt(prompt("Ingresa un numero para ver si es primo"));
let D = 2 ;
let count=0;

while(D<=N){
    N%D == 0
    D++
    count++
    console.log(`iteracion${D}`)
}
while(count==2){
    alert("Es primo")
    if(count==2) break;//una forma para cortar con el loop infinito 
}
while(count>2){
    alert("No es primo")
    if(count>2) break;//una forma para cortar con el loop infinito 
}
*/
let numero = parseInt(prompt("Ingresa un número: "));
let es_primo = true;
let divisor = 2;

while (divisor < numero) {
    if (numero % divisor == 0) {
        es_primo = false;
        break;
    }
    divisor += 1;
}

if (es_primo) {
    console.log(numero + " es primo.");
} else {
    console.log(numero + " no es primo.");
}