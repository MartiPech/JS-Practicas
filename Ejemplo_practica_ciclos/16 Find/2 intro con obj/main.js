let obj = [
    {name:"maria",lastname:"Aldebaran"},
    {name:"jose",lastname:"perez"},
    {name:"armando",lastname:"perez"}
]

let arrObj = obj.find(x => x.lastname == "perez");
console.log(arrObj);
//encuentra el primero y devuelve ese , si llega haber otro no lo devuelve 
//entra un obj . no un array
