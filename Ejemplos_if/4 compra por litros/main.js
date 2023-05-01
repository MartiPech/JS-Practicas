/*ej un importante negocio de desinfectante , realiza descuentos dependiendo de la cantidad de litros vendidos segun la siguente escala 
A) menos de 100 litros no hay descuento 
B)si vende entre 101 litro a 300 litros descuento del 10 porciento
C)si vende entr 301 a 500 descuento del 15 por ciento 
D)mas de 500 litro es el 25 %   */

let litro = parseInt(prompt("Ingrese la cantidad de litros que desea comparar y el decimos el precio y si tiene descuento"));
let importe = 500;

if(litro<100){ 
    let litromenosde100 = litro*importe
    alert("su precio de " + litro +" litros "+ " le saldria "+ litromenosde100);
}else if (litro>100){
    let litromasde100 = (litro*importe)*0.9;
    alert("su precio de " + litro +" litros "+ " le saldria "+ litromasde100+ "tiene descuento del 10%");

}else if (litro>300){
    let litro300 = (litro*importe)*0.85;
    alert("su precio de " + litro +" litros "+ " le saldria "+ litro300+ "tiene descuento del 15%");

}else if (litro>500){
    let litro500 = (litro*importe)*0.75;
    alert("su precio de " + litro +" litros "+ " le saldria "+ litro500 + "tiene descuento del 25%");
}