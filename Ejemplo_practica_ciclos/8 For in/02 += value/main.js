//Sumar los valores de un objeto numérico
const dir = {
    num1:32,
    num2:44,
    num3:65,
    num4:87,
}

let addValue = 0;
for(prop in dir){
     addValue += dir[prop];
    console.log(addValue) // de esta forma me da una lista de la suma paso a paso 


}
 
// la otra forma 

let sum = 0;

for(prop in dir){
    if (dir.hasOwnProperty(prop)){
         sum+= dir[prop]
    }
}
console.log(sum)// de esta forma me devulve la suma total , un solo numero
