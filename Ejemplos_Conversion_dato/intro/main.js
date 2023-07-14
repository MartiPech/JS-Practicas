// string a number
//hay varias maneras
let a = Number("3.14");
//let a = parseInt("3.14");
//let a = parseFloat("3.14");
//let a = +"3.14"; se suele usar mucho en framworks
console.log(a);
console.log(typeof a );   

/////////////////////////////////////////////////////////////////////
//number a string 
let b = String(24);
let c = 1;
let d = c.toString();

console.log(b , typeof b);
console.log(d , typeof d);


////////////////////////////////////////////////////////////
//date a number

let e = new Date();
let f = Number(e);
console.log(f , typeof f );// aclaracion date mando el numero de milisegundos 
////////////////////////////////////////////////////////////
//date a string 
let g = new Date();
let h = g.toString()
console.log(h,typeof h);

////////////////////////////////////////////////////////////
//number a booleano
let i = Boolean(32);
let ii = Boolean(0);
let iii = Boolean("mabel");
console.log(`caso de i : ${i}`,`caso de ii : ${ii}`,`caso de iii : ${iii}` , "tipo de dato"+typeof i);

//CASO ESPECIAL POR SERGIE
//caso  con el error 
let ricardo = 0 ;
if(ricardo){
    console.log("vino un dato")
}else{
    console.log("vino un null o Nan")
}

//caso con la solucion 

if(ricardo&&ricardo==0){
    console.log("vino un dato")
}else{
    console.log("vino un null o Nan")
}
//cero es un numero pero tambien es un false en booleano y js le da mas peso al booleano .
//en una situacion como esta . tenerla encuenta y poner esta solucion.