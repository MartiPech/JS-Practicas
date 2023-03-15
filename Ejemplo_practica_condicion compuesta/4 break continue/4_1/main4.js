const numeros=[1,2,3,4,5,6,7,8,9];

for(i=0 ; i<numeros.length;i++){
   if(i===5){
       break
   };
   console.log(numeros[i]);};


for(j=0; j<numeros.length; j++){
    if(j===3){
        continue
    };
    console.log(numeros[j]);
};