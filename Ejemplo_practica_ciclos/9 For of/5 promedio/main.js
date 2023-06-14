//promedio de una array de numeros 

const numers = [ 12,34,45,567,78,89,90];
let sum = 0;
let pro = 0;
for(num of numers){
    sum+=num;
    if(numers.indexOf(num)===numers.length-1){
        pro = sum/numers.length;
    }
    
}
console.log(pro)