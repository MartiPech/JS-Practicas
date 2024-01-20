let array = [32,22,44,1,55,7,16];

for(let i=0 ;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[j]<array[i]){
            let swap = array[i];
            array[i] = array[j];
            array[j] = swap;
        }
    }
    
}
console.log(array)