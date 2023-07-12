let a = typeof 3.12 ;
console.log(a);

let b = typeof "pedro";
console.log(b);

let c = typeof true ;
console.log(c);

let d = typeof ["ricardo", "mabel","rocio"];
//arroja que es un OBJECT, aun que sea un array 
console.log(d);
let e = typeof {curso:"JAVASCRIPT"};// En este caso si sale el obj
console.log(e);

let f = typeof new Date();// en estos caso da obj
let g = typeof new Map();// en estos caso da obj
let h = typeof new Set();// en estos caso da obj

let i = typeof function(){};
console.log(i);

let j = typeof null; // en estos caso da obj
console.log(j)

// SOLUCION PARA EL TEMA DEL OBJECT 
//linea  console.log(k instanceof Array); no me deja poner un string ... 

let k = ["mabel", "belen", "romina"];
console.log("esto dice ",k instanceof Array);

if(k instanceof Array){
    console.log(`Gracias backend por la array`);
}else{
    console.log(`Mandame un array por favor`);
}

