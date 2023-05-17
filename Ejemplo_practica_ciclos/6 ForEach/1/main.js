//es un metodo de array . que es metodo + funcion itera una sola vez el array o obejeto 
let names = ["maria", "juan", "leonardo","marcelo", "uzman"];
names.forEach((name)=>{
    console.log(name);
} )

//defecto no puedes usar break o contiue
/////////////////////////////////////////////////////////////////////////////
for(index in names){
    console.log(index)
}
//VENTAJA el for in itera sobre la array original y lo que se agrega dsp 

for(index2 in names){
    console.log(names[index2])
}

/////////////////////////////////////////////////////////////////////////////
//for of es lo opuesto de su hermano for in . el of solo itera la array original y aunque tenga agregados se los pasa por los huevos 
//ventaja si se puede usar setencias como break y continue