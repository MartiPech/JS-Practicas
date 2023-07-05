let numers = [1,2,3,4,5,6,7,8,11,12,13,14,15];

console.log(numers.sort());

//!!! Warning !!!
// date cuenta que ordenas el primer caracter y luego pasa al siguente caracter. 
//para que ordene bien hay que poner lo siguente.

console.log(numers.sort((x,y)=> x-y));


//en el caso de cadenas de string no hay drama, por que hace bien su cometido 

//Forma invertida 

console.log(numers.sort((x,y)=>y-x));