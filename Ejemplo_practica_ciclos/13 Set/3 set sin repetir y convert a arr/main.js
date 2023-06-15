let arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9];
let unicos = new Set(arr);
console.log(unicos);//me imprime set´s , yo quiero una array 

let unicosarr =[...unicos];
console.log(unicosarr); 

/*

esto pasa si pongo spread operate ""let unicosarr =[unicos];""
[ Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 } ]

*/