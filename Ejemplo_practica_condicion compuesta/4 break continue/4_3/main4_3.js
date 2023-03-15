for(i=0; i<100 ; i++){
    let name = prompt("ingrese nombre");
    if(name ===""){
        continue
    };
    if(name==="exit"){
        break
    }
    console.log(name)
};
console.log("Fin del ciclo")